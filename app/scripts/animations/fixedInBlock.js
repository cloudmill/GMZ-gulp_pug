import $ from "jquery";

export default class Fixed {
  constructor(base) {
    this.base = $(base);
    this.target = this.base.find(".fixed-item > *");
    this.h = this.base.outerHeight();

    this.top = 250; //Я хз, почему-то сломался отступ от верха, не уверен что это оно
    this.targetH = this.target.outerHeight() + parseInt(this.target.css('margin-bottom'));

    this.init();
  }
  init() {
    this.topConst = this.target.offset().top + window.scrollbar.scrollTop;
    
    window.scrollbar.on(() => {
      if (this.inited) this.update();
    });

    window.addEventListener("resize", () => {
      if ($(window).width() <= 950) {
        this.inited = false;
        this.clear();
      } else {
        this.inited = true;
        this.update();
      }
    });
    this.inited = true;
  }
  update() {
    this.h = this.base.outerHeight();
    this.targetH = this.target.outerHeight() + parseInt(this.target.css('margin-bottom'));

    let header = $(".header");

    this.scrollTop = window.scrollbar.scrollTop;
    this.addOffset = header.hasClass("sticky") ? header.outerHeight() : 0;
    this.offsetTop = this.target.offset().top - this.top - this.addOffset;

    this.checkPos();
  }
  checkPos() {
    let targetS = this.targetH + this.top;
    let baseS = this.base.offset().top + this.h;

    this.limitBottom = baseS + this.scrollTop - targetS;
    this.limitTop = this.scrollTop + this.top + this.addOffset;

    if (this.scrollTop > this.limitBottom && this.topConst <= this.limitTop) {
      this.stopBottom();
    }

    if (this.topConst <= this.limitTop) {
      this.render();
    } else {
      this.clear();
    }
  }
  render() {
    let pos = this.scrollTop - this.topConst + this.top;
    this.target.css("transform", "translateY(" + pos + "px)");
    this.target.css("margin-top", this.addOffset + "px");
    this.target.css("transition", "margin-top 0.3s ease");
  }
  stopBottom() {
    let pos = this.limitBottom - this.scrollTop;
    this.target.css("top", pos + "px");
    
  }
  clear() {
    this.target.css("top", "0");
    this.target.css("margin-top", "0");
    this.target.css("transform", "none");
    this.target.css("transition", "none");
  }
}
