generateButton.addEventListener("click", timer)


function timer() {
    var sec = 75;
    var timer = setInterval(function() {
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
