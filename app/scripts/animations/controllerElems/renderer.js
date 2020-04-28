import $ from "jquery";
import Updater from "./updater.js";
import conf from "./conf.js";

export default class Renderer {
  constructor() {
    this.fps = conf.maxFPS;

    this.mouseMoveUpdater = new Updater();
    this.scrollUpdater = new Updater();
    this.updater = new Updater();

    this.mousemove = true;
    this.scroll = true;
    this.frame = 0;
  }
  add(func, type) {
    if (type == "mousemove") {
      this.mouseMoveUpdater.add(func);
    } else if (type == "scroll") {
      this.scrollUpdater.add(func);
    } else {
      this.updater.add(func);
    }
  }
  remove(func, type) {
    if (type == "mousemove") {
      this.mouseMoveUpdater.remove(func);
    } else if (type == "scroll") {
      this.scrollUpdater.remove(func);
    } else {
      this.updater.remove(func);
    }
  }
  init() {
    this.events();
    this.update();
  }
  events() {
    $(document).on("mousemove", (e) => {
      this.mousemove = true;
    });
    window.scrollbar.on((state) => {
      this.scroll = true;
    });
  }
  update() {
    if (conf.FPS_show && this.time && this.frame % 10 == 0) {
      let val = Math.round(1000 / (new Date().getTime() - this.time));
      if (val > 30) {
        console.log("fps", val);
      } else {
        console.error("fps", val);
      }
    }
    this.time = new Date().getTime();
    this.frame ++;
    let step = 0;
    new Promise((resolve, reject) => {
      let checkForUpdate = () => {
        step++;
        step == 2 ? resolve() : 1;
      };
      // setTimeout(() => {
      //   checkForUpdate();
        
      // }, 1000 / this.fps);
      requestAnimationFrame(() => {
        resolve()
        //checkForUpdate();
      });
    }).then(() => {
      if (this.mousemove) {
        this.mouseMoveUpdater.update();
        this.mousemove = false;
      }
      if (this.scroll) {
        this.scrollUpdater.update();
        this.scroll = false;
      }
      this.updater.update();
      this.update();
    });
  }
}
