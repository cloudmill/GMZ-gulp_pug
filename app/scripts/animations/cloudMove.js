import $ from "jquery";

const timerSpeed = 50;
class CloudMove {
  constructor(container) {
    this.elements = [];
    if (container && container.children) {
      const items = container.children;

      for (let i = 0; i < items.length; i++) {
        const element = items[i];

        if (element.getClientRects && element.getClientRects()[0]) {
          const position = element.getClientRects()[0];
          element.style.left = parseInt(position.left, 10) + "px";
          this.elements.push({
            element,
            left: position.left,
          });
        }
      }
      if (this.elements.length) {
        this.animate();
      }
    }
  }

  animate() {
    this.interval = setInterval(() => {
      if (window.innerWidth >= 600) {
        const width = parseInt(
          window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          10
        );
        this.elements.forEach(({ element, left }, index) => {
          let visible = true;
          const rect = element.getBoundingClientRect();
          if (rect.bottom < 0) {
            visible = false;
          }
          if (rect.top > window.innerHeight) {
            visible = false;
          }
          if (rect.right < 0) {
            visible = false;
          }
          if (rect.left > window.innerWidth) {
            visible = false;
          }
          if (visible) {
            const position = element.getClientRects()[0];
            if (left >= width) {
              this.elements[index].left = -parseInt(position.width, 10);
            }
            element.style.left = left + 1 + "px";
            this.elements[index].left++;
          }
        });
      }else{
        clearInterval(this.interval)
      }
    }, timerSpeed);
  }
}

export default CloudMove;
