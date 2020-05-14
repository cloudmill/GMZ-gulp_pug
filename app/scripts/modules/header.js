import $ from "jquery";
import ShapeOverlays from "../components/HamburgerOverlay";

import { initSpecial } from "../animations/visualAnimation.js";

const circlePerMS = 2000;

let header = {
  init: function () {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    this.overlayElement = document.querySelector(".shape-overlays");
    this.overlayElement.style.height = height + "px";
    this.element = $(".header");
    this.elementBurger = $(".header-static");
    this.butBurger = $("#change-nav");

    /* Функционал для действий hedaer при скролле*/
    this.scrollAnimation = new FixedScrollAnimate(this.element);

    /* Функционал для бургер меню */
    this.burgerAnimation = new Burger(
      this.elementBurger,
      this.butBurger,
      this.overlayElement
    );
    window.burger = this.burgerAnimation;
    this.burgerAnimation.onClose = () => {
      this.scrollAnimation.stable();
    };
  },
};

class Burger {
  constructor(element, button, overlayElement) {
    this.element = element;
    this.button = button;
    this.rotateElementLink = "i.svg-icon.svg-navigation";
    this.overlayElement = overlayElement;
    this.overlay = new ShapeOverlays(
      this.overlayElement /* () => {
            this.overlayElement.classList.add('hide');
            setTimeout(() => {
                this.overlayElement.style.display = 'none';
            }, 500);
        } */
    );

    this.init();
  }
  get isShow() {
    return this.element.hasClass("active");
  }
  rotater() {
    if (this.rotateElementLink) {
      this.angleNow = 0;
      const anglePerMS = 360 / circlePerMS;
      this.rotateInterval = setInterval(() => {
        this.angleNow += anglePerMS;
        if (this.angleNow >= 360) {
          this.angleNow -= 360;
        }
        const element = document.querySelector(this.rotateElementLink);
        if (element) {
          element.style.transform = "rotate(" + this.angleNow + "deg)";
        }
      }, 1);
    }
  }

  init() {
    this.rotater();
    this.button.click(() => {
      if (this.element.hasClass("active")) {
        this.hide();
      } else {
        this.show();
      }
    });
  }

  toggleOverlay() {
    // this.overlayElement.style.display = 'block';
    this.overlayElement.style.top = window.scrollbar.scrollTop + "px";
    this.overlayElement.classList.remove("hide");
    if (this.overlay.isAnimating) {
      return false;
    }
    this.overlay.toggle();

    if (this.overlay.isOpened === true) {
      this.button[0].classList.add("is-opened-navi");
    } else {
      this.button[0].classList.remove("is-opened-navi");
    }
    setTimeout(() => {
      if (this.overlay.isOpened) {
        document
          .querySelector(".header-static")
          .classList.add("visual-animation-base-block-s");
        this._show();
        const b = initSpecial();
        setTimeout(() => {
          b.show();
        }, 700);
      }
    }, 200);
    setTimeout(() => {
      if (!this.overlay.isOpened) {
        this.overlayElement.classList.add("hide");
      }
    }, 1600);
  }

  show() {
    this.toggleOverlay();
  }

  _show() {
    window.scrollbar.stopScroll();
    this.element.addClass("active");
    this.element.parent().css("top", 50 + "px");
    this.element.parent().removeClass("sticky");
    this.element.parent().removeClass("hide");
  }

  hide() {
    if (this.overlay.isAnimating) {
      return;
    }
    this.toggleOverlay();

    window.scrollbar.startScroll();

    this.element.removeClass("active");
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
    this.offsetOnBeginPos =
      50 + ($("#bx-panel").length > 0 ? $("#admin-panel").height() : 0);
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
      } else if (this.pos > this.offsetOnBeginPos + this.element.height()) {
        this.hide();
      } else {
        this.startPos();
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
