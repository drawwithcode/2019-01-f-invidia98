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
  stroke(lerpColor(color("red"),color("blue"),frameCount/120));
  strokeWeight(5);

  if (frameCount>=0) {
    var s=0;
    var i=300;
    var d=300;
  }

  if (frameCount>=120) {
      i=1;
      s=300;
      strokeWeight(1);
      stroke("white")
  }

  if (frameCount==180) {
      noLoop()
  }

  line(i, -s, cos(frameCount*3)*d, -sin(frameCount*3)*d);
  line(-i, s, -cos(frameCount*3)*d, sin(frameCount*3)*d);

}
