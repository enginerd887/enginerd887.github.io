var locate = window.location.search.toString();
var time = locate.substring(locate.indexOf("=") + 1);
if(time) document.getElementById('time').innerHTML=time;
console.log(time);

var nameForm = document.getElementById("nameForm");
var recordingTitle = document.getElementById("recordingTitle");
recordingTitle.style.display = "none";

nameForm.onsubmit = function() {
	recordingTitle.innerHTML = document.getElementById("name").value;

	recordingTitle.style.display = "block";
	nameForm.style.display = "none";
	return false;
}