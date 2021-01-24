class Stone{
    constructor(x,y,r){
        var option = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

    this.stone = Bodies.circle(x,y,r,option)
    this.r = r
    World.add(world, this.stone)
    this.image = loadImage("Plucking-mangoes-img/stone.png")
    }
    
    display(){
        var pos = this.stone.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}
