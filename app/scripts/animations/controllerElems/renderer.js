import updateController from "./updateController.js";
import conf from "./conf.js";

export default class Renderer extends updateController {
  constructor() {
    super();
    this.fps = conf.maxFPS;
  }
  showFramePS() {
    if (conf.FPS_show && this.time && this.frame % 10 == 0) {
      let val = Math.round(1000 / (new Date().getTime() - this.time));
      if (val > 30) {
        console.log("fps", val);
      } else {
        console.error("fps", val);
      }
    }
    this.time = new Date().getTime();
    this.frame++;
  }
  recall(resolve) {
    requestAnimationFrame(() => {
      resolve();
    });
  }
}
