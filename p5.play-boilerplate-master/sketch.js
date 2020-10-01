var wall;


function setup() {
  createCanvas(800,400);
  car_1 = createSprite(400, 120, 50, 50);
  wall = createSprite(200, 400, 10, 400);
  car_2 = createSprite(400, 240, 50, 50);
  car_3 = createSprite(400, 360, 50, 50);
}

function draw() {
  background(255,255,255);  
  car_1.velocityX = -45
  car_2.velocityX = -40
  car_3.velocityX = -70

  if (car_1.isTouching(wall))
  {
    car_1.velocityX = 0;
    wall.shapeColor("red")
    console.log("Wall is not strong")
  }

  if (car_2.isTouching(wall))
  {
    car_2.velocityX = 0;
    wall.shapeColor("green");
    console.log("Wall is strong")
  }

  if (car_3.isTouching(wall))
  {
    car_3.velocityX = 0;
    wall.shapeColor("red");
    console.log("Wall is not strong")
  }
  drawSprites();
}