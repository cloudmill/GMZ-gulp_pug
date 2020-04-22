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
    window.scrollbar.on(() => {
      if (this.isObservable) requestAnimationFrame(()=>{
        this.update(window.scrollbar.scrollTop);
      })
    });
    window.addUpdateState(() => {
      this.updateState();
    });
  }
  update(scroll) {
    this.angle = scroll / $(window).height() + this.k;
    this.el.css("transform-origin", "center center");
    this.el.css("transform", "rotate(" + this.angle + "rad");
  }
}
