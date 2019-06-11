/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP basic > output 1`] = `

#ifdef GL_ES

precision highp float;
#endif

const int a = 6;
#define VIEW_FULL_TRIANGLE 0

#define SHADOWS_ENABLED 1

const float b = .8;
#define REVERSE_TRI1 0

#define REVERSE_TRI0 0

#define REVERSE_TRI2 0

#define REVERSE_TRI3 0

#define REVERSE_TRI4 0

#define REVERSE_TRI5 0

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;
uniform sampler2D backbuffer;
float c = 3.14159265;
float d = .0;
float e = .0;
const int f = 6;
vec3 g[f];
vec3 h[f];
float i[f];
mat3 j[f];
vec3 k[3];
float l(vec3);
float l(vec3 m) {
  vec3 n = vec3(h[0][0], 0, h[0][2]);
  m += n;
  float o = 1.;
  for(int p = 0; p < a; p++) {
    mat3 q = j[0];
    vec3 r = h[0];
    float s = i[0];
    vec3 t = m - g[0];
    float u = dot(t, t);
    for(int v = 1; v < f; v++) {
      vec3 w = m - g[v];
      float x = dot(w, w);
      if(x < u && (p > 0 || v < 4)) {
        u = x;
        q = j[v];
        r = h[v];
        s = i[v];
      }
    }
    m -= r;
    m = m * q;
    o *= s;
  }
  vec3 y = normalize(cross(k[2] - k[0], k[1] - k[0]));
  float z = dot(m - k[0], y);
  vec3 A = m - y * z;
  vec3 B[3];
  B[0] = k[1] - k[0];
  B[1] = k[2] - k[1];
  B[2] = k[0] - k[2];
  for(int v = 0; v < 3; v++) {
    vec3 C = A - k[v];
    vec3 D = cross(y, B[v]);
    float E = dot(C, D) / dot(D, D);
    if(E > .0) {
      A -= D * E;
      float F = dot(C, B[v]) / dot(B[v], B[v]);
      if(F < .0)
        A -= B[v] * F;
      else if(F > 1.)
        A -= B[v] * (F - 1.);
      
      break;
    }
  }
  return length(A - m) / o;
}
#if SHADOWS_ENABLED==1

float G(vec3 m, vec3 H, float I) {
  float J = 2. * I;
  float K = 1.;
  for(int L = 0; L < 30; L++) {
    vec3 M = m + J * H;
    float E = l(M);
    if(E < I)
      return 1.;
    K = min(K, 4. * (E / J));
    J += E;
  }
  return 1. - K;
}
#endif

