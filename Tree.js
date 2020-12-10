class Tree{
    constructor(){
       var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(650,445,320,400,options);
        World.add(world,this.body); 
        
        this.image = loadImage("tree.png");
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,320,400);
    }
}