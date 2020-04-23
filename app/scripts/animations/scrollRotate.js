import $ from "jquery";

export default class ScrollRotate {
  constructor(selector) {
    this.el = $(selector);
    this.k = (Math.random() - 0.5) * 0.1;
    this.angle = 0;
    this.isObservable = window.isObservable(this.el);
    this.init();
  }
  init() {
    this.events();
  }
  updateState() {
    this.isObservable = window.isObservable(this.el);
  }
  events() {
    window.addObservableCheck(() => {
      this.updateState();
    });
    window.addUpdate(() => {
      this.update();
    }, "scroll");
  }
  update() {
    if (this.isObservable) {
      this.angle = window.scrollbar.scrollTop / $(window).height() + this.k;
      this.el.css("transform-origin", "center center");
      this.el.css("transform", "rotate(" + this.angle + "rad");
    }
  }
}
