class Mango{
    constructor(x,y,r){
        var option = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }

        this.mango = Bodies.circle(x,y,r,option)
        this.r = r
        World.add(world, this.mango)
        this.image = loadImage("Plucking-mangoes-Img/mango.png")
    }
    display(){
        var pos = this.mango.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}
