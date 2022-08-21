
//variable to store time
var remainingTime = 75;

//variable to track whether timer is runnong or not
var isStopped = true;

//Action Start
const startButton = document.getElementById("start-quiz");

const countContainer = document.getElementById("timerDisplay");

//start timer
const startTimer = () => {
    if (isStopped) {
        isStopped = false;
        countContainer.innerHTML = remainingTime;
        timer = setInterval(renderTime, 1000);
    }
}
//stop timer
const stopTimer = () => {
    isStopped = true;
    if (timer) {
        clearInterval(timer);
    }
};

startButton.onclick = startTimer;

//function to display time
const renderTime = () => {
    remainingTime -= 1;
//render timer on screen
countContainer.innerHTML = remainingTime;
//timeout on zero
if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
}
};





