import * as THREE from "three";
const rerender = new THREE.WebGLRenderer();
rerender.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rerender.domElement);
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 50);
camera.lookAt(0, 0, 0);
const listener = new THREE.AudioListener();
camera.add(listener);
const sound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();
audioLoader.load("/sounds/mix.mp3", function (buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.5);
  sound.play();
});
const loader = new THREE.TextureLoader();
loader.setCrossOrigin("");
const bgTexture = loader.load("./image/bg.jpg");
bgTexture.wrapS = THREE.MirroredRepeatWrapping;
bgTexture.wrapT = THREE.MirroredRepeatWrapping;

const sphere = new THREE.SphereGeometry(7, 32, 16);
const materialCir = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const circle = new THREE.Line(sphere, materialCir);

const scene = new THREE.Scene();
const martial = new THREE.LineBasicMaterial({ color: 0x0000fff });
const points = [];
points.push(new THREE.Vector3(-10, 10, 0));
points.push(new THREE.Vector3(10, 10, 0));
points.push(new THREE.Vector3(10, -10, 0));
points.push(new THREE.Vector3(-10, -10, 0));
points.push(new THREE.Vector3(-10, 10, 0));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, martial);
scene.background = bgTexture;
scene.add(circle);
setTimeout(() => {
  rerender.render(scene, camera);
}, 300);
