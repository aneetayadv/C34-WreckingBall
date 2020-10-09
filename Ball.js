class Ball {
    constructor(x,y)
    {
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 0.04
        }
        this.xPos = x;
        this.yPos = y;
        this.radius = 50;

        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(myWorld,this.body);
    }

    show()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("green");
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}