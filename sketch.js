
var bgImg,bg;
var mouse,mouseImg,mouseImg2;
var cat,catImg,catImg2;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg=loadImage("images/cat1.png");
    catImg2=loadImage("images/cat2.png","images/cat3.png","images/cat4.png");
    mouseImg=loadImage("images/mouse4.png");
    mouseImg2=loadImage("images/mouse1.png","images/mouse2.png","images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    bg=createSprite(500,400,20,20);
    bg.addImage(bgImg);
    cat=createSprite(700,600,10,10);
    cat.addImage(catImg2);
    cat.scale=0.2;
    mouse=createSprite(200,600,10,10);
    mouse.addImage(mouseImg);
    mouse.scale=0.2;
    cat.debug=true;
    mouse.debug=true;
    cat.setCollider("rectangle",00,00,400,80);
    mouse.setCollider("rectangle",00,00,400,80);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    if(cat.x-mouse.x<(cat.width+mouse.width)/2){
        cat.velocityX=0;
        mouse.addImage(mouseImg);
        cat.addImage(catImg);
    }
}


function keyPressed(){


    if(keyDown("LEFT_ARROW")){
        cat.velocityX=-4;
        mouse.addImage(mouseImg2);
        mouse.frameDelay=25;
    }

  //For moving and changing animation write code here


}
