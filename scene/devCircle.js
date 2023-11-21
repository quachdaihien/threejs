export const devCircle = () => {
  const sphere = new THREE.SphereGeometry(7, 32, 16);
  const materialCir = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  return new THREE.Line(sphere, materialCir);
};
