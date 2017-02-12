var timerStarted = false;
var RecordButton = document.getElementById("record");
var StopButton = document.getElementById("stop");
var FinishButton = document.getElementById("finish");
stopButton.style.diplay = 'none';
finishButton.style.diplay = 'none';


var startTimer = function() {

}

var stopTimer = function() {

}

RecordButton.onclick = function() {
  stopButton.style.display = 'initial';
  recordButton.style.display = 'none';
  finishButton.style.display = 'none';

  startTimer();
}

StopButton.onclick = function() {
  stopButton.style.display = 'none';
  recordButton.style.display = 'initial';
  finishButton.style.display = 'initial';
  stopTimer();
}

FinishButton.onclick = function() {

}

var t; var time; var stopped = false;

     function Timer()
     {
     //this.startTime = new Date().getTime();
      stoper = new Date().getTime() - this.startTime;
      ms = stoper % 1000;
      if (ms < 10) ms = '00'+ms;
      else if (ms < 100) ms = '0'+ms;
      x = parseInt(stoper / 1000);
      s = x % 60;
      x = parseInt(x/60);
      m = x % 60;
      if (m<10) m='0'+ m;
      if (s<10) s='0'+ s;
      document.getElementById('txt').innerHTML=m+':'+s+':'+ms; 
      this.t=setTimeout(function(){Timer()},500);
     }

    function myStopFunction(){
    clearTimeout(t); 
    stopped = true;
    }
    
    function init(){}
    function start(){
    this.startTime = new Date().getTime();
    Timer();
    }