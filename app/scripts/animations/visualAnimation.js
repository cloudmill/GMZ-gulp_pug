const CaptionDelayMS = 30;

class VisualAnimation {
  constructor(additionalToClass) {
    this.additionalToClass = additionalToClass || "";
    this.elements = [];
    this.elementsBlock = [];
  }

  findAndAddBlock() {
    const items = document.querySelectorAll(
      ".visual-animation-base-block" + this.additionalToClass
    );
    items.forEach((item) => {
      this.elementsBlock.push(item);
    });
  }

  findAndAddCaption() {
    const items = document.querySelectorAll(
      ".visual-animation-base" + this.additionalToClass
    );
    items.forEach((item) => {
      item.innerHTML = item.innerHTML
        .split("<br>")
        .map((line) => {
          return line
            .split(" ")
            .map((word) => {
              return (
                '<span class="visual-animation-word' +
                this.additionalToClass +
                '">' +
                word
                  .split("")
                  .map((char) => {
                    return (
                      "<span>" +
                      (char.trim() === "" ? "&nbsp;" : char) +
                      "</span>"
                    );
                  })
                  .join("") +
                "</span>"
              );
            })
            .join(" ");
        })
        .join("<br>");
      this.elements.push(item);
    });
  }

  onWheel(callback) {
    return (e) => {
      e = e || window.event;

      const delta = e.deltaY || e.detail || e.wheelDelta;
      callback(delta);
      // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    };
  }

  applyEventListeners(elem, callback) {
    if (elem.addEventListener) {
      if ("onwheel" in document) {
        // IE9+, FF17+, Ch31+
        elem.addEventListener("wheel", this.onWheel(callback));
      } else if ("onmousewheel" in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", this.onWheel(callback));
      } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", this.onWheel(callback));
      }
    } else {
      // IE8-
      elem.attachEvent("onmousewheel", this.onWheel(callback));
    }
  }

  detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  showAll() {
    this.elements.forEach((item) => {
      if (
        !item.classList.contains(
          "visual-animation-base" + this.additionalToClass
        )
      ) {
        item.classList.add("visual-animation-base" + this.additionalToClass);
      }
      if (
        !item.classList.contains(
          "visual-animation-showing" + this.additionalToClass
        )
      ) {
        item.classList.add("visual-animation-showing" + this.additionalToClass);
        const characters = item.querySelectorAll(
          ".visual-animation-word" + this.additionalToClass + " > span"
        );
        characters.forEach((char, index) => {
          ((char, index) => {
            setTimeout(() => {
              if (char.classList) {
                char.classList.add("animate");
              }
            }, index * CaptionDelayMS);
          })(char, index);
        });
      }
    });
    this.elementsBlock.forEach((item) => {
      if (
        !item.classList.contains(
          "visual-animation-base-block" + this.additionalToClass
        )
      ) {
        item.classList.add(
          "visual-animation-base-block" + this.additionalToClass
        );
      }
      item.classList.add(
        "visual-animation-base-block" + this.additionalToClass
      );
      if (
        !item.classList.contains(
          "visual-animation-showing-block" + this.additionalToClass
        )
      ) {
        item.classList.add(
          "visual-animation-showing-block" + this.additionalToClass
        );
      }
    });
  }

  onScreen(elements) {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    let delayNumber = 0;

    this.elements.forEach((item) => {
      if (
        !item.classList.contains(
          "visual-animation-showing" + this.additionalToClass
        )
      ) {
        const rect = item.getClientRects();
        const topPosition = rect && rect[0] ? rect[0].top : 0;

        if (topPosition - 0.2 * height < height && topPosition > 0) {
          setTimeout(() => {
            item.classList.add(
              "visual-animation-showing" + this.additionalToClass
            );
            const characters = item.querySelectorAll(
              ".visual-animation-word" + this.additionalToClass + " > span"
            );
            characters.forEach((char, index) => {
              ((char, index) => {
                setTimeout(() => {
                  if (char.classList) {
                    char.classList.add("animate");
                  }
                }, index * CaptionDelayMS);
              })(char, index);
            });
          }, delayNumber * 1000);
          // delayNumber++;
          //item.classList.add('visual-animation-showing');
        } else {
          // item.classList.remove('visual-animation-showing');
        }
      }
    });
    delayNumber = 1;
    this.elementsBlock.forEach((item) => {
      if (
        !item.classList.contains(
          "visual-animation-showing-block" + this.additionalToClass
        )
      ) {
        const rect = item.getClientRects();
        const topPosition = rect && rect[0] ? rect[0].top : 0;

        if (topPosition - 0.2 * height < height && topPosition > 0) {
          setTimeout(() => {
            item.classList.add(
              "visual-animation-showing-block" + this.additionalToClass
            );
          }, delayNumber * 500);
          // delayNumber++;
          //item.classList.add('visual-animation-showing-block');
        } else {
          // item.classList.remove('visual-animation-showing');
        }
      }
    });
  }

  changeClassOnShow() {
    if (this.elements.length > 0) this.onScreen(this.elements);
  }

  removeClasses() {
    const baseElements = document.querySelectorAll(
      ".visual-animation-base" + this.additionalToClass
    );
    baseElements.forEach((item) => {
      item.classList.remove("visual-animation-base" + this.additionalToClass);
      item.classList.remove(
        "visual-animation-showing" + this.additionalToClass
      );
    });
    const baseElementsShowing = document.querySelectorAll(
      ".visual-animation-showing" + this.additionalToClass
    );
    baseElementsShowing.forEach((item) => {
      item.classList.remove(
        "visual-animation-showing" + this.additionalToClass
      );
      const characters = item.querySelectorAll(
        ".visual-animation-word" + this.additionalToClass + " > span"
      );
      characters.forEach((char, index) => {
        if (char.classList) {
          char.classList.remove("animate");
        }
      });
    });
    const blockElements = document.querySelectorAll(
      ".visual-animation-base-block" + this.additionalToClass
    );
    blockElements.forEach((item) => {
      item.classList.remove(
        "visual-animation-base-block" + this.additionalToClass
      );
      item.classList.remove(
        "visual-animation-showing-block" + this.additionalToClass
      );
    });
    const blockElementsShowing = document.querySelectorAll(
      ".visual-animation-showing-block" + this.additionalToClass
    );
    blockElementsShowing.forEach((item) => {
      item.classList.remove(
        "visual-animation-showing-block" + this.additionalToClass
      );
    });
  }
}

function init() {
  const block = new VisualAnimation();
  block.findAndAddCaption();
  block.findAndAddBlock();
  block.applyEventListeners(document.body, block.changeClassOnShow.bind(block));
  block.changeClassOnShow();

  if (block.detectMob()) {
    block.showAll();
  }
}

function initSpecial() {
  const block = new VisualAnimation("-s");
  block.findAndAddCaption();
  block.findAndAddBlock();
  block.changeClassOnShow();

  return {
    show: () => {
      block.showAll();
      setTimeout(() => {
        block.removeClasses();
      }, 2000);
    },
  };
}

function initMain() {
  const block = new VisualAnimation("-m");
  block.findAndAddCaption();
  block.findAndAddBlock();
  block.changeClassOnShow();

  return {
    show: () => {
      block.showAll();
      setTimeout(() => {
        block.removeClasses();
      }, 2000);
    },
  };
}

export default init;

export { initSpecial, initMain };
