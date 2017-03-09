var canvas = document.getElementById('FillerChart'), context= canvas.getContext('2d');
var width = canvas.width = 500;
var height = canvas.height = 400;

context.fillStyle = '#ACF4E0';
context.fillRect(0,0,width,height);

var data = [72,72,72,72,72];
var labels = ["Um","So","Yeah","Like","Blargh"];
var colors = ["#B276B2","#DECF3F","#5DA5DA","#FAA43A","#60BD68"];

context.font = "30px Arial";
context.textAlign = "center";
context.strokeText("Most Common Fillers",250,50);

var r = 120;
drawSlice(context,250,200,r,0,1*Math.PI/5,colors[0]);
drawSlice(context,250,200,r,1*Math.PI/5,4*Math.PI/5,colors[1]);
drawSlice(context,250,200,r,4*Math.PI/5,11*Math.PI/10,colors[2]);
drawSlice(context,250,200,r,11*Math.PI/10,8*Math.PI/5,colors[3]);
drawSlice(context,250,200,r,8*Math.PI/5,0,colors[4]);

context.font = "20px Arial"
context.strokeText("Um",310,170);
context.strokeText("So",320,230);
context.strokeText("Like",250,270);
context.strokeText("Yeah",180,220);
context.strokeText("Blargh",210,150);

function drawArc(context,cX,cY,r,sA,eA){
	context.beginPath();
	context.arc(cX,cY,r,sA,eA);
	context.stroke();
}

function drawLine(context,sX,sY,eX,eY){
	context.beginPath();
	context.moveTo(sX,sY);
	context.lineTo(eX,eY);
	context.stroke();
}

function drawSlice(context,cX,cY,r,sA,eA,color){
	context.fillStyle = color;
	context.beginPath();
	context.moveTo(cX,cY);
	context.arc(cX,cY,r,sA,eA);
	context.closePath();
	context.fill();
}
