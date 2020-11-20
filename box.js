class Box{
    
    constructor(x,y,width,height){
        
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
     //   this.x=x
       // this.y=y
        this.width=width
        this.height=height
        this.Visiblity = 255;
        World.add(world,this.body)
    }
    
    display(color,border){
       
        if(this.body.speed < 6){
        var pos =this.body.position
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER)
        strokeWeight(4);
        stroke(border);
        fill(color);
       
        rect(0,0,this.width,this.height)
        pop ()
        }

        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(225,this.Visiblity);
            pop();
          
        }
    }

    Score(){
        if (this.Visiblity < 0 && this.Visiblity > -15){
          score++;
        }
      }
    
    testupdate(){
        test= test+1;
      }
}