class String{
    constructor(body1, point2){
        var option = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.009,
            length : 10
        }

    this.bodyA = stone
    this.point2 = point2
    this.string = Constraint.create(option)
    World.add(world, this.string)
    }

    display(){
        if(this.string.bodyA){        
            var point1 = this.string.bodyA.position
            var point2 = this.point2
    
            strokeWeight(5)
            line(point1.x,point1.y,point2.x,point2.y)
    }
    }

    detatch(){
        this.string.bodyA = null
    }

    attach(stone){
        this.string.bodyA = stone
    }
}


    