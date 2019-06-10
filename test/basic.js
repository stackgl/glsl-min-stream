const tap = require('tap');

const minify = require('../');
const tokenizer = require('glsl-tokenizer/stream');
const parser = require('glsl-parser');
const deparser = require('glsl-deparser');
const fs = require("fs");
const path = require("path");
const through = require("through");

const commutativeGLSL = path.resolve(__dirname, "./commutative-operators.glsl");
const workingGLSL = path.resolve(__dirname, "./working.glsl");

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

