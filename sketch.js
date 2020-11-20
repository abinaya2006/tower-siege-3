
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var score=0;
var backgroundImg

function preload()
{
  getBackgroundImg();
}

function setup() {
	createCanvas(1366, 640);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    

   stand1=new Ground(685,500,370,20)
    
    stand2=new Ground(1087,300,300,20)
   

    //fill ("blue")
    //1st level
    box1=new Box(560,467,40,50)
    box2=new Box(600,467,40,50)
    box3=new Box(640,467,40,50)
    box4=new Box(680,467,40,50)
    box5=new Box(720,467,40,50)
    box6=new Box(760,467,40,50)
    box7=new Box(800,467,40,50)

    //2nd level
    b1=new Box(600,417,40,50)
    b2=new Box(640,417,40,50)
    b3=new Box(680,417,40,50)
    b4=new Box(720,417,40,50)
    b5=new Box(760,417,40,50)

    //3rd level
    bo1=new Box(640,367,40,50)
    bo2=new Box(680,367,40,50)
    bo3=new Box(720,367,40,50)

    //4th level
    b=new Box(680,317,40,50)

    //2ndstand 1st level
    block1=new Box(1000,265,40,50)
    block2=new Box(1040,265,40,50)
    block3=new Box(1080,265,40,50)
    block4=new Box(1120,265,40,50)
    block5=new Box(1160,265,40,50)

    //2ndstan 2nd level
    blo1=new Box(1040,215,40,50)
    blo2=new Box(1080,215,40,50)
    blo3=new Box(1120,215,40,50)

     //2ndstan 3rd level
     bl1=new Box(1080,165,40,50)
 
     poly1=new Polygon(150,200,40)

     slingshot=new Slingshot(poly1.body,{x:200,y:200})
   

	   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg){
  background(backgroundImg);}


   stand1.display() 
//1st level  
 box1.display( "#D36AEF","black")
 box2.display("#D36AEF","black")
 box3.display("#D36AEF","black")
 box4.display("#D36AEF","black")
 box5.display("#D36AEF","black")
 box6.display("#D36AEF","black")
 box7.display("#D36AEF","black")

 box1.Score()
 box2.Score()
 box3.Score()
 box4.Score()
 box5.Score()
 box6.Score()
 box7.Score()
   //2nd level
 b1.display("yellow","black")
 b2.display("yellow","black")
 b3.display("yellow","black")
 b4.display("yellow","black")
 b5.display("yellow","black")

 b1.Score()
 b2.Score()
 b3.Score()
 b4.Score()
 b5.Score()

 //3rd level
 bo1.display("#90EF84","black")
 bo2.display("#90EF84","black")
 bo3.display("#90EF84","black")
 
 bo1.Score()
 bo2.Score()
 bo3.Score()

 //4th level
 b.display("#DC6C6C","black")
 b.Score()
 

 stand2.display()
 //2ndstand 1st level
 block1.display( "#D36AEF","black")
 block2.display( "#D36AEF","black")
 block3.display( "#D36AEF","black")
 block4.display( "#D36AEF","black")
 block5.display( "#D36AEF","black")

 block1.Score()
 block2.Score()
 block3.Score()
 block4.Score()
 block5.Score()

 //2nd stand 2nd level
 blo1.display("#90EF84","black")
 blo2.display("#90EF84","black")
 blo3.display("#90EF84","black")

 blo1.Score()
 blo2.Score()
 blo3.Score()

 //2nd stand 3rd level
 bl1.display("#DC6C6C","black")
 bl1.Score()

 stand1.display()
 stand2.display()
 
 slingshot.display()

 if(score==50){
   textSize(40)
   strokeWeight (9)
   stroke("black")
   fill ("yellow")
   text ("YOU WON ",586,320)
   strokeWeight(3)
  stroke ("green")
  fill ("blue")
   text("PRESS F5 TO PLAY AGAIN",200,100)
 }


  drawSprites();
 if(score<50){ 
  poly1.display()  
  textSize(40)
  strokeWeight(3)
  stroke ("green")
  fill ("blue")
  text ("PRESS SPACE TO GET A SECOND CHANCE",200,100)
 }
 textSize(40)
 strokeWeight(3)
 stroke ("green")
 fill ("blue")
  text("Score: "+score,1000,50)
 
}

function mouseDragged(){
 
    Matter.Body.setPosition(poly1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	
	slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32){

   Matter.Body.setPosition(poly1.body,{x:200,y:200});
   slingshot.attach(poly1.body);

 
 }
}


async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1700){
      bg = "day.jpeg";
  }
  else{
    bg="night.jpeg"
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
 
