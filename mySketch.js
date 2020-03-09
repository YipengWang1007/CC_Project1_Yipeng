//Yipeng Wang Project 1: The Unexpected Machine
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
	moon(){
		fill('#FF8000');
		ellipse(this.x,this.y,this.size*0.3,this.size*0.3);
		fill('#FFFFCC');
		ellipse(this.x+this.size/8,this.y,this.size*0.26,this.size*0.26);	
	}
}
function worldTradeCenter(x,y,w,h){
	stroke(0);
	fill(255-counter*17);
	rect(x,y-h/2,w,h);
	strokeWeight(2);
	triangle(x,y+120,x+w,y+120,x+w/2,y-h/2);
	stroke(255-counter*17);
	line(x+w/2,y-h/2,x+w/2,y-h/2-50);
}
function building(x,y,w,h){
	stroke(0)
	fill(255-counter*17);
	ellipse(x+w/2,y-h/2,w/2,20)
	rect(x,y-h/2,w,h);
	
	for(i=y;i>y-h/2;i-=8){
		line(x,i,x+w,i);
	}
	
}
function building2(x,y,w,h){
	stroke(0)
	fill(255-counter*17);
	rect(x,y,w,h/2);
	rect(x+w/8,y-h*0.3,w*0.75,h*0.3);
	for(i=x;i<=x+w;i+=5){
		line(i,y,i,y+h/2);
	}
	
}
let moon= new Star(1200,150,280);
let counter=0;
function mousePressed(){
		let size= random(20,120);
		let star= new Star(mouseX,mouseY,size);
		star.form();
		counter+=1;
}
function draw() {
	if(counter<=12){
		fill(204-counter*17);
	}
	else{
		fill(0);
	}
	rect(100,631,120,200);
	rect(200,560,100,270);
	rect(360,570,120,260);
	building(200,690,80,300);
	worldTradeCenter(300,535,60,600);
	building(400,660,70,350);
	building2(500,680,80,320);
	print(mouseX,mouseY);
	moon.form();
	moon.moon();
	if(counter>25){
		background(0);
	}
	
}

