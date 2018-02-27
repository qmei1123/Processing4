var widthX;
var heightY;
var speed = 5;
var circleX = 0;
var circleY = 300;
var col = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {  
    circleX = circleX + speed;
    circleY = circleY + speed;
    rect(circleX, circleY, mouseX, mouseY);
    noFill();
    stroke(75, 100, 255, 75);
     if (circleX < 0 || circleX > width) {
        speed = -5;
    }
    if (circleY < 0 || circleY > height) {
        speed = -1;
    }
    if(mouseX < 750 && mouseX > 250) {
        stroke(255, 0, 100, 75);
    }
}
