import $ from "jquery";
import Scrollbar from "smooth-scrollbar";

export default class customScrollbar {
  constructor() {
    this.handlers = [];

    //скролл в блоках на странице
    Scrollbar.initAll();

    //Основной скрол на сайте
    this.startScroll();
  }

  // добавление слушателя
  on(handler) {
    this.handlers.push(handler);
    this.scrollbar.addListener(handler);
  }

  // удаление слушателя
  off(handler) {
    this.handlers.forEach((item, key) => {
      if (item === handler) {
        this.handlers.splice(key, 1);
      }
    });
    this.scrollbar.removeListener(handler);
  }

  // обновление слушателей при переинициализации
  updateHandlers() {
    this.handlers.forEach((handler, key) => {
      this.scrollbar.addListener(handler);
    });
  }

  // остановка основного скролла
  // stopScroll() {
  //   this.scrollbar.destroy();
  //   this.scrollbar = Scrollbar.init(document.body, {
  //     alwaysShowTracks: false,
  //     delegateTo: document.getElementById("scroll-box-events")
  //   });
  // }

  // возобновление основного скролла
  // startScroll() {
  //   this.scrollbar
  //     ? this.scrollbar.destroy
  //       ? this.scrollbar.destroy()
  //       : 1
  //     : 1;
  //   this.scrollbar = Scrollbar.init(document.body, {
  //     damping: 0.2,
  //     alwaysShowTracks: true
  //   });
  //   this.updateHandlers();
  // }
  stopScroll() {}
  startScroll() {
    if (!this.scrollbar) {
      this.scrollbar = Scrollbar.init(document.body, {
        damping: 0.2,
        alwaysShowTracks: true,
        delegateTo: document.getElementById("scroll-content"),
      });
      this.updateHandlers();
    } else {
    }
  }

  getSize() {
    return this.scrollbar.getSize();
  }
  getHeight() {
    return $(this.scrollbar.contentEl).height();
  }

  get scrollTop() {
    return this.scrollbar.scrollTop;
  }
}
