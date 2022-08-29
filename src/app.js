import * as THREE from 'three';
import DNA from './three/DNA';
import { MathUtils } from 'three';

import World from './three/World';

async function App() {
    const world = new World();
    const dna = new DNA();
    world.dna = dna;
    const model = await dna.setLoaders();

    world.AddToScene(model);
    window.addEventListener('resize', () => {
        world.renderer.instance.setSize(window.innerWidth, window.innerHeight);
    })
}

export default App;