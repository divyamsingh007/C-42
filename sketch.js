var spaceShipImg,
  spaceBg,
  playerImg_1,
  playerImg_both,
  playerImg_right,
  playerImg_left;

var spaceShipSprite, spaceCraftSprite, dockSprite;

function preload() {
  spaceBg = loadImage("Images/spacebg.jpg");
  spaceShipImg = loadImage("Images/iss.png");
  playerImg_1 = loadImage("Images/spacecraft1.png");
  playerImg_both = loadImage("Images/spacecraft2.png");
  playerImg_right = loadImage("Images/spacecraft4.png");
  playerImg_left = loadImage("Images/spacecraft3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  spaceShipSprite = createSprite(
    windowWidth / 2,
    windowHeight / 2 - 100,
    100,
    100
  );
  spaceShipSprite.addImage(spaceShipImg);
  spaceShipSprite.scale = 1.2;

  spaceCraftSprite = createSprite(200, windowHeight - 100, 100, 100);
  spaceCraftSprite.addImage(playerImg_1);
  spaceCraftSprite.scale = 0.4;
  // spaceCraftSprite.debug = true;
  spaceCraftSprite.setCollider("rectangle", 0, 0, 100, 420);

  dockSprite = createSprite(
    windowWidth / 2 - 80,
    windowHeight / 2 - 60,
    10,
    30
  );
  dockSprite.visible = false;
}

function draw() {
  background(spaceBg);
  if (spaceCraftSprite.isTouching(dockSprite)) {
    fill("White");
    textSize(25);
    text("Docking Successfull", 100, 100);
    spaceCraftSprite.addImage(playerImg_1);
  } else {
    spaceCraft_control();
  }
  drawSprites();
}

function spaceCraft_control() {
  if (keyIsDown(UP_ARROW)) {
    spaceCraftSprite.y = spaceCraftSprite.y - 10;
    spaceCraftSprite.addImage(playerImg_both);
  } else if (keyIsDown(DOWN_ARROW)) {
    spaceCraftSprite.y = spaceCraftSprite.y + 10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    spaceCraftSprite.x = spaceCraftSprite.x + 10;
    spaceCraftSprite.addImage(playerImg_left);
  } else if (keyIsDown(LEFT_ARROW)) {
    spaceCraftSprite.x = spaceCraftSprite.x - 10;
    spaceCraftSprite.addImage(playerImg_right);
  } else {
    spaceCraftSprite.addImage(playerImg_1);
  }
}
