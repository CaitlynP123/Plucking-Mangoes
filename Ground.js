class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }

    this.ground = Bodies.rectangle(x,y,width,height,option)
    this.w = width
    this.h = height
    World.add(world, this.ground)
    }

    display(){
        var pos = this.ground.position
        fill("black")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
    }
}