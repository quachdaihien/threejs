import * as THREE from "three";
import DevLoad from "./scene/devLoad";
import { devCircle } from "./scene/devCircle";
import { devMusic } from "./scene/devMusic";
let camera, scene, renderer, sound, listener;
init();
function init() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );
  camera.position.set(0, 0, 50);
  camera.lookAt(0, 0, 0);
  scene = new THREE.Scene();
  // background
  const customTextureLoader = new DevLoad();
  customTextureLoader.loadCustomTexture("./image/bg.jpg", (texture) => {
    texture.wrapS = THREE.MirroredRepeatWrapping;
    texture.wrapT = THREE.MirroredRepeatWrapping;
    scene.background = texture;
    // music
    listener = new THREE.AudioListener();
    sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load("/sounds/mix.mp3", function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
      console.log("load");
    });
    camera.add(listener);
    renderer.render(scene, camera);
  });
}
function loadAudio() {
  console.log("sound", sound);
  if (sound.context.state === "suspended") {
    console.log("sound");
    sound.context.resume();
  }
  // Check if the audio is not already playing
  if (!sound.isPlaying) {
    console.log("playing");
    sound.play();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    loadAudio();
  }, 10000);
});
document.addEventListener("click", function () {
  loadAudio();
  // camera.add(listener);
  // renderer.render(scene, camera);
});
// const listener = new THREE.AudioListener();
// camera.add(listener);
// const sound = new THREE.Audio(listener);
// const audioLoader = new THREE.AudioLoader();
// audioLoader.load("/sounds/mix.mp3", function (buffer) {
//   sound.setBuffer(buffer);
//   sound.setLoop(true);
//   sound.setVolume(0.5);
//   sound.play();
// });
// const loader = new THREE.TextureLoader();
// loader.setCrossOrigin("");
// const bgTexture = loader.load("./image/bg.jpg");
// bgTexture.wrapS = THREE.MirroredRepeatWrapping;
// bgTexture.wrapT = THREE.MirroredRepeatWrapping;

// const sphere = new THREE.SphereGeometry(7, 32, 16);
// const materialCir = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// const circle = new THREE.Line(sphere, materialCir);

// const scene = new THREE.Scene();
// const martial = new THREE.LineBasicMaterial({ color: 0x0000fff });
// const points = [];
// points.push(new THREE.Vector3(-10, 10, 0));
// points.push(new THREE.Vector3(10, 10, 0));
// points.push(new THREE.Vector3(10, -10, 0));
// points.push(new THREE.Vector3(-10, -10, 0));
// points.push(new THREE.Vector3(-10, 10, 0));
// const geometry = new THREE.BufferGeometry().setFromPoints(points);
// const line = new THREE.Line(geometry, martial);
// scene.background = bgTexture;
// scene.add(circle);
// setTimeout(() => {
//   rerender.render(scene, camera);
// }, 300);
