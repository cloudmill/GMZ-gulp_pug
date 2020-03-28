import $ from "jquery";
import Scrollbar from "smooth-scrollbar";

let scrollbar = {
  init: function() {
    //скролл в блоках на странице
    Scrollbar.initAll();

    //скролл на сайте
    window.scrollHandlers = [];
    window.scrollHandlerAdd = handler => {
      window.scrollHandlers.push(handler);
      window.scrollbar.addListener(handler);
    };

    window.scrollbarInit = disableScroll => {
      // переинициализация скроллбара, для остановки скролла
      if (window.scrollbar)
        if (window.scrollbar.destroy) window.scrollbar.destroy();

      if (disableScroll) {
        window.scrollbar = Scrollbar.init(document.body, {
          damping: 0.2,
          alwaysShowTracks: true,
          delegateTo: document.getElementById("scroll-box-events")
        });
      } else {
        window.scrollbar = Scrollbar.init(document.body, {
          damping: 0.2,
          alwaysShowTracks: true
        });

        //повторное обновление событий
        if (window.scrollHandlers.length > 0) {
          for (let key in window.scrollHandlers) {
            window.scrollHandlerAdd(window.scrollHandlers[key]);
          }
        }
      }
    };

    window.scrollbarInit();
  }
};
export default scrollbar;
