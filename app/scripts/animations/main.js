import $ from "jquery";
import Wave from "./wave.js";
import Fixed from "./fixed.js";

let animations = {
  init: function() {
    this.waveAnimation();
    this.fixedInBlock();
  },

  waveAnimation: function() {
    /* Анимация волны между секциями */
    var waves = [];
    $(".waveSection").each((key, item) => {
      //2 волны
      waves.push(new Wave(item));
    });
    $(".waveSection-top").each((key, item) => {
      //Волна только вверху
      waves.push(new Wave(item, "top"));
    });
    $(".waveSection-bottom").each((key, item) => {
      //Волна только снизу
      waves.push(new Wave(item, "bottom"));
    });
    $(".waveSection-bottom-clip").each((key, item) => {
      //Волна снизу закрывающая фон
      waves.push(new Wave(item, "bottom-clip"));
    });
  },
  fixedInBlock: function() {
    var fixeds = [];
    $(".fixed-base").each((key, item) => {
      fixeds.push(new Fixed(item));
    });
  }
};

export default animations;
