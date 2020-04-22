import $ from "jquery";

export default class MouseParalax {
  constructor(selector) {
    this.el = $(selector);
    this.maxOffset = 20 + (Math.random() - 0.5) * 20;
    this.offsetX = 0;
    this.offsetY = 0;
    this.isObservable;
    this.x = 0;
    this.y = 0;
    this.init();
  }
  init() {
    this.isObservable = window.isObservable(this.el);
    this.events();
  }
  updateState() {
    this.isObservable = window.isObservable(this.el);
  }
  events() {
    $(document).on("mousemove", (e) => {
      if (this.isObservable){
        this.x = e.pageX
        this.y = e.pageY
      }
    });
    window.addObservableCheck(() => {
      this.updateState();
    });
    window.addUpdate(() => {
      this.update();
    }, "mousemove");
  }
  update() {
    let wd2 = $(window).width() / 2;
    let hd2 = $(window).width() / 2;
    this.offsetX = (-(this.x - wd2) / wd2) * this.maxOffset;
    this.offsetY = (-(this.y - hd2) / hd2) * this.maxOffset;
    this.el.css(
      "transform",
      "translate(" + this.offsetX + "px," + this.offsetY + "px)"
    );
  }
}
