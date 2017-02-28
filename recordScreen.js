var recordButton = document.getElementById("record");
var pauseButton = document.getElementById("pause");
var finishButton = document.getElementById("finish");
var restartButton = document.getElementById("restart");
pauseButton.disabled = true;
finishButton.disabled = true;
restartButton.disabled = true;

var startTimer = function() {
    this.startTime = new Date().getTime();
    Timer();
}

var stopTimer = function() {
    clearTimeout(t);
    this.pauseTime = new Date().getTime();
    stopped = true;
    stoper = stoper2;
}

recordButton.onclick = function() {
    pauseButton.disabled = false;
    recordButton.disabled = true;
    finishButton.disabled = true;
    restartButton.disabled = true;
    startTimer();
}

pauseButton.onclick = function() {
    pauseButton.disabled = true;
    recordButton.disabled = false;
    finishButton.disabled = false;
    restartButton.disabled = false;
    stopTimer();
}

restartButton.onclick = function() {
    stopped = false;
    document.getElementById('time').innerHTML='00:00:00';
}

finishButton.onclick = function() {
    location.href='InterviewResults.html?key='+h+ ':' +m+':'+s;
}

var t; var time; var stopped = false; var stoper;

function Timer()
{
    if (!stopped) {
    stoper = new Date().getTime() - this.startTime;
    ms= stoper % 1000;
    x = parseInt(stoper / 1000);}
    else{
    stoper2 = new Date().getTime() - this.startTime + stoper;
    ms= stoper2 % 1000;
    x = parseInt(stoper2 / 1000);}
    s = x % 60;
    x = parseInt(x/60);
    m = x % 60;
    x = parseInt(x/60);
    h = x % 60;
    if (h<10) h='0'+h;
    if (m<10) m='0'+ m;
    if (s<10) s='0'+ s;
    document.getElementById('time').innerHTML=h + ':' +m+':'+s; 
    this.t=setTimeout(function(){Timer()},500);
}
