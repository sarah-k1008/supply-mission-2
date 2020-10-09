class Box{
    constructor(x,y){
 this.x = x;
 this.y = y;
 this.width = 200;
 this.height = 100;
 this.thickness = 20;
 this.angle = 0;
this.bottombody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
this.leftbody = Bodies.rectangle(this.x - this.width/2, this.y - this.height/2, this.thickness,this.height, {isStatic : true});
Matter.Body.setAngle(this.leftbody,this.angle);
this.rightbody = Bodies.rectangle(this.x + this.width/2, this.y - this.height/2, this.thickness,this.height,{isStatic : true})
Matter.Body.setAngle(this.rightbody, (-1)*this.angle);
World.add(world,this.bottombody);
World.add(world,this.leftbody);
World.add(world,this.rightbody);
}
display(){
var posb = this.bottombody.position;
var posl = this.leftbody.position;
var posr = this.rightbody.position;

push();
translate(posl.x,posl.y)
rotate(this.angle)
rectMode(CENTER)
fill(255)
stroke(255)
rect(0,0,this.thickness,this.height);
pop();


push();
translate(posr.x,posr.y)
rotate((-1)*this.angle)
rectMode(CENTER)
fill(255)
stroke(255)
rect(0,0,this.thickness,this.height);
pop();


push();
translate(posb.x,posb.y)
rectMode(CENTER)
fill(255)
stroke(255)
rect(0,0,this.width,this.thickness);
pop();
}
}