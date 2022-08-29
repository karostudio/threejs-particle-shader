import * as THREE from 'three';

import Camera from './Camera';
import Renderer from './Renderer';
import Scene from './Scene';

class World {
    constructor() {
        this.setScene();
        this.setCamera();
        this.setRenderer();

        this.update();
    }
    AddToScene(obj) {
        this.scene.AddToScene(obj);
    }
    setScene() {
        this.scene = new Scene();
    }
    setCamera() {
        this.camera = new Camera(this);
    }
    setRenderer() {
        this.renderer = new Renderer(this, this.scene.instance, this.camera.instance);
        this.camera.setOrbitControls();
    }
    getRendererDomElement() {
        return this.renderer.instance.domElement;
    }
    update() {
        this.renderer.update();

        if (this.dna)
            this.dna.update();

        requestAnimationFrame(this.update.bind(this));
    }
}

export default World;