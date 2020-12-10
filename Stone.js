class Stone{
    constructor(){
        var options ={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(88,505,10,options);
        World.add(world,this.body);

        this.radius = 10;

        this.image = loadImage("stone.png");

       
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}