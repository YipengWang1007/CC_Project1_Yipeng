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
		line(x,i,x+i,i);
	}
	
}

let star1= new Star(1000,220,150);
let star3= new Star(880,160,130);
let star2= new Star(500,100,40);
let star4= new Star(600,300,80);
let moon= new Moon(1200,150,200);

function draw() {
	star1.form();
	star2.form();
	star3.form();
	star4.form();
	moon.form();
	fill(255);
	rect(300,650,100,250);
	building(260,650,40,300);
	worldTradeCenter(300,650,60,600);
	building(400,650,70,400)
	
}

