import $ from "jquery";
const opts = {
  stepScroll: 20,
  maxFPS: 60,
};
class Updater {
  constructor() {
    this.list = [];
  }
  add(listener) {
    this.list.push(listener);
  }
  remove(listener) {
    this.list.forEach((item, key) => {
      if (item === listener) {
        this.list.splice(key, 1);
      }
    });
  }
  update() {
    this.list.forEach((listener, key) => {
      listener();
    });
  }
}
export default class AnimateController {
  constructor() {
    this.warden = new Updater();
    this.renderer = new Updater();
    this.ready = true;
    this.frame = 0;
    this.init();
  }
  init() {
    window.isObservable = this.isObservable;
    window.addObservableCheck = this.addObservableCheck.bind(this);
    window.removeObservableCheck = this.removeObservableCheck.bind(this);
    this.observableCheck();

    window.addUpdate = this.addUpdate.bind(this);
    this.update();
    let FPSCheker = setInterval(() => {
      console.log(this.frame)
      this.frame = 0;
    }, 1000);
  }
  //Проверка на позицию блока в видимой области
  isObservable($item) {
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
  /* ---- */
  //Перепроверка видимости при событиях
  addObservableCheck(handler) {
    this.warden.add(handler);
  }
  removeObservableCheck(handler) {
    this.warden.remove(handler);
  }
  observableCheck() {
    let top = window.scrollbar.scrollTop;
    window.scrollbar.on((state) => {
      if (Math.abs(state.offset.y - top) >= opts.stepScroll) {
        top = state.offset.y;
        this.warden.update();
      }
    });
    window.addEventListener("resize", () => {
      this.warden.update();
    });
  }
  /* ---- */

  addUpdate(handler) {
    this.renderer.add(handler);
  }
  removeUpdate(handler) {
    this.renderer.remove(handler);
  }

  update() {
    let step = 0;
    let promise;
    if (this.ready) {
      promise = new Promise((resolve, reject) => {
        let checkForUpdate = () => {
          step++;
          step == 2 ? resolve() : 1;
        };
        this.ready = false;
        setTimeout(() => {
          checkForUpdate();
        }, 1000 / opts.maxFPS);
        requestAnimationFrame(() => {
          checkForUpdate();
        });
      });
      promise.then(() => {
        this.frame++;
        this.renderer.update();
        this.ready = true;
        this.update();
      });
    }
  }
}
