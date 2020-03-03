function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}
class Star{
	constructor(x,y,size){
		this.x=x;
		this.y=y;
		this.size=size;
	}
	form(){
			noStroke();
			fill('#000066');
			ellipse(this.x,this.y,this.size,this.size);
			fill('#99CCFF');
			ellipse(this.x,this.y,this.size*0.9,this.size*0.9);
			fill('#000066');
			ellipse(this.x-this.size/8,this.y,this.size*0.6,this.size*0.6);
			ellipse(this.x,this.y-this.size/8,this.size*0.6,this.size*0.6);
			fill(255);
			ellipse(this.x,this.y,this.size*0.75,this.size*0.75);
			fill('#000066');
			ellipse(this.x,this.y,this.size*0.70,this.size*0.70);
			fill('#99CCFF');
			ellipse(this.x+this.size/8,this.y,this.size*0.4,this.size*0.5);
			ellipse(this.x,this.y+this.size/10,this.size*0.5,this.size*0.4);
			fill('#000066');
			ellipse(this.x+this.size/8,this.y+this.size/10,this.size*0.3,this.size*0.3);
			fill(255);
			ellipse(this.x,this.y,this.size*0.55,this.size*0.55);
			fill('#FFFF99');
			ellipse(this.x,this.y,this.size*0.5,this.size*0.5);
			fill('#FFFFCC');
			ellipse(this.x,this.y,this.size*0.35,this.size*0.35);
			fill('#FF8000');
			ellipse(this.x,this.y,this.size*0.1,this.size*0.1);

		
	}
}
class Moon{
	constructor(x,y,size){
		this.x=x;
		this.y=y;
		this.size=size;
	}
	form(){
		noStroke();
		fill('#000066');
		ellipse(this.x,this.y,this.size,this.size);
		fill('#99CCFF');
		ellipse(this.x,this.y,this.size*0.9,this.size*0.9);
		fill('#000066');
		ellipse(this.x-this.size/8,this.y,this.size*0.6,this.size*0.6);
		ellipse(this.x,this.y-this.size/8,this.size*0.6,this.size*0.6);
		fill(255);
		ellipse(this.x,this.y,this.size*0.75,this.size*0.75);
		fill('#000066');
		ellipse(this.x,this.y,this.size*0.70,this.size*0.70);
		fill('#99CCFF');
		ellipse(this.x+this.size/8,this.y,this.size*0.4,this.size*0.5);
		ellipse(this.x,this.y+this.size/10,this.size*0.5,this.size*0.4);
		fill('#000066');
		ellipse(this.x+this.size/8,this.y+this.size/10,this.size*0.3,this.size*0.3);
		fill(255);
		ellipse(this.x,this.y,this.size*0.55,this.size*0.55);
		fill('#FFFF99');
		ellipse(this.x,this.y,this.size*0.5,this.size*0.5);
		fill('#FFFFCC');
		ellipse(this.x,this.y,this.size*0.35,this.size*0.35);
		fill('#FF8000');
		ellipse(this.x,this.y,this.size*0.3,this.size*0.3);
		fill('#FFFFCC');
		ellipse(this.x+this.size/8,this.y,this.size*0.26,this.size*0.26);	
	}
}
function worldTradeCenter(x,y,w,h){
	fill(255);
	rect(x,y-h/2,w,h);
	stroke(0);
	strokeWeight(2);
	fill(255);
	triangle(x,y+40,x+w,y+40,x+w/2,y-h/2);
	stroke(255);
	line(x+w/2,y-h/2,x+w/2,y-h/2-50);
}
function building(x,y,w,h){
	
	fill(255);
	ellipse(x+w/2,y-h/2,w/2,20)
	stroke(1);
	stroke(0);
	rect(x,y-h/2,w,h);
	for(i=y;i>y-h/2;i-=8){
		line(x,i,x+w,i);
	}
	
}
function building2(x,y,w,h){
	fill(255);
	rect(x,y,w,h/2);
	stroke(0);
	for(i=x;i<=x+w;i+=5){
		line(i,y,i,y+h/2);
	}
	rect(x+w/8,y-h*0.3,w*0.75,h*0.3);
}

let star1= new Star(1000,220,150);
let star3= new Star(880,160,130);
let star2= new Star(500,100,40);
let star4= new Star(600,300,80);
let star5= new Star(100,200,100);
let star6= new Star(400,270,20);
let moon= new Moon(1200,150,280);

function draw() {
	fill(120);
	quad(0,833,0,860,1900,860,1900,780);
	fill(255);
	rect(100,631,120,200);
	rect(200,560,100,270);
	rect(360,570,120,260);
	building(200,690,80,300);
	worldTradeCenter(300,535,60,600);
	building(400,660,70,350);
	building2(500,680,80,320);
	print(mouseX,mouseY);
	star1.form();
	star2.form();
	star3.form();
	star4.form();
	star5.form();
	star6.form();
	moon.form();
	
}

