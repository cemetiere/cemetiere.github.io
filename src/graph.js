const canvas =document.getElementById('graph');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

const scaleX = 25;
const scaleY = 25;

ctx.beginPath();
ctx.strokeStyle = '#f5f0e8';

for (let i = 0; i<= canvasWidth; i = i + scaleX){
    ctx.moveTo(i,0);
    ctx.lineTo(i,canvasHeight);

}
ctx.stroke();
for (let i = 0; i<= canvasHeight; i = i + scaleY){
    ctx.moveTo(0,i);
    ctx.lineTo(canvasWidth,i);

}
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = '#000000';
const xCenter = Math.round(canvasWidth/scaleX/2)*scaleX;
const yCenter = Math.round(canvasHeight/scaleY/2)*scaleY;
ctx.moveTo(xCenter,0);
ctx.lineTo(xCenter,canvasHeight);

ctx.moveTo(0,yCenter);
ctx.lineTo(canvasWidth,yCenter);
ctx.stroke();
ctx.closePath();