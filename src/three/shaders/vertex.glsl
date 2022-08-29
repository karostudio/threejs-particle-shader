uniform float time;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

attribute float randoms;
attribute float colorRandoms;

varying vec2 vUv;
varying vec3 vPosition;
varying float vColorRandom;

uniform sampler2D texture1;
float PI = 3.141592653589793238;

void main(){
    vUv = uv;
    vColorRandom = colorRandoms;
    vec4 mvPosition = modelViewMatrix * vec4(position,1);
    gl_PointSize = (70.0* randoms + 30.) * (1. / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}