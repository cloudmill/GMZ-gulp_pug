import $ from "jquery";

export default class ScrollRotate {
  constructor(selector) {
    this.el = $(selector);
    this.k = (Math.random() - 0.5) * 0.1;
    this.angle = 0;
    this.isObservable = false;
    this.init();
  }
  init() {
    window.warden.add(this.el, this.updateState.bind(this));
    window.renderer.add(this.render.bind(this), "scroll");
    window.scene.add(this.update.bind(this), "scroll");
  }
  updateState(newState) {
    this.isObservable = newState;
  }
  update() {
    if (this.isObservable) {
      this.angle = window.scrollbar.scrollTop / $(window).height() + this.k;
    }
  }
  render() {
    if (this.isObservable || true) {
      this.el.css("transform-origin", "center center");
      this.el.css("transform", "rotate(" + this.angle + "rad");
    }
  }
}
