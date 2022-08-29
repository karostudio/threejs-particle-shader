import * as THREE from 'three';

export default class Scene {
    constructor() {
        this.instance = new THREE.Scene();
    }
    AddToScene(obj) {
        this.instance.add(obj);
    }
}