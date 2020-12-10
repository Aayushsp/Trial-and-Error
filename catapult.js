class Catapult{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.003,
            length: 15
        }
        this.pointB = pointB;
    
        this.catapult = Constraint.create(options);
        World.add(world,this.catapult);

    }
    display(){
        if(this.catapult.bodyA){
            var bodyA = this.catapult.bodyA.position;
            var pointB = this.pointB;

            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.catapult.bodyA = null;
    }
}
