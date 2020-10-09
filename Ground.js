class Ground {
    constructor(x,y,w)
    {
        var options = {
            isStatic : true
        }
        this.xPos = x;
        this.yPos = y;
        this.width = w;
        this.height = 30;

        this.body = Bodies.rectangle(x,y,w,30,options);
        World.add(myWorld,this.body);
    }

    show()
    {
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

}