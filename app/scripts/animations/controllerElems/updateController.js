import $ from "jquery";
import Updater from "./updater.js";
import conf from "./conf.js";

export default class updateController {
  constructor() {
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
    this.setup();
  }
  events() {
    $(document).on("mousemove", (e) => {
      this.mousemove = true;
    });
    window.scrollbar.on((state) => {
      this.scroll = true;
    });
    $(window).resize(() => {
      if (window.innerWidth >= conf.maxWidthForAnimate){} //this.update();
    });
  }
  showFramePS() {
    //Указать в child
  }
  recall(resolve) {
    //Указать в child
  }
  setup() {
    this.update();
  }
  update() {
    
    this.showFramePS();
    new Promise((resolve, reject) => {
      this.recall(resolve);
    }).then(() => {
      if (window.innerWidth >= conf.maxWidthForAnimate) {
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
      }
    });
  }
}