void N() {
  e = 2.3 * (mouse.y - .5);
  float O = .6;
  if(e > O)
    e = O;
  else if(e < -O)
    e = -O;
  
  d = c / 2.;
  for(int v = 0; v < 5; v++) {
    float P = cos(d);
    float Q = sin(d);
    float R = 1. / (4. * e * e + Q * Q);
    d = atan(sqrt((1. + 2. * P + P * P) * R)) + atan(sqrt((1. - 2. * P + P * P) * R));
  }
  float P = cos(d);
  float Q = sin(d);
  vec3 S = vec3(1, 0, 0);
  vec3 T = vec3(P, 0, Q);
  vec3 U = S + T;
  vec3 V = U * .5 + vec3(0, e, 0);
  h[0] = h[1] = h[2] = h[3] = V;
  h[4] = T;
  h[5] = S;
  g[0] = (S + V) / 3.;
  g[1] = (T + V) / 3.;
  g[2] = (S + V + U) / 3.;
  g[3] = (T + V + U) / 3.;
  float W = length(V);
  float X = length(vec3(1, 0, 0) - V);
  float s = 1. / W + 1. / X;
  i[0] = i[1] = i[2] = i[3] = s;
  i[4] = X * s;
  i[5] = W * s;
  k[0] = vec3(0);
  k[1] = S * (1. + X / W);
  k[2] = T * (1. + W / X);
  j[0][0] = normalize(S - V);
  j[0][1] = -normalize(cross(j[0][0], V));
  j[0][2] = -cross(j[0][0], j[0][1]);
  j[1][0] = normalize(T - V);
  j[1][1] = normalize(cross(j[1][0], V));
  j[1][2] = cross(j[1][0], j[1][1]);
  j[2][0] = j[0][0];
  j[2][1] = normalize(cross(j[2][0], V - U));
  j[2][2] = cross(j[2][0], j[2][1]);
  j[3][0] = j[1][0];
  j[3][1] = -normalize(cross(j[3][0], V - U));
  j[3][2] = -cross(j[3][0], j[3][1]);
  j[0] *= i[0];
  j[1] *= i[1];
  j[2] *= i[2];
  j[3] *= i[3];
  j[4] = mat3(i[4]);
  j[5] = mat3(i[5]);
#if REVERSE_TRI0==1
j[0][1] *= -1.;
#endif
#if REVERSE_TRI1==1
j[1][1] *= -1.;
#endif
#if REVERSE_TRI2==1
j[2][1] *= -1.;
#endif
#if REVERSE_TRI3==1
j[3][1] *= -1.;
#endif
#if REVERSE_TRI4==1
j[4][1] *= -1.;
#endif
#if REVERSE_TRI5==1
j[5][1] *= -1.;
#endif
vec3 D = cross(U - S, vec3(0, 1, 0));
  g[5] = g[2] + 2. * D * dot(D, S - g[2]) / dot(D, D);
  D = cross(U - T, vec3(0, 1, 0));
  g[4] = g[3] + 2. * D * dot(D, T - g[3]) / dot(D, D);
}
void main(void) {
  N();
  vec2 Y = .5 * (-1. + 2. * gl_FragCoord.xy / resolution.xy);
  float Z = .2 * time;
  if(e < .0)
    Z += c / 2.;
  float ba = sin(Z);
  float bb = cos(Z);
  mat3 bc = mat3(vec3(bb, 0, ba), vec3(0, 1, 0), vec3(-ba, 0, bb));
  vec3 bd = vec3(0, 1, 0);
  vec3 be = vec3(0);
  float bf = .0;
  float bg = .5 * c / 2.01;
  vec3 bh = bc * vec3(cos(bg), sin(bg), .0) * 2.;
  vec3 bi = normalize(be - bh);
  vec3 bj = normalize(cross(bd, bi));
  vec3 bk = cross(bi, bj);
  vec3 bl = (bh + bi);
  vec3 bm = bl + Y.x * bj * resolution.x / resolution.y + Y.y * bk;
  vec3 bn = normalize(bm - bh);
  const vec3 bo = vec3(.000001, 0, 0);
  const float bp = 3.;
  float K = .0;
  vec3 bq, M, br;
  float bs = .80;
  for(int v = 0; v < 46; v++) {
    bs += K * .8;
    M = bh + bn * bs;
    K = l(M);
    if(K < .00065 || bs > bp)
      break;
    
  }
  if(bs < bp) {
    br = normalize(vec3(K - l(M - bo.xyy), K - l(M - bo.yxy), K - l(M - bo.yyx)));
    vec3 bt = normalize(bh - M);
    vec3 bu = bc * normalize(vec3(-1., -2., 1.5));
    vec3 bv = bu - 2. * dot(br, bu) * br;
    float K = max(.0, dot(bt, -bv));
    float bw = max(.0, dot(-br, bu)) * .60;
    float bx = 1.;
    float by = .0;
#if SHADOWS_ENABLED==1
float I = .001;
    if(b > .0) {
      float bz = G(M + br * I, -bu, I);
      bx = mix(bx, .0, b * bz);
      bw = mix(bw, .0, b * bz);
      if(bz > .0)
        by = .0;
      
    }
#endif
gl_FragColor = vec4((vec3(1.) * bw + vec3(1.) * bx + by * vec3(1.)) * vec3(.5), 1.);
  }
}
`

exports[`test/basic.js TAP basic safe words > output 1`] = `

#ifdef GL_ES

precision highp float;
#endif

const int a = 6;
#define VIEW_FULL_TRIANGLE 0

#define SHADOWS_ENABLED 1

const float b = .8;
#define REVERSE_TRI1 0

#define REVERSE_TRI0 0

#define REVERSE_TRI2 0

#define REVERSE_TRI3 0

#define REVERSE_TRI4 0

