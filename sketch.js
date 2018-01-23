var widthX;
var heightY;
var speed = .5;
var circleX = 0;
var circleY = 300;
var col = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
};
function setup() {
    createCanvas(1000, 900);
}

function draw() {  
    circleX =  circleX + speed;
    circleY = circleY + speed;
    widthX = mouseX - mouseY;
    heightY = mouseY - mouseX;
    ellipse (circleX, circleY, mouseX, mouseY);
    fill(0,0,0,0);
    stroke
    if (circleX < 0 || circleX > width) {
        speed = -.5;
    }
    if (circleY < 0 || circleY > height) {
        speed = -.1;
    }
    if(mouseX < 750 && mouseX > 250) {
        stroke(255, 0, 100, 75);
    }  else {
        stroke(100, 0, 255, 75);
    }
}
