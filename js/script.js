"use strict";
var ctx, canvas;
var r = 1000, end, bool;

function init() {
    canvas = document.getElementById('myCanvas');
    ctx = myCanvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-80;
    if (canvas.width > canvas.height)
	r = canvas.height/2-100;
    else
	r = canvas.width/2-100;
    ctx.lineWidth=2;
}

function randpt() {
    var arr = [];
    var r2 = r-1;
    var angle = Math.random()*Math.PI*2;
    arr[0] = Math.cos(angle)*r2;
    arr[1] = Math.sin(angle)*r2;
    return arr;
}

function drawLine(x, y) {
    //r = Math.random()*255;
    //ctx.lineWidth=Math.random()*20;
    r = Math.random()*(canvas.height/2-100);
    var pt1 = randpt(), pt2 = randpt();
    ctx.beginPath();
    ctx.moveTo(x+pt1[0], y+pt1[1]);
    ctx.lineTo(x+pt2[0], y+pt2[1]);
    ctx.stroke();
}

function circl(x, y) {
    //r = Math.random()*255;
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.stroke();
}

function begin() {
    var s = 10;
    var y = r+s;
    for (var i=r+s; i<canvas.width; i+=2*r+s) {
	circl(i, y);
	drawLine(i, y);
    }
}

function change() {
    ctx.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
}

function draw() {
    end = setInterval(function() { drawLine(canvas.width/2, canvas.height/2);}, 2);
}


//setInterval(function() { circl(canvas.width/2, canvas.height/2); }, 250);
//circl(canvas.width/2, canvas.height/2);

init();
bool = 0;
ctx.strokeStyle = 'black';
circl(canvas.width/2, canvas.height/2);
draw();

/*
setInterval(function() {

	//ctx.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);

	
	if (bool == 0) {
	    ctx.strokeStyle = 'white';
	    bool = 1;
	}
	else {
	    ctx.strokeStyle = 'black';
	    bool = 0;
	    }
	

}, 20000);
*/