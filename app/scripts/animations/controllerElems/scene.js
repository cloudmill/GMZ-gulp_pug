import $ from "jquery";
import updateController from "./updateController.js";
import conf from "./conf.js";

export default class Scene extends updateController {
  constructor() {
    super();
    this.tps = conf.maxTPS;
  }
  showFramePS() {
    if (conf.TPS_show && this.time && this.frame % 10 == 0) {
      let val = Math.round(1000 / (new Date().getTime() - this.time));
      if (val > 30) {
        console.log("tps", val);
      } else {
        console.error("tps", val);
      }
    }
    this.time = new Date().getTime();
    this.frame++;
  }
  recall(resolve) {
    let step = 0;
    let checkForUpdate = () => {
      step++;
      step == 2 ? resolve() : 1;
    };
    setTimeout(() => {
      checkForUpdate();
    }, 1000 / this.tps);
    requestAnimationFrame(() => {
      checkForUpdate();
    });
  }
}
