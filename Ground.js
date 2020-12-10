class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(400,650,820,10,options);
        World.add(world,this.body);

    }
    display(){
       var pos = this.body.position;
       rectMode(CENTER);
       rect(pos.x,pos.y,800,10);
    }
}
