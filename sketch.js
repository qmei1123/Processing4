var widthX;
var heightY;
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
    circleX =  circleX + .5;
    circleX = circleX + mouseX*.2;
    widthX = mouseX - mouseY;
    heightY = mouseY - mouseX;
    ellipse(mouseX, circleY, widthX, mouseY);
    col.r =  map(widthX, 0, width, 0, 255);
    col.g =  map(mouseY, 0, height, 0, 55);
    col.b =  map(widthX, 0, width, 255, 0);
    stroke(col.r, col.g, col.b, 120);
    fill(col.r, col.g, col.b, 0);
}
