const elements = [];
const elementsBlock = [];

function findAndAddCaption() {
    const items = document.querySelectorAll('.visual-animation-base');
    items.forEach((item) => {
        item.innerHTML = item.innerHTML.split('<br>').map((line) => {
            return line.split(' ').map((word) => {
                return '<span class="visual-animation-word">'+word.split('').map((char)=>{
                    return '<span>' + (
                        char.trim() === ""
                            ? "&nbsp;"
                            : char
                    ) + '</span>'
                }).join('')+'</span>';

            }).join(' ');
        }).join('<br>');
        elements.push(item);
    });
}

function findAndAddBlock() {
    const items = document.querySelectorAll('.visual-animation-base-block');
    items.forEach((item) => {
        elementsBlock.push(item);
    });
}

function onWheel(callback) {
    return (e) => {
        e = e || window.event;

        const delta = e.deltaY || e.detail || e.wheelDelta;
        callback(delta);
        // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    };
}

function applyEventListeners(elem, callback) {
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            elem.addEventListener("wheel", onWheel(callback));
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", onWheel(callback));
        } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel(callback));
        }
    } else { // IE8-
        elem.attachEvent("onmousewheel", onWheel(callback));
    }
}

function onScreen(elements) {
    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    let delayNumber = 0;

    elements.forEach((item) => {
        if (!item.classList.contains('visual-animation-showing')) {
            const topPosition = item.getClientRects()[0].top;
            if (topPosition-0.2*height < height && topPosition > 0) {
                setTimeout(() => {
                    item.classList.add('visual-animation-showing');
                }, delayNumber * 1000);
                // delayNumber++;
                //item.classList.add('visual-animation-showing');
            } else {
                // item.classList.remove('visual-animation-showing');
            }
        }
    });
    delayNumber = 1;
    elementsBlock.forEach((item) => {
        if (!item.classList.contains('visual-animation-showing-block')) {
            const topPosition = item.getClientRects()[0].top;
            if (topPosition-0.2*height < height && topPosition > 0) {
                setTimeout(() => {
                    item.classList.add('visual-animation-showing-block');
                }, delayNumber * 500);
                // delayNumber++;
                //item.classList.add('visual-animation-showing-block');
            } else {
                // item.classList.remove('visual-animation-showing');
            }
        }
    });
}

function changeClassOnShow() {
    onScreen(elements);
}

function init() {
    findAndAddCaption();
    findAndAddBlock();
    applyEventListeners(document.body, changeClassOnShow);
    changeClassOnShow();
}

export default init;