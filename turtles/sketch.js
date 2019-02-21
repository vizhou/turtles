/*Vicky Zhou
vzhou@andrew.cmu.edu
Section E
Project 11 - Freestyle with Turtles*/

//turtle array
var ttl = [];

function setup() {
	createCanvas(800, 800);
	background(180, 200, 250);
	//initializing the turtle array
	for (var i = 0; i < 5; i ++){
		t = makeTurtle(0, 0);
		ttl.push(t);
	}
}


function draw() {
	for (var i = 0; i < 5; i ++){
		fill(190, 210, 210, 200);
		stroke("blue");
		//drawing the triangle
		triangle(ttl[i].x, ttl[i].y,
			ttl[i].x + 10, ttl[i].y + 60,
			ttl[i].x + 100, ttl[i].y + 100);
		//moving the triangle
		moveTurtle();
	}

}

//function to move the triangles 
function moveTurtle() {
	for (var i = 0; i < 5; i ++){
		dx = abs(ttl[i].x - mouseX);
		if (ttl[i].x < mouseX) {
			ttl[i].x += dx / 50;
		}
		else {
			ttl[i].x -= dx / 20;
		}
		dy = abs(ttl[i].y - mouseY);
		if (ttl[i].y < mouseY) {
			ttl[i].y += dy / 100 + i;
		}
		else {
			ttl[i].y -= dy / 100 + i;
		}
	}
}



//---------------------------------------------------------------------------
function turtleLeft(d){this.angle-=d;}function turtleRight(d){this.angle+=d;}
function turtleForward(p){var rad=radians(this.angle);var newx=this.x+cos(rad)*p;
var newy=this.y+sin(rad)*p;this.goto(newx,newy);}function turtleBack(p){
this.forward(-p);}function turtlePenDown(){this.penIsDown=true;}
function turtlePenUp(){this.penIsDown = false;}function turtleGoTo(x,y){
if(this.penIsDown){stroke(this.color);strokeWeight(this.weight);
line(this.x,this.y,x,y);}this.x = x;this.y = y;}function turtleDistTo(x,y){
return sqrt(sq(this.x-x)+sq(this.y-y));}function turtleAngleTo(x,y){
var absAngle=degrees(atan2(y-this.y,x-this.x));
var angle=((absAngle-this.angle)+360)%360.0;return angle;}
function turtleTurnToward(x,y,d){var angle = this.angleTo(x,y);if(angle< 180){
this.angle+=d;}else{this.angle-=d;}}function turtleSetColor(c){this.color=c;}
function turtleSetWeight(w){this.weight=w;}function turtleFace(angle){
this.angle = angle;}function makeTurtle(tx,ty){var turtle={x:tx,y:ty,
angle:0.0,penIsDown:true,color:color(128),weight:1,left:turtleLeft,
right:turtleRight,forward:turtleForward, back:turtleBack,penDown:turtlePenDown,
penUp:turtlePenUp,goto:turtleGoTo, angleto:turtleAngleTo,
turnToward:turtleTurnToward,distanceTo:turtleDistTo, angleTo:turtleAngleTo,
setColor:turtleSetColor, setWeight:turtleSetWeight,face:turtleFace};
return turtle;}