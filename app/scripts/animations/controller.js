import Scene from "./controllerElems/scene.js";
import Renderer from "./controllerElems/renderer.js";
import Warden from "./controllerElems/warden.js";

export default class Controller {
  constructor() {
    this.scene = new Scene();
    this.renderer = new Renderer();
    this.warden = new Warden();
    this.ready = true;
    this.frame = 0;
    this.init();
  }
  init() {
    window.scene = this.scene;
    window.renderer = this.renderer;
    window.warden = this.warden;

    this.warden.init()
    this.scene.init()
    this.renderer.init()
  }
}
