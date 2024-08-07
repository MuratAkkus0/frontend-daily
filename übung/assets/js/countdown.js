const countdown_container = document.querySelector(".countdown_container");
const remain_second = document.querySelector(".remain_second");
let progressDeg = 0;
const countVal = 30;
const incrementDeg = 360 / countVal;
let countInterval;
remain_second.textContent = countVal;

function startCountdown() {
    console.log("startCountdown")
    countInterval = setInterval(() => {
        if (remain_second.textContent > 0) {
            progressDeg += incrementDeg;
            countdown_container.style.background = `conic-gradient(red ${progressDeg}deg, #ddd ${progressDeg}deg)`
            remain_second.textContent = countVal - Math.floor(progressDeg / 360 * countVal);
        }
    }, (1000));
}
function resetCountdown() {
    console.log("resetCountdown")
    clearInterval(countInterval);
    progressDeg = 0;
    remain_second.textContent = countVal;
    countdown_container.style.background = `conic-gradient(red ${progressDeg}deg, #ddd ${progressDeg}deg)`
}

export { startCountdown , countInterval , resetCountdown};