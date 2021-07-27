function preload(){
    
}
function setup(){
    canvas = createCanvas(800, 533.3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    fill("blue");
    stroke("red")
    strokeWeight(4)
    circle(100, 100, 100);
    fill("blue");
    stroke("red");
    strokeWeight(4);
    circle(700, 100, 100);
    fill("blue");
    stroke("red");
    strokeWeight(4);
    circle(100, 433.3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333, 100);
    fill("blue");
    stroke("red");
    strokeWeight(4);
    circle(700, 433.3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333, 100);
    fill("red");
    stroke("blue");
    strokeWeight(4);
    rect(140, 75, 520, 50);
    fill("red");
    stroke("blue");
    strokeWeight(4);
    rect(140, 410, 520, 50);
    fill("red");
    stroke("blue");
    strokeWeight(4);
    rect(75, 140, 50, 255);
    fill("red");
    stroke("blue");
    strokeWeight(4);
    rect(675, 140, 50, 255);
    fill("blue");
    stroke("red");
    strokeWeight("4");
    ellipse(400, 160, 500, 50);
    fill("blue");
    stroke("red");
    strokeWeight("4");
    ellipse(400, 375, 500, 50);
    fill("blue");
    stroke("red");
    strokeWeight("4");
    ellipse(160, 267.5, 50, 185);
    fill("blue");
    stroke("red");
    strokeWeight("4");
    ellipse(640, 267.5, 50, 185);
    fill("red");
    stroke("blue");
    strokeWeight(4);
    rect(210, 200, 380, 135);
    image(video, 310, 200, 180, 135);
}