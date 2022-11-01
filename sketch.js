var box

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x+5
    console.log("right arrow pressed")
  }

  if(keyIsDown(LEFT_ARROW))
  {
    box.position.x = box.position.x-5
    console.log("left arrow pressed")
  }

  if(keyIsDown(UP_ARROW))
  {
    box.position.y = box.position.y-5
    console.log("up arrow pressed")
  }

  if(keyIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y+5
    console.log("down arrow pressed")
  }

  drawSprites();
}




