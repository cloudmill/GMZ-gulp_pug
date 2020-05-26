import $ from "jquery";
import Scrollbar from "smooth-scrollbar";
import conf from "../animations/controllerElems/conf.js";

export default class customScrollbar {
  constructor() {
    this.handlers = [];

    //скролл в блоках на странице
    Scrollbar.initAll();

    //Основной скрол на сайте
    this.startScroll();
    this.eventsStart();
  }
  eventsStart() {
    if (window.innerWidth >= conf.maxWidthForAnimate) {
      this.scrollbar.addListener((state) => {
        if (this.handlers.length > 0)
          this.handlers.forEach((handler) => {
            handler(state);
          });
      });
    } else {
      window.addEventListener('scroll', (e)=>{
        const state = {
          offset: {
            y: window.pageYOffset,
          },
        };
        if (this.handlers.length > 0)
          this.handlers.forEach((handler) => {
            handler(state);
          });
      });
    }
  }
  // добавление слушателя
  on(handler) {
    this.handlers.push(handler);
  }

  // удаление слушателя
  off(handler) {
    this.handlers.forEach((item, key) => {
      if (item === handler) {
        this.handlers.splice(key, 1);
      }
    });
  }
  startScroll() {
    if (!this.scrollbar && window.innerWidth >= conf.maxWidthForAnimate) {
      this.scrollbar = Scrollbar.init(document.body, {
        damping: 0.2,
        alwaysShowTracks: true,
        delegateTo: document.getElementById("scroll-content"),
      });
    }
    $("html").removeClass("overflow");
  }
  stopScroll() {
    $("html").addClass("overflow");
  }
  getSize() {
    return this.scrollbar.getSize();
  }
  getHeight() {
    return $(this.scrollbar.contentEl).height();
  }

  get scrollTop() {
    if (window.innerWidth >= conf.maxWidthForAnimate) {
      return this.scrollbar.scrollTop;
    } else {
      return window.pageYOffset;
    }
  }
}