#define REVERSE_TRI5 0

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;
uniform sampler2D backbuffer;
float PI = 3.14159265;
float c = .0;
float d = .0;
const int e = 6;
vec3 f[e];
vec3 g[e];
float h[e];
mat3 i[e];
vec3 j[3];
float k(vec3);
float k(vec3 l) {
  vec3 m = vec3(g[0][0], 0, g[0][2]);
  l += m;
  float n = 1.;
  for(int o = 0; o < a; o++) {
    mat3 p = i[0];
    vec3 q = g[0];
    float r = h[0];
    vec3 s = l - f[0];
    float t = dot(s, s);
    for(int u = 1; u < e; u++) {
      vec3 v = l - f[u];
      float w = dot(v, v);
      if(w < t && (o > 0 || u < 4)) {
        t = w;
        p = i[u];
        q = g[u];
        r = h[u];
      }
    }
    l -= q;
    l = l * p;
    n *= r;
  }
  vec3 x = normalize(cross(j[2] - j[0], j[1] - j[0]));
  float y = dot(l - j[0], x);
  vec3 z = l - x * y;
  vec3 A[3];
  A[0] = j[1] - j[0];
  A[1] = j[2] - j[1];
  A[2] = j[0] - j[2];
  for(int u = 0; u < 3; u++) {
    vec3 B = z - j[u];
    vec3 C = cross(x, A[u]);
    float D = dot(B, C) / dot(C, C);
    if(D > .0) {
      z -= C * D;
      float E = dot(B, A[u]) / dot(A[u], A[u]);
      if(E < .0)
        z -= A[u] * E;
      else if(E > 1.)
        z -= A[u] * (E - 1.);
      
      break;
    }
  }
  return length(z - l) / n;
}
#if SHADOWS_ENABLED==1

float F(vec3 l, vec3 G, float H) {
  float I = 2. * H;
  float J = 1.;
  for(int K = 0; K < 30; K++) {
    vec3 L = l + I * G;
    float D = k(L);
    if(D < H)
      return 1.;
    J = min(J, 4. * (D / I));
    I += D;
  }
  return 1. - J;
}
#endif

void M() {
  d = 2.3 * (mouse.y - .5);
  float N = .6;
  if(d > N)
    d = N;
  else if(d < -N)
    d = -N;
  
  c = PI / 2.;
  for(int u = 0; u < 5; u++) {
    float O = cos(c);
    float P = sin(c);
    float Q = 1. / (4. * d * d + P * P);
    c = atan(sqrt((1. + 2. * O + O * O) * Q)) + atan(sqrt((1. - 2. * O + O * O) * Q));
  }
  float O = cos(c);
  float P = sin(c);
  vec3 R = vec3(1, 0, 0);
  vec3 S = vec3(O, 0, P);
  vec3 T = R + S;
  vec3 U = T * .5 + vec3(0, d, 0);
  g[0] = g[1] = g[2] = g[3] = U;
  g[4] = S;
  g[5] = R;
  f[0] = (R + U) / 3.;
  f[1] = (S + U) / 3.;
  f[2] = (R + U + T) / 3.;
  f[3] = (S + U + T) / 3.;
  float V = length(U);
  float W = length(vec3(1, 0, 0) - U);
  float r = 1. / V + 1. / W;
  h[0] = h[1] = h[2] = h[3] = r;
  h[4] = W * r;
  h[5] = V * r;
  j[0] = vec3(0);
  j[1] = R * (1. + W / V);
  j[2] = S * (1. + V / W);
  i[0][0] = normalize(R - U);
  i[0][1] = -normalize(cross(i[0][0], U));
  i[0][2] = -cross(i[0][0], i[0][1]);
  i[1][0] = normalize(S - U);
  i[1][1] = normalize(cross(i[1][0], U));
  i[1][2] = cross(i[1][0], i[1][1]);
  i[2][0] = i[0][0];
  i[2][1] = normalize(cross(i[2][0], U - T));
  i[2][2] = cross(i[2][0], i[2][1]);
  i[3][0] = i[1][0];
  i[3][1] = -normalize(cross(i[3][0], U - T));
  i[3][2] = -cross(i[3][0], i[3][1]);
  i[0] *= h[0];
  i[1] *= h[1];
  i[2] *= h[2];
  i[3] *= h[3];
  i[4] = mat3(h[4]);
  i[5] = mat3(h[5]);
#if REVERSE_TRI0==1
i[0][1] *= -1.;
#endif
#if REVERSE_TRI1==1
i[1][1] *= -1.;
#endif
#if REVERSE_TRI2==1
i[2][1] *= -1.;
#endif
#if REVERSE_TRI3==1
i[3][1] *= -1.;
#endif
#if REVERSE_TRI4==1
i[4][1] *= -1.;
#endif
#if REVERSE_TRI5==1
i[5][1] *= -1.;
#endif
vec3 C = cross(T - R, vec3(0, 1, 0));
  f[5] = f[2] + 2. * C * dot(C, R - f[2]) / dot(C, C);
  C = cross(T - S, vec3(0, 1, 0));
  f[4] = f[3] + 2. * C * dot(C, S - f[3]) / dot(C, C);
}
void main(void) {
  M();
  vec2 X = .5 * (-1. + 2. * gl_FragCoord.xy / resolution.xy);
  float Y = .2 * time;
  if(d < .0)
    Y += PI / 2.;
  float Z = sin(Y);
  float ba = cos(Y);
  mat3 bb = mat3(vec3(ba, 0, Z), vec3(0, 1, 0), vec3(-Z, 0, ba));
  vec3 bc = vec3(0, 1, 0);
  vec3 bd = vec3(0);
  float be = .0;
  float bf = .5 * PI / 2.01;
  vec3 bg = bb * vec3(cos(bf), sin(bf), .0) * 2.;
  vec3 bh = normalize(bd - bg);
  vec3 bi = normalize(cross(bc, bh));
  vec3 bj = cross(bh, bi);
  vec3 bk = (bg + bh);
  vec3 bl = bk + X.x * bi * resolution.x / resolution.y + X.y * bj;
  vec3 bm = normalize(bl - bg);
  const vec3 bn = vec3(.000001, 0, 0);
  const float bo = 3.;
  float J = .0;
  vec3 bp, L, bq;
  float br = .80;
  for(int u = 0; u < 46; u++) {
    br += J * .8;
    L = bg + bm * br;
    J = k(L);
    if(J < .00065 || br > bo)
      break;
    
  }
  if(br < bo) {
    bq = normalize(vec3(J - k(L - bn.xyy), J - k(L - bn.yxy), J - k(L - bn.yyx)));
    vec3 bs = normalize(bg - L);
    vec3 bt = bb * normalize(vec3(-1., -2., 1.5));
    vec3 bu = bt - 2. * dot(bq, bt) * bq;
    float J = max(.0, dot(bs, -bu));
    float bv = max(.0, dot(-bq, bt)) * .60;
    float bw = 1.;
    float bx = .0;
#if SHADOWS_ENABLED==1
float H = .001;
    if(b > .0) {
      float by = F(L + bq * H, -bt, H);
      bw = mix(bw, .0, b * by);
      bv = mix(bv, .0, b * by);
      if(by > .0)
        bx = .0;
      
    }
#endif
gl_FragColor = vec4((vec3(1.) * bv + vec3(1.) * bw + bx * vec3(1.)) * vec3(.5), 1.);
  }
}
`

exports[`test/basic.js TAP basic storage mutation > output 1`] = `

