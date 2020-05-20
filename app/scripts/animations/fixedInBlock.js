import $ from "jquery";

export default class Fixed {
  constructor(base) {
    this.base = $(base);
    this.target = this.base.find(".fixed-item > *");
    this.heightCorrect = parseInt(this.base.attr("data-full-height"));
    this.h = this.base.outerHeight();

    this.top = 250; //Я хз, почему-то сломался отступ от верха, не уверен что это оно
    this.targetH =
      this.target.outerHeight() + parseInt(this.target.css("margin-bottom"));

    this.init();
  }
  init() {
    this.topConst = this.target.offset().top + window.scrollbar.scrollTop;

    window.scrollbar.on(() => {
      if (this.inited) this.update();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 950) {
        this.inited = false;
        this.clear();
      } else {
        this.inited = true;
        this.update();
      }
    });
    this.inited = true;
    if (window.innerWidth <= 950) {
      this.inited = false;
      this.clear();
    } else {
      this.inited = true;
      this.update();
    }
  }
  update() {
    let header = $(".header");
    if(this.heightCorrect == 1){
      this.target.height(window.innerHeight - 90 - (header.hasClass("sticky") ? header.outerHeight() : 0))
    }
    this.h = this.base.outerHeight();
    this.targetH =
      this.target.outerHeight() + parseInt(this.target.css("margin-bottom"));

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
    this.target.css("transition", "margin-top 0.4s ease-in-out, height 0.4s ease-in-out");
  }
  stopBottom() {
    let pos = this.limitBottom - this.scrollTop;
    this.target.css("top", pos + "px");
  }
  clear() {
    this.target.attr('style','');
    // this.target.css("top", "");
    // this.target.css("margin-top", "");
    // this.target.css("transform", "");
    // this.target.css("transition", "");
    // this.target.css("height", "");
  }
}
