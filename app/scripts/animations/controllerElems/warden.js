import $ from "jquery";
import Updater from "./updater.js";
import conf from "./conf.js";

export default class Warden {
  constructor() {
    this.stepScroll = conf.stepScroll;
    this.updater = new Updater();
    this.elems = [];
  }
  add(el, func) {
    this.updater.add(() => {
      func(this.visible(el));
    });
    func(this.visible(el));
  }
  remove(el, func) {
    this.updater.remove(() => {
      func(this.visible(el));
    });
  }
  init() {
    this.top = window.scrollbar.scrollTop;
    window.scrollbar.on((state) => {
      if (Math.abs(state.offset.y - this.top) >= this.stepScroll) {
        this.top = state.offset.y;
        this.updater.update();
      }
      
    });
    window.addEventListener("resize", () => {
      this.updater.update();
    });
  }
  visible($item) {
    if ($item.offset().top + $item.height() < 0) {
      return false;
    }
    if ($item.offset().top > $(window).height()) {
      return false;
    }
    if ($item.offset().left + $item.width() < 0) {
      return false;
    }
    if ($item.offset().left > $(window).width()) {
      return false;
    }
    return true;
  }
}