#ifdef GL_ES

precision highp float;
#endif

const int a = 6;
#define VIEW_FULL_TRIANGLE 0

#define SHADOWS_ENABLED 1

const float b = .8;
#define REVERSE_TRI1 0

#define REVERSE_TRI0 0

#define REVERSE_TRI2 0

#define REVERSE_TRI3 0

#define REVERSE_TRI4 0

#define REVERSE_TRI5 0

uniform vec2 c;
uniform float d;
uniform vec2 e;
uniform sampler2D f;
float g = 3.14159265;
float h = .0;
float i = .0;
const int j = 6;
vec3 k[j];
vec3 l[j];
float m[j];
mat3 n[j];
vec3 o[3];
float p(vec3);
float p(vec3 q) {
  vec3 r = vec3(l[0][0], 0, l[0][2]);
  q += r;
  float s = 1.;
  for(int t = 0; t < a; t++) {
    mat3 u = n[0];
    vec3 v = l[0];
    float w = m[0];
    vec3 x = q - k[0];
    float y = dot(x, x);
    for(int z = 1; z < j; z++) {
      vec3 A = q - k[z];
      float B = dot(A, A);
      if(B < y && (t > 0 || z < 4)) {
        y = B;
        u = n[z];
        v = l[z];
        w = m[z];
      }
    }
    q -= v;
    q = q * u;
    s *= w;
  }
  vec3 C = normalize(cross(o[2] - o[0], o[1] - o[0]));
  float D = dot(q - o[0], C);
  vec3 E = q - C * D;
  vec3 F[3];
  F[0] = o[1] - o[0];
  F[1] = o[2] - o[1];
  F[2] = o[0] - o[2];
  for(int z = 0; z < 3; z++) {
    vec3 G = E - o[z];
    vec3 H = cross(C, F[z]);
    float I = dot(G, H) / dot(H, H);
    if(I > .0) {
      E -= H * I;
      float J = dot(G, F[z]) / dot(F[z], F[z]);
      if(J < .0)
        E -= F[z] * J;
      else if(J > 1.)
        E -= F[z] * (J - 1.);
      
      break;
    }
  }
  return length(E - q) / s;
}
#if SHADOWS_ENABLED==1

