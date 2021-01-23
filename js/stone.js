class stones{
    constructor(x,y,width,height){
        var options={
        density:1.2,
        restitution:0,
        friction:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("images/stone.png");
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        image(this.image, 0, 0, this.width, this.height);
    }
}
