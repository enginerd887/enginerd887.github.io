var locate = window.location.search.toString();
var time = locate.substring(locate.indexOf("=") + 1);
if(time) document.getElementById('time').innerHTML=time;
console.log(time);
