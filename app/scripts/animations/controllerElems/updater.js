export default class Updater {
  constructor() {
    this.list = [];
  }
  add(listener) {
    this.list.push(listener);
  }
  remove(listener) {
    this.list.forEach((item, key) => {
      if (item === listener) {
        this.list.splice(key, 1);
      }
    });
  }
  update() {
    this.list.forEach((listener, key) => {
      listener();
    });
  }
}