float K(vec3 q, vec3 L, float M) {
  float N = 2. * M;
  float O = 1.;
  for(int P = 0; P < 30; P++) {
    vec3 Q = q + N * L;
    float I = p(Q);
    if(I < M)
      return 1.;
    O = min(O, 4. * (I / N));
    N += I;
  }
  return 1. - O;
}
#endif

void R() {
  i = 2.3 * (e.y - .5);
  float S = .6;
  if(i > S)
    i = S;
  else if(i < -S)
    i = -S;
  
  h = g / 2.;
  for(int z = 0; z < 5; z++) {
    float T = cos(h);
    float U = sin(h);
    float V = 1. / (4. * i * i + U * U);
    h = atan(sqrt((1. + 2. * T + T * T) * V)) + atan(sqrt((1. - 2. * T + T * T) * V));
  }
  float T = cos(h);
  float U = sin(h);
  vec3 W = vec3(1, 0, 0);
  vec3 X = vec3(T, 0, U);
  vec3 Y = W + X;
  vec3 Z = Y * .5 + vec3(0, i, 0);
  l[0] = l[1] = l[2] = l[3] = Z;
  l[4] = X;
  l[5] = W;
  k[0] = (W + Z) / 3.;
  k[1] = (X + Z) / 3.;
  k[2] = (W + Z + Y) / 3.;
  k[3] = (X + Z + Y) / 3.;
  float ba = length(Z);
  float bb = length(vec3(1, 0, 0) - Z);
  float w = 1. / ba + 1. / bb;
  m[0] = m[1] = m[2] = m[3] = w;
  m[4] = bb * w;
  m[5] = ba * w;
  o[0] = vec3(0);
  o[1] = W * (1. + bb / ba);
  o[2] = X * (1. + ba / bb);
  n[0][0] = normalize(W - Z);
  n[0][1] = -normalize(cross(n[0][0], Z));
  n[0][2] = -cross(n[0][0], n[0][1]);
  n[1][0] = normalize(X - Z);
  n[1][1] = normalize(cross(n[1][0], Z));
  n[1][2] = cross(n[1][0], n[1][1]);
  n[2][0] = n[0][0];
  n[2][1] = normalize(cross(n[2][0], Z - Y));
  n[2][2] = cross(n[2][0], n[2][1]);
  n[3][0] = n[1][0];
  n[3][1] = -normalize(cross(n[3][0], Z - Y));
  n[3][2] = -cross(n[3][0], n[3][1]);
  n[0] *= m[0];
  n[1] *= m[1];
  n[2] *= m[2];
  n[3] *= m[3];
  n[4] = mat3(m[4]);
  n[5] = mat3(m[5]);
#if REVERSE_TRI0==1
n[0][1] *= -1.;
#endif
#if REVERSE_TRI1==1
n[1][1] *= -1.;
#endif
#if REVERSE_TRI2==1
n[2][1] *= -1.;
#endif
#if REVERSE_TRI3==1
n[3][1] *= -1.;
#endif
#if REVERSE_TRI4==1
n[4][1] *= -1.;
#endif
#if REVERSE_TRI5==1
n[5][1] *= -1.;
#endif
vec3 H = cross(Y - W, vec3(0, 1, 0));
  k[5] = k[2] + 2. * H * dot(H, W - k[2]) / dot(H, H);
  H = cross(Y - X, vec3(0, 1, 0));
  k[4] = k[3] + 2. * H * dot(H, X - k[3]) / dot(H, H);
}
void main(void) {
  R();
  vec2 bc = .5 * (-1. + 2. * gl_FragCoord.xy / c.xy);
  float bd = .2 * d;
  if(i < .0)
    bd += g / 2.;
  float be = sin(bd);
  float bf = cos(bd);
  mat3 bg = mat3(vec3(bf, 0, be), vec3(0, 1, 0), vec3(-be, 0, bf));
  vec3 bh = vec3(0, 1, 0);
  vec3 bi = vec3(0);
  float bj = .0;
  float bk = .5 * g / 2.01;
  vec3 bl = bg * vec3(cos(bk), sin(bk), .0) * 2.;
  vec3 bm = normalize(bi - bl);
  vec3 bn = normalize(cross(bh, bm));
  vec3 bo = cross(bm, bn);
  vec3 bp = (bl + bm);
  vec3 bq = bp + bc.x * bn * c.x / c.y + bc.y * bo;
  vec3 br = normalize(bq - bl);
  const vec3 bs = vec3(.000001, 0, 0);
  const float bt = 3.;
  float O = .0;
  vec3 bu, Q, bv;
  float bw = .80;
  for(int z = 0; z < 46; z++) {
    bw += O * .8;
    Q = bl + br * bw;
    O = p(Q);
    if(O < .00065 || bw > bt)
      break;
    
  }
  if(bw < bt) {
    bv = normalize(vec3(O - p(Q - bs.xyy), O - p(Q - bs.yxy), O - p(Q - bs.yyx)));
    vec3 bx = normalize(bl - Q);
    vec3 by = bg * normalize(vec3(-1., -2., 1.5));
    vec3 bz = by - 2. * dot(bv, by) * bv;
    float O = max(.0, dot(bx, -bz));
    float bA = max(.0, dot(-bv, by)) * .60;
    float bB = 1.;
    float bC = .0;
#if SHADOWS_ENABLED==1
float M = .001;
    if(b > .0) {
      float bD = K(Q + bv * M, -by, M);
      bB = mix(bB, .0, b * bD);
      bA = mix(bA, .0, b * bD);
      if(bD > .0)
        bC = .0;
      
    }
#endif
gl_FragColor = vec4((vec3(1.) * bA + vec3(1.) * bB + bC * vec3(1.)) * vec3(.5), 1.);
  }
}
`

exports[`test/basic.js TAP decimals starting or ending with 0 > output 1`] = `

