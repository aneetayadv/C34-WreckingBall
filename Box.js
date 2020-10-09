class Box {
    constructor(x,y)
    {
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 0.04
        }
        this.xPos = x;
        this.yPos = y;
        this.width = 50;
        this.height = 50;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
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
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}