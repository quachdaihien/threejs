import * as THREE from "three";
class DevLoad extends THREE.TextureLoader {
  constructor() {
    super();
    // Các cài đặt tùy chọn có thể được thêm ở đây nếu cần thiết
  }

  // Phương thức tùy chỉnh có thể được thêm vào đây
  loadCustomTexture(url, onLoad, onProgress, onError) {
    this.setCrossOrigin("");
    const texture = this.load(url, onLoad, onProgress, onError);
    // Thực hiện bất kỳ điều gì khác bạn muốn với texture ở đây
    return texture;
  }
}
export default DevLoad;
