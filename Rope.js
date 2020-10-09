class Rope {
    constructor(body1,body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 1.0,
            length : 400
        }
        
        this.rope = Constraint.create(options);
        World.add(myWorld,this.rope);
    }

    show()
    {
        if(this.rope.bodyA)
        {
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;

            push();
            strokeWeight(3);
            stroke("white");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}