
var characterX = 200;
var characterY = 200;



var w = 87; 
var s = 83;
var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shapeA = 60;
var shapeB = 90;
var shapeASpeed;
var shapeBSpeed;

var shapeJ = 10;
var shapeK = 40;
var shapeJSpeed;
var shapeKSpeed;

var shapeS = 70;
var shapeT = 55;
var shapeTSpeed;
var shapeSSpeed;




var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
   
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(90,350);
  
   shapeASpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 2);
    shapeBSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 2);
    createCharacter(300,150);
  
     shapeJSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeKSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    createCharacter(160,80);
       
  shapeTSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    shapeSSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    createCharacter(110,250);
  
  
}

function draw()
{
    background(335,145,12);
    stroke(0);
    fill(0);
    
    
    createBorders(3);

    
    
  
  textSize(16);
    text("GET OUT^^", width-150,height-515)
  textSize(16);
    text("Dodge the tires!", width-450,height-415)
  
    
    drawCharacter();
    characterMovement();
  fill(700,500,10);
  rect(200,155,100,100);
  
    fill(700,500,10);
  rect(200,300,100,100);
  
    fill(700,500,10);
  rect(200,5,100,100);


  
    fill(0,0,0);
    circle(shapeX, shapeY, 50);
  fill(213,145,14);
  circle(shapeX, shapeY, 20);
  
    
  fill(10,0,0);
    circle(shapeA, shapeB, 80);
  fill(23,185,74);
    circle(shapeA, shapeB, 40);
  
  fill(0,0,0)
  circle(shapeJ, shapeK, 110);
    fill(200,76,81)
  circle(shapeJ, shapeK, 30);
  
    fill(0,0,0)
  circle(shapeT, shapeS, 70);
  fill(700,11,61)
  circle(shapeT, shapeS, 20);

  


   
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 2);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 2);
  
     shapeASpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 4);
     shapeBSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 4);

    shapeJSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 3);
     shapeKSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 3);
  
    shapeTSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 3);
     shapeSSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 3);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
 
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
  shapeA += shapeASpeed;
    shapeB += shapeBSpeed;
 
  
    if(shapeA > width)
    {
        shapeA = 3;
    }
    if(shapeA < 3)
    {
        shapeA = width;
    }
    if(shapeB > height)
    {
        shapeB = 3;
    }
    if(shapeB < 3)
    {
        shapeB = height;
    }
  
   shapeJ += shapeJSpeed;
    shapeK += shapeKSpeed;
    
  
    if(shapeJ > width)
  {
        shapeJ = 0;
    }
    if(shapeJ < 0)
    {
        shapeJ = width;
    }
    if(shapeK > height)
    {
        shapeK = 0;
    }
    if(shapeK < 0)
    {
        shapeK = height;
       }
  
   shapeT += shapeTSpeed;
    shapeS += shapeSSpeed;
    
  
    if(shapeT > width)
  {
        shapeT = 2;
    }
    if(shapeT < 2)
    {
        shapeT = width;
    }
    if(shapeS > height)
    {
        shapeS = 2;
    }
    if(shapeS < 2)
    {
        shapeS = height;
       }
    
  
    if(characterX > width && characterY > width-150)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Winner Winner!", width/2-150, height/2-515);
    }
  
 
    
    fill(0,0,0);
    circle(mouseShapeX, mouseShapeY, 25);
  fill(320,130,440);
    circle(mouseShapeX, mouseShapeY, 5);
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 20;   
    }
    if(keyIsDown(s))
    {
        characterY += 20;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
  
    
  
}

function drawCharacter()
{
    fill(564,60,333);
    circle(characterX,characterY,25);
   fill(0,0,0);
    circle(characterX,characterY, 15);
  fill(564,60,333);
    circle(characterX,characterY,5);
   
  
}
function createBorders(thickness)

{
   rect(0,0,width-50,thickness)
   rect(0,0,thickness,height)
 rect(width-thickness,0,thickness,height-0)
    rect(0, height-thickness,width, thickness)
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
