class Polygon{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width,height, options)
        this.width = r
        this.height = r
        this.image = loadImage("images.png")
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //fill(0,255,0)
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}