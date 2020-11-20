class Polygon{

    constructor(x, y, r){

        var options={
           friction:0.3,
           density:0.4

        }
        this.body=Bodies.circle (x,y,r,options)
        this.x=x
        this.y=y
        this.r=r
        this.image =loadImage("regular polygon.png")
        World.add(world,this.body)
    }
    
    display(){
         var pos=this.body.position
         var angle = this.body.angle;
         push ()
         translate(pos.x,pos.y)
         rotate (angle)
         imageMode (CENTER)
         image (this.image,0,0,this.r,this.r)
         pop ()
            //this.body.position.x = mouseX;
          //this.body.position.y = mouseY;

    }

    
}

