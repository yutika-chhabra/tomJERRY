  var bgImage,bg;
  var cat,rat;
  var cat1_moving,rat1_moving;
  var cat_running,rat_running;
  var ratImg4,catImg4;

function preload() {
  
   bgImage = loadImage("garden.png");

   rat1_moving = loadAnimation("jerryOne.png");
   rat_running = loadAnimation("jerryTwo.png","jerryThree.png");
   ratImg4 = loadAnimation("jerryFour.png");

   cat1_moving = loadAnimation("tomOne.png");
   cat_running = loadAnimation("tomTwo.png","tomThree.png");
   catImg4 = loadAnimation("tomFour.png");

}

function setup(){
    createCanvas(1200,800);
    
    bg = createSprite(600,700,10,10);
    bg.addImage(bgImage);
    

    rat = createSprite(50,400,20,20);
    rat.addAnimation("moving",rat1_moving);
    rat.scale = 0.5;

    cat = createSprite(1120,700,20,20);
    cat.addAnimation("moving",cat1_moving);
    cat.scale = 0.5;

}

function draw() {

    background(255);
    
    keyPressed();

    if(cat.x - rat.x < rat.width/2 + cat.width/2){
      cat.velocityX = 0;
      cat.changeAnimation("running",catImg4);
      rat.changeAnimation("running",ratImg4);
    }
    drawSprites();
}


function keyPressed(){

  if(keyDown("left_arrow")){

    cat.changeAnimation("running",cat_running);
    rat.changeAnimation("running",rat_running);
    cat.velocityX = -4;
  }


}
