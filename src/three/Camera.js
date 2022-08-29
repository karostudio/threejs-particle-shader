import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class Camera {
    constructor(world) {
        this.world = world;
        this.instance = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.01, 150);
        this.instance.position.z = 10;
    }

    setOrbitControls() {
        this.orbit = new OrbitControls(this.instance, this.world.getRendererDomElement());
    }

    getCamera() {
        return this.instance;
    }
}

export default Camera;