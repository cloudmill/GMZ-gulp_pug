import $ from "jquery";

export default class AbsoluteFixation {
  constructor(wrapper) {
    this.wrapper = $(wrapper);
    this.wrapper.width(window.width);
    this.wrapper.height(window.height);

    this.maxBottomBlock = $($(wrapper).attr("data-max-bottom"));
    this.maxBottomBlock =
      this.maxBottomBlock.length > 0 ? this.maxBottomBlock : null;
    this.init();
  }
  init() {
    this.topConst = this.wrapper.parent().offset().top + window.scrollbar.scrollTop - 120;//хз но 120 корректирует все
    window.scrollbar.on(() => {
      if (this.inited) this.update();
    });
    window.addEventListener("resize", () => {
      this.resize();
    });
    this.inited = true;
    this.update();
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
    this.stop = this.bottomStop();
    if (this.wrapper.hasClass("fixed-window")) {
      this.render();
    } else {
      clear();
    }
  }
  bottomStop() {
    if (this.maxBottomBlock) {
      const top = this.maxBottomBlock.outerHeight() + this.maxBottomBlock.offset().top - window.innerHeight;
      if(top<0){
        return top
      }
    }
    return 0;
  }
  render() {
    this.wrapper.css("margin-top", this.stop + "px");
    this.wrapper.css("transform", "translateY(" + this.pos + "px)");
    this.wrapper.css("top", -this.topConst + "px");
  }
  clear() {
    this.wrapper.attr("style", "");
  }
}