float a = .0;
float b = 0.;
float c = .0;
float d = 1.;
float e = 1.;
float f = .1;
float g = .01;
`

exports[`test/basic.js TAP grouping removal test > output 1`] = `

float a = 2e10 + .2e2 + 1.e3 * (0xFaBc09 + 3);
float b = 2e10 + (.2e2 - 1.e3 / (0xFaBc09 + 3));
bool c = 1. && true && true;
bool d = 0. || false || true;
`

exports[`test/basic.js TAP mat shorthand > output 1`] = `

mat2 mat2Long = mat2(1., 1., 1., 1.);
mat2 mat2Short = mat2(1.);
mat3 mat3Long = mat3(1., 1., 1., 1., 1., 1., 1., 1., 1.);
mat3 mat3Short = mat3(1.);
mat4 mat4Long = mat4(1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.);
mat4 mat4Short = mat4(1.);
mat2 a = mat2(1., .0, .0, .0);
float b = 1.;
float c = .0;
mat2 d = mat2(b, c, c, b);
vec3 e = vec3(1, 0, 0);
vec3 f = vec3(0, 1, 0);
vec3 g = vec3(0, 0, 1);
mat3 h = mat3(e, f, g);
mat3 i = mat3(mat3(1));
`

exports[`test/basic.js TAP vec shorthand > output 1`] = `

vec2 vec2Long = vec2(.0, 1.);
vec2 vec2Short = vec2(.0);
bvec2 bvec2Long = bvec2(.0, 1.);
bvec2 bvec2Short = bvec2(.0);
ivec2 ivec2Long = ivec2(.0, 1.);
ivec2 ivec2Short = ivec2(.0);
vec3 vec3Long = vec3(.0, 1., 1.);
vec3 vec3Short = vec3(.0);
bvec3 bvec3Long = bvec3(.0, 1., 1., 1.);
bvec3 bvec3Short = bvec3(.0);
ivec3 ivec3Long = ivec3(.0, 1., 1., 1.);
ivec3 ivec3Short = ivec3(.0);
vec4 vec4Long = vec4(.0, 1., 1., 1.);
vec4 vec4Short = vec4(.0);
bvec4 bvec4Long = bvec4(.0, 1., 1., 1.);
bvec4 bvec4Short = bvec4(.0);
ivec4 ivec4Long = ivec4(.0, 1., 1., 1.);
ivec4 ivec4Short = ivec4(.0);
ivec4 a = ivec4(vec2(.0, 1.), vec2(.0, 1.));
`
