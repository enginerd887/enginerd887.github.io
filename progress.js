// Work with the pie chart first
var canvas = document.getElementById('FillerChart'), context= canvas.getContext('2d');
var width = canvas.width = 500;
var height = canvas.height = 570;
// Define pie chart background
context.fillStyle = '#FAFAD2';
context.fillRect(0,0,width,height);

var data = [72,72,72,72,72];
var labels = ["Um","So","Yeah","Like","Blargh"];
var colors = ["#B276B2","#DECF3F","#5DA5DA","#FAA43A","#60BD68"];

//Draw a border around the canvas
context.lineWidth = 10;
drawLine(context,0,0,0,height);
drawLine(context,0,0,width,0);
drawLine(context,width,0,width,height);
drawLine(context,0,height,width,height);

context.lineWidth = 1;
context.font = "30px Arial";
context.textAlign = "center";
context.strokeText("Most Common Fillers",250,50);
// Draw the five slices of the pie chart. Values here could be dynamic
var r = 100;
var centerHeight = 180;
drawSlice(context,250,centerHeight,r,0,1*Math.PI/5,colors[0]);
drawSlice(context,250,centerHeight,r,1*Math.PI/5,4*Math.PI/5,colors[1]);
drawSlice(context,250,centerHeight,r,4*Math.PI/5,11*Math.PI/10,colors[2]);
drawSlice(context,250,centerHeight,r,11*Math.PI/10,8*Math.PI/5,colors[3]);
drawSlice(context,250,centerHeight,r,8*Math.PI/5,0,colors[4]);
// Add the labels to the chart sections
context.font = "18px Arial";
context.strokeText("Um",310,150);
context.strokeText("So",320,210);
context.strokeText("Like",250,250);
context.strokeText("Yeah",180,200);
context.strokeText("Blargh",210,130);

// Line graph header
context.font = "30px Arial";
context.strokeText("Fillers over Time",250,330);

// Draw axes
context.lineWidth = 2;
drawLine(context,120,350,120,530);
drawLine(context,120,530,420,530);

context.lineWidth = 1;
context.strokeStyle = "red";

var xVals = [120,150,160,220,240,280,320,340,380,420];
var yVals = [350,390,370,370,430,450,490,470,510,510];
//Draw the line graph in red
for (var kk = 0;kk<10;kk++){
	drawLine(context,xVals[kk],yVals[kk],xVals[kk+1],yVals[kk+1]);
	drawArc(context,xVals[kk],yVals[kk],2,0,2*Math.PI);
}
// Add axes labels
context.strokeStyle = "black";
context.font = "20px Arial";
context.strokeText("Date",250,550);
context.strokeText("# Fillers",50,440);
// Give axis numbers for number of  fillers
context.font = "12px Arial";
context.strokeText("0",109,535);
context.strokeText("1",109,515);
context.strokeText("2",109,495);
context.strokeText("3",109,475);
context.strokeText("4",109,455);
context.strokeText("5",109,435);
context.strokeText("6",109,415);
context.strokeText("7",109,395);
context.strokeText("8",109,375);
context.strokeText("9",109,355);



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
