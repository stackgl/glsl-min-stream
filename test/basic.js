const tap = require('tap');

const minify = require('../');
const tokenizer = require('glsl-tokenizer/stream');
const parser = require('glsl-parser');
const deparser = require('glsl-deparser');
const fs = require("fs");
const path = require("path");
const through = require("through");

const zeroGLSL = path.resolve(__dirname, "./zero-decimals.glsl");
const commutativeGLSL = path.resolve(__dirname, "./commutative-operators.glsl");
const workingGLSL = path.resolve(__dirname, "./working.glsl");
const vecGLSL = path.resolve(__dirname, "./vec-shorthand.glsl");
const matGLSL = path.resolve(__dirname, "./mat-shorthand.glsl");

tap.test("basic", t => {
	let output = "";

	const endStream = through((data) => {
		output += data;
	}, () => {
		t.ok(output, "missing output");
		t.ok(output.includes("void main"), "main is overriden");
		t.matchSnapshot(output, "output");
		t.end();
	});

	fs.createReadStream(workingGLSL)
	.pipe(tokenizer())
	.pipe(parser())
	.pipe(minify())
	.pipe(deparser())
	.pipe(endStream);
});

tap.test("basic safe words", t => {
	let output = "";

	const endStream = through((data) => {
		output += data;
	}, () => {
		t.ok(output.includes("void main"), "main is overriden");
		t.ok(output.includes("PI"), "PI is overriden");
		t.matchSnapshot(output, "output");
		t.end();
	});

	fs.createReadStream(workingGLSL)
	.pipe(tokenizer())
	.pipe(parser())
	.pipe(minify(["main", "PI"]))
	.pipe(deparser())
	.pipe(endStream);
});

tap.test("basic storage mutation", t => {
	let output = "";

	const endStream = through((data) => {
		output += data;
	}, () => {
		t.ok(output.includes("void main"), "main is overriden");
		t.notOk(output.includes("uniform vec2 resolution"), "resolution uniform is not overriden");
		t.matchSnapshot(output, "output");
		t.end();
	});

	fs.createReadStream(workingGLSL)
	.pipe(tokenizer())
	.pipe(parser())
	.pipe(minify(["main"], true))
	.pipe(deparser())
	.pipe(endStream);
});

tap.test("decimals starting or ending with 0", t => {
	let output = "";

	const endStream = through((data) => {
		output += data;
	}, () => {
		t.matchSnapshot(output, "output");
		t.end();
	});

	fs.createReadStream(zeroGLSL)
	.pipe(tokenizer())
	.pipe(parser())
	.pipe(minify())
	.pipe(deparser())
	.pipe(endStream);
});

tap.test("vec shorthand", t => {
	const types = ["", "b", "i"]
	.map(prefix => [2,3,4].map(size => `${prefix}vec${size}`))
	.reduce((a, b) => a.concat(b));

	const variableNames = types
	.map(type => ["Short", "Long"].map(suffix => `${type}${suffix}`))
	.reduce((a, b) => a.concat(b));

	const safewords = [
		"main",
		...variableNames,
	];

	let output = "";

	const endStream = through((data) => {
		output += data;
	}, () => {
		t.matchSnapshot(output, "output");

		t.ok(
			variableNames
			.filter(name => name.endsWith("Long"))
			.every(name => output.includes(`${name} = ${name.replace("Long", "")}(.0, 1.`)),
			"does not retain differing scalars"
		);

		t.ok(
			variableNames
			.filter(name => name.endsWith("Short"))
			.every(name => output.includes(`${name} = ${name.replace("Short", "")}(.0)`)),
			"does not shorten identical scalars"
		);

		t.ok(output.includes("ivec4(vec2(.0, 1.), vec2(.0, 1.))"), "does not preserve vectors in initalizer");

		t.end();
	});

	fs.createReadStream(vecGLSL)
	.pipe(tokenizer())
	.pipe(parser())
	.pipe(minify(safewords))
	.pipe(deparser())
	.pipe(endStream);
});

tap.test("grouping removal test", t => {
	let output = "";

	const endStream = through((data) => {
		output += data;
	}, () => {
		t.matchSnapshot(output, "output");
		t.end();
	});

	fs.createReadStream(commutativeGLSL)
	.pipe(tokenizer())
	.pipe(parser())
	.pipe(minify())
	.pipe(deparser())
	.pipe(endStream);
});

tap.test("mat shorthand", t => {
	const types = [2,3,4].map(size => `mat${size}`);

	const variableNames = types
	.map(type => ["Short", "Long"].map(suffix => `${type}${suffix}`))
	.reduce((a, b) => a.concat(b));

	const safewords = [
		"main",
		...variableNames,
	];

	let output = "";

	const endStream = through((data) => {
		output += data;
	}, () => {
		t.matchSnapshot(output, "output");

		t.ok(
			variableNames
			.filter(name => name.endsWith("Long"))
			.every(name => output.includes(`${name} = ${name.replace("Long", "")}(1., 1.`)),
			"does not retain differing scalars"
		);

		t.ok(
			variableNames
			.filter(name => name.endsWith("Short"))
			.every(name => output.includes(`${name} = ${name.replace("Short", "")}(1.)`)),
			"does not shorten identical scalars"
		);

		t.end();
	});

	fs.createReadStream(matGLSL)
	.pipe(tokenizer())
	.pipe(parser())
	.pipe(minify(safewords))
	.pipe(deparser())
	.pipe(endStream);
});

