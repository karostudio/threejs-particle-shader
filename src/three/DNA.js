import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'


import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

export default class DNA {
    constructor() {}
    async setLoaders() {
        return new Promise((resolve, reject) => {
            try {
                this.dracoLoader = new DRACOLoader();
                this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
                this.gltfLoader = new GLTFLoader();
                this.gltfLoader.setDRACOLoader(this.dracoLoader);
                this.gltfLoader.load('https://karo.studio/assets/karo.glb?v=1', gltf => {
                    // console.log(gltf);
                    this.setMaterial();
                    this.gltf = gltf;

                    this.geometry = gltf.scene.children[2].geometry;
                    this.geometry.center();
                    this.setModel();
                    this.setNumbers();
                    resolve(this.model);
                });

            } catch (e) {
                console.error(e);
            }
        });
    }
    setModel() {
        this.model = new THREE.Points(this.geometry, this.material);

        // this.model.position.x = 1;
    }
    setNumbers() {
        this.number = this.geometry.attributes.position.array.length;
        let randoms = new Float32Array(this.number);
        let colorRandoms = new Float32Array(this.number);

        for (var i = 0; i < this.number; i++) {
            randoms.set([Math.random()], i);
            colorRandoms.set([Math.random()], i);
        }

        this.geometry.setAttribute('randoms', new THREE.BufferAttribute(randoms, 1));
        this.geometry.setAttribute('colorRandoms', new THREE.BufferAttribute(colorRandoms, 1));
    }
    setMaterial() {
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: {
                uColor1: { value: new THREE.Color(0x612574) },
                uColor2: { value: new THREE.Color(0x293583) },
                uColor3: { value: new THREE.Color(0x1954ec) },
            },
        });
    }
    update() {
        if (this.model)
            this.model.rotation.y += .0005;
    }
}