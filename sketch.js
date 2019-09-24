function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(360);
  background(150,200,230);
}

function draw() {

  translate(width/2, height/2);
  stroke(lerpColor(color("red"),color("blue"),frameCount/120));
  strokeWeight(5);

  if (0<frameCount && frameCount<=120) {
    var s=0;
    var i=300;
    var d=300;
    var c=cos(frameCount*3)*d
    var e=sin(frameCount*3)*d
    line(i, -s, c, -e);
    line(-i, s, -c, e);

  }

  if (120<frameCount && frameCount<=240) {
    push();
    stroke("red");
    rotate(90)
    line(200, 0, cos(frameCount*4)*160, -sin(frameCount*3)*210);

  }


  if (240<frameCount && frameCount<=360) {
    push();
    stroke("black");
    rotate(90)
    line(200, 0, cos((frameCount-120)*4)*160, -sin((frameCount-120)*3)*210);
  }

  if (360<frameCount && frameCount<=1080) {
    push();
    stroke("black")
    fill(255, 255, 255, 0)
    ellipse(0,0,3*frameCount-360);
  }


}
