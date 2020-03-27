import $ from "jquery";
import Wave from "./wave.js";


let animations = {
  init: function() {
    this.waveAnimation();
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
  }
};

export default animations;
