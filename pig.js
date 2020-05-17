class Pig{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.4,
            'friction': 20.0,
            'density': 1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }


}