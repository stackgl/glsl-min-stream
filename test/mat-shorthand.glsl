mat2 mat2Long = mat2(
	1.0, 1.0,
	1.0, 1.0
);

mat2 mat2Short = mat2(
	1.0, 0.0,
	0.0, 1.0
);

mat3 mat3Long = mat3(
	1.0, 1.0, 1.0,
	1.0, 1.0, 1.0,
	1.0, 1.0, 1.0
);

mat3 mat3Short = mat3(
	1.0, 0.0, 0.0,
	0.0, 1.0, 0.0,
	0.0, 0.0, 1.0
);


mat4 mat4Long = mat4(
	1.0, 1.0, 1.0, 1.0,
	1.0, 1.0, 1.0, 1.0,
	1.0, 1.0, 1.0, 1.0,
	1.0, 1.0, 1.0, 1.0
);

mat4 mat4Short = mat4(
	1.0, 0.0, 0.0, 0.0,
	0.0, 1.0, 0.0, 0.0,
	0.0, 0.0, 1.0, 0.0,
	0.0, 0.0, 0.0, 1.0
);

mat2 mat2NotQuiteShort = mat2(
	1.0, 0.0,
	0.0, 0.0
);

float one = 1.0;
float zero = 0.0;

mat2 mat2WithIdentShort = mat2(
	one, zero,
	zero, one
);

vec3 vec3one = vec3(1,0,0);
vec3 vec3two = vec3(0,1,0);
vec3 vec3three = vec3(0,0,1);

mat3 mat3WithVecIdent = mat3(
  vec3one,
  vec3two,
  vec3three
);

mat3 mat3WithMat = mat3(mat3(1, 0, 0, 0, 1, 0, 0, 0, 1));

