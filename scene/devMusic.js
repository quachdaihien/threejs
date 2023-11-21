import * as THREE from "three";
export const devMusic = () => {
  const listener = new THREE.AudioListener();
  const sound = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load("/sounds/mix.mp3", function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
  });
  console.log(listener)
  return listener
};
