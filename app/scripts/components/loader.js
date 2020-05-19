function easyIn(power){return function(t){return Math.pow(t, power)}};
const calc = easyIn(2);
const loader = document.querySelector('.loader');

const container = document.querySelector('.loader .img-front-container');
const front = document.querySelector('.loader .img-front');
const maxHeight = 150;
let nowHeight = 0;

const baseOptions = {
    beforeStart: () => {
    },
    beforeEnd: () => {
    },
    onEnd: () => {
    }
};

function startLoading(options) {
    const _options = { ...baseOptions, ...options };

    _options.beforeStart();
    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    loader.style.height = height + 'px';
    const interval = setInterval(() => {
        if (nowHeight >= maxHeight) {
            _options.beforeEnd();
            clearInterval(interval);
            loader.classList.add('closed');
            setTimeout(() => {
                loader.style.display = 'none';
                if (_options.onEnd) {
                    _options.onEnd();
                }
            }, 200);
        }
        front.style.top = (
            nowHeight - maxHeight
        ) + 'px';
        container.style.top = (
            maxHeight - nowHeight
        ) + 'px';
        container.style.height = nowHeight + 'px';

        nowHeight+=calc(2);
    }, 1);
}

export default startLoading;