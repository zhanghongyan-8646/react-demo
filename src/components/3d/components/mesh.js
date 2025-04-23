import * as THREE from "three";

const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterial = new THREE.MeshNormalMaterial();

export const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

