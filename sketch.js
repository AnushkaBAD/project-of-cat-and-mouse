
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tomImg1=loadAnimation("images/cat1.png")
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
    tomImg4=loadAnimation("images/cat4.png")
    jerryImg1=loadAnimation("images/mouse1.png")
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("tomstanding",tomImg1);
    tom.scale=0.2

    jerry=createSprite(200,600)
    jerry.addAnimation("jerrystanding",jerryImg1)
    jerry.scale=0.2

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("tomlastimage",tomImg4)
        tom.changeAnimation("tomlastimage")
        tom.x=300
        jerry.addAnimation("jerrylastimage",jerryImg4)
        jerry.changeAnimation("jerrylastimage")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  tom.velocityX=-5
  tom.addAnimation("tomrunning",tomImg2)
  tom.changeAnimation("tomrunning")
  jerry.addAnimation("jerryteasing",jerryImg2)
  jerry.changeAnimation("jerryteasing")
  jerry.frameDelay=25

}

}
