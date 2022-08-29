import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import { chromaticAberration } from './shaders/abbr';

export default class Renderer {
    constructor(config, scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.instance = new THREE.WebGLRenderer(config || {
            antialias: true
        });
        this.instance.setClearColor(0x070009);
        this.instance.setSize(window.innerWidth, window.innerHeight);
        this.addToDOM();
        this.setRenderPass();
    }

    addToDOM() {
        document.body.append(this.instance.domElement);
    }
    setRenderPass() {
        this.renderPass = new RenderPass(this.scene, this.camera);
        this.bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 2.5, .87, .01);
        this.abbrShader = new ShaderPass(chromaticAberration);

        this.composer = new EffectComposer(this.instance);
        this.composer.addPass(this.renderPass);
        this.composer.addPass(this.bloomPass);
        this.composer.addPass(this.abbrShader);
    }
    update() {
        // this.instance.render(this.scene, this.camera);
        this.composer.render();
    }
}