import $ from "jquery";
import Wave from "./wave.js";

let animations = {
  init: function() {
    var waves = [];
    $(".waveSection").each((key, item) => {
      waves.push(new Wave(item));
    });
  }
};

export default animations;
