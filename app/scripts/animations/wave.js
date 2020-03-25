import $ from "jquery";

let wave = {
  init: function(){
    if ($(".waveSection").length > 0) {
      this.sections = $(".waveSection");
      this.createWaves();
    }
  },
  createWaves: function(){

  }
};

export default wave;
