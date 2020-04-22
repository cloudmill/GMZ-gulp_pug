import $ from "jquery";

export default class AbsoluteFixation {
  constructor(wrapper) {
    this.wrapper = $(wrapper);
    this.wrapper.width(window.width);
    this.wrapper.height(window.height);
    this.init();
  }
  init() {
    window.scrollbar.on(() => {
      if (this.inited) this.update();
    });
    window.addEventListener("resize", () => {
      this.resize();
    });
    this.inited = true;
  }
  resize(newW, newH) {
    this.w = newW || window.width;
    this.h = newH || window.height;
    this.wrapper.width(this.w);
    this.wrapper.width(this.h);
    this.update();
  }
  update() {
    this.pos = window.scrollbar.scrollTop;
    let maxScroll = window.scrollbar.getSize().content.height
    if (this.pos > maxScroll) this.pos = maxScroll;
    console.log(maxScroll)
    if (this.wrapper.hasClass("fixed-window")) {
      this.render();
    } else {
      clear();
    }
  }
  render() {
    this.wrapper.css("top", this.pos + "px");
  }
  clear() {
    this.wrapper.attr("style", "");
  }
}
