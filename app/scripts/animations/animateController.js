import $ from "jquery";
const opts = {
  stepScroll: 20,
}
export default class AnimateController{
  constructor(){
    this.forUpdating = [];
    
    window.isObservable = this.isObservable;
    window.addUpdateState = this.addUpdateState.bind(this);
    this.updateState();
  }
  //Проверка на позицию блока в видимой области
  isObservable($item) {
    if ($item.offset().top + $item.height() < 0) {
      return false;
    }
    if ($item.offset().top > $(window).height()) {
      return false;
    }
    if ($item.offset().left + $item.width() < 0) {
      return false;
    }
    if ($item.offset().left > $(window).width()) {
      return false;
    }
    return true;
  }

  addUpdateState (handler){
    this.forUpdating.push(handler);
  }
  removeUpdateState(handler){
    this.forUpdating.forEach((item, key) => {
      if (item === handler) {
        this.forUpdating.splice(key, 1);
      }
    });
  }
  updateState(){
    let currentState = window.scrollbar.scrollTop;
    window.scrollbar.on((state) => {
      if(Math.abs(state.offset.y - currentState) >= opts.stepScroll){
        currentState = state.offset.y;
        this.forUpdating.forEach((item, key) => {
          item();
        });
      }
    })
    window.addEventListener('resize',()=>{
      this.forUpdating.forEach((item, key) => {
        item();
      });
    })
  }
}