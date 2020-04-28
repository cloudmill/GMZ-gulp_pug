import $ from "jquery";

export default class MouseParalax {
  constructor(selector) {
    this.el = $(selector);
    this.maxOffset = 20 + (Math.random() - 0.5) * 20;
    this.offsetX = 0;
    this.offsetY = 0;
    this.isObservable = false;
    this.x = 0;
    this.y = 0;
    this.init();
  }
  init() {
    window.warden.add(this.el, this.updateState.bind(this));
    window.renderer.add(this.render.bind(this), "mousemove");
    window.scene.add(this.update.bind(this), "mousemove");
    this.events();
  }
  updateState(newState) {
    this.isObservable = newState;
  }
  events() {
    $(document).on("mousemove", (e) => {
      this.x = e.pageX;
      this.y = e.pageY;
    });
  }
  update() {
    if (this.isObservable) {
      let wd2 = $(window).width() / 2;
      let hd2 = $(window).width() / 2;
      this.offsetX = (-(this.x - wd2) / wd2) * this.maxOffset;
      this.offsetY = (-(this.y - hd2) / hd2) * this.maxOffset;
    }
  }
  render() {
    if (this.isObservable) {
      this.el.css(
        "transform",
        "translate(" + this.offsetX + "px," + this.offsetY + "px)"
      );
    }
  }
}
