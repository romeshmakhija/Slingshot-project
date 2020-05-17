class Ball{
    constructor(x,y){
        var options = {
           'restitution':0.8, 
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,15,options);
        this.radius = 15;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       // pos.x = mouseX;
       // pos.y = mouseY;
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
    }
}