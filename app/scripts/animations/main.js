import $ from "jquery";
import Wave from "./wave.js";

let animations = {
  init: function() {
    
    /* Анимация волны между секциями */
    var waves = [];
    $(".waveSection").each((key, item) => {
      waves.push(new Wave(item));
    });
  }
};

export default animations;
