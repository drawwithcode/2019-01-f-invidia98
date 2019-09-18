function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(30);
  background("aquamarine");





}

function draw() {


  translate(width/2, height/2);

  stroke(lerpColor(color("green"),color("blue"),frameCount/120));
  strokeWeight(6);


  var i=300
  line(i, 0, cos(frameCount*3)*i, -sin(frameCount*3)*i);

  if (frameCount==120) {
    noLoop();
  }



}
