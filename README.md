# Karo Studio Creative Agency

Karo Studio is a digital agency with solid design and development expertise.We build mobile and web applications. Visit us at [karo.studio](https://karo.studio) or  [drop us a line](mailto:dev@karo.studio)

[![Instagram](https://img.shields.io/badge/Instagram-@KaroStudio-red.svg?style=flat)](https://www.instagram.com/karo.studio/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/karostudio/neonbutton/blob/master/LICENSE)
[![Kotlin](https://img.shields.io/badge/Kotlin-1.3.72-f9890b)](https://kotlinlang.org/)
[![Bintray](https://img.shields.io/bintray/v/mamady83/NeonButton/studio.karo.neonbutton)](https://dl.bintray.com/mamady83/NeonButton/)

## ThreeJS Particle Shader

<img src="https://raw.githubusercontent.com/karostudio/threejs-particle-shader/master/preview.gif" width="531" height="300">


## Usage

In ```src/DNA.js``` file replace ```path``` with your own 3d model url. After that uncomment the ```console.log``` in the ```setLoaders``` function and load the project in the browser. Open your console and see the expand the logged 3d object. In ```children``` property try to find the mesh ( you may have to go recursively to find it ). After you've found it change this line ```this.geometry = gltf.scene.children[2].geometry;``` to your 3d model mesh location in the hierarchy, Like this: ```this.geometry = gltf.scene.children[2].children[0].children[1].geometry;```.


## Installation

After cloning this repository, run the following commands:
```npm install```
```npm run dev```


Now browse to ```http://localhost:3000``` and you should see the K 3D model rotating.

## Author

[Arta](https://github.com/callmearta)

## License

NeonButton is available under the MIT license. See the LICENSE file for more info.