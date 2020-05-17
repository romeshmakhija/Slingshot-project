class Rock{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':25.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(112,109,109);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }
}