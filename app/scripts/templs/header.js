import $ from "jquery";

let header = {
  init: function() {
    this.element = $(".header");
    this.elementBurger = $(".header-static");
    this.butBurger = $("#change-nav");

    /* Функционал для действий hedaer при скролле*/
    this.scrollAnimation = new FixedScrollAnimate(this.element);

    /* Функционал для бургер меню */
    this.burgerAnimation = new Burger(this.elementBurger, this.butBurger);
    this.burgerAnimation.onClose = () => {
      this.scrollAnimation.stable();
    };
  }
};
class Burger {
  constructor(element, button) {
    this.element = element;
    this.button = button;

    this.init();
  }
  init() {
    this.button.click(() => {
      if (this.element.hasClass("active")) {
        this.hide();
      } else {
        this.show();
      }
    });
  }
  show() {
    this.element.addClass("active");
    this.element.parent().css("top", 50 + "px");
    this.element.parent().removeClass("sticky");
    this.element.parent().removeClass("hide");
    window.scrollbar.stopScroll();
  }
  hide() {
    this.element.removeClass("active");
    window.scrollbar.startScroll();
    if (this.onClose) this.onClose();
  }
}
class FixedScrollAnimate {
  constructor(element) {
    this.free = true;
    this.state = null;

    this.element = element;

    //минимальный сдвиг для действий
    this.scrollFree = 20;

    //растояние до верхнего края страницы в начальном положении
    this.offsetOnBeginPos = 50;
    if ($(window).width() <= 480) {
      this.offsetOnBeginPos = 20;
    }

    this.init();
  }
  init() {
    this.lastPos = window.scrollbar.scrollTop;
    this.update();
    window.scrollbar.on(() => {
      this.update();
    });
  }
  update() {
    this.pos = window.scrollbar.scrollTop;
    if (this.lastPos > this.pos) {
      this.moveDelta += Math.abs(this.lastPos - this.pos);
    } else {
      this.moveDelta = 0;
    }

    this.element.css("transform", "translateY(" + this.pos + "px)");

    this.currentState();

    this.lastPos = this.pos;
  }
  stable() {
    this.lastPos = this.pos + 1;
    this.moveDelta = this.scrollFree + 1;
    this.currentState();
  }
  currentState() {
    if (this.pos <= this.offsetOnBeginPos) {
      this.startPos();
    } else {
      if (this.moveDelta > this.scrollFree) {
        this.show();
      } else {
        this.hide();
      }
    }
  }
  hide() {
    this.element.removeClass("sticky");
    let top = -this.element.height() - this.offsetOnBeginPos;
    this.element.css("top", top + "px");
    this.element.addClass("hide");
    this.state = "hide";
  }
  show() {
    this.element.css("top", "0px");
    this.element.addClass("sticky");
    this.element.removeClass("hide");
    this.state = "show";
  }
  startPos() {
    this.element.removeClass("sticky");
    this.element.removeClass("hide");
    let top = -this.pos + this.offsetOnBeginPos;
    this.element.css("top", top + "px");
    this.state = "start";
  }
}

export default header;
