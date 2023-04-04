var GlassX = 250;
var GlassY = 100;
var GlassDirection = 1;

var armX = 100;
var armY = 285;
var armDirection = 3;

var HeadX =175
var HeadY = 315
var HeadDirection = 4

var BodyX = 220;
var BodyY = 170;
var BodyDirection = 2;

var x=0
var y=0
var diagnal = 6;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
}
function draw() {
  background(220);
  
  x+=5
  y+=5
  if(y > height)
    {
      y=0;
    }
  //head

ellipse(HeadX,100,300,200);
     HeadX+=HeadDirection;
    if(HeadX >= 318 || HeadX <= 72)
    {
        HeadDirection *= -1;
    }
     point(95, 30)
  
   line(200, 50, 65, 45)
  line(300, 50, 65, 45)
  line(215, 270, 215, 270)
  square(GlassX,GlassY,50)
      GlassX+=GlassDirection;
    if(GlassX >= 318 || GlassX <= 72)
    {
        GlassDirection *= -1;
    }
   square(200,40,50)
   point(130, 75)
  point(230, 75)
  rect(145,130,40,30)
  rect(80,20,200,10)
  
  ellipse(105,70,10,10)
  ellipse(x,y,10,10)
  if(y <= 0 || y >= 450 )
  y += diagnal;
  {
    diagnal *= -1;
  }
  rect(110,BodyY,130,90)
 BodyY += BodyDirection;
    if(BodyY <= 0 || BodyY >= 450 )
    {
        BodyDirection *= -1;
    }
  rect(110,270,40,70)
  rect(200,270,40,70)
  rect(90,310,30,30)
  rect(180,310,30,30)
  
   triangle(80, 75, 58, 20, 36, 45)
  
    triangle(10, 75, 38, 20, 36, 45)
    ellipse(35,40,10,10)
  
  
   rect(60,armY,40,70)
   armY += armDirection;
    if(armY <= 0 || armY >= 450 )
    {
        armDirection *= -1;
    }
  circle(70,270,40)
   rect(200,190,110,20)
   circle(170,200,40)
  

    text('Karson tries on', 300, 30)
    text('a bow', 300, 45)
   textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *= -1;
        count = 0
    }
   
     text('Karson McGrath', 110, 370)
  


}
