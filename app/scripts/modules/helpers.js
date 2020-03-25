import $ from "jquery";

export default helpers = {
  init: () => {
    this.resizeImg();
    this.events();
  },
  events: () => {
    $(window).on("resize", () => {
      this.resizeImg();
    });
  },
  /* Ресайз изображений */
  resizeImg: () => {
    let imgs = $(".fullImg");
    if (imgs.length > 0) {
      for (let img of imgs) {
        let $img = $(img);
        let $parent = $(img).parent();
        let nWidth = img.naturalWidth;
        let nHeight = img.naturalHeight;
        let k = nWidth / nHeight;
        if ($img.height() * k < $parent.width()) {
          $img.addClass("auto-height");
        }
        if ($img.width() / k < $parent.height()) {
          $img.removeClass("auto-height");
        }
      }
    }
  }
};