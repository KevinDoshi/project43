var electrical
var navigation
var engine
var bg

function preload(){
engineimg=loadImage("engine.jpg")
electricalimg=loadImage("electrical.png")
navigationimg=loadImage("navigation.png")
bgimg=loadImage("greybg.jpg")
cyan=loadImage("cyan among us.png")
bot1=loadImage("red bot.webp")
bot2=loadImage("red bot.webp")
bot3=loadImage("red bot.webp")
bot4=loadImage("red bot.webp")
bot5=loadImage("red bot.webp")
bot6=loadImage("red bot.webp")
bot7=loadImage("red bot.webp")
wires=loadImage("FixWiring.jpg")
divertpower=loadImage("divert power.png")
fuel=loadImage("fuel.jpg")
}

function setup(){
createCanvas(1000,550)
player1=createSprite(100,100)

bot1sprite=createSprite(500,300)
bot1sprite.velocityX=random(-2,+2)
bot1sprite.velocityY=random(-2,+2)
bot1sprite.addImage(bot1)
bot1sprite.scale=0.2

bot2sprite=createSprite(500,300)
bot2sprite.velocityX=random(-2,+2)
bot2sprite.velocityY=random(-2,+2)
bot2sprite.addImage(bot2)
bot2sprite.scale=0.2

bot3sprite=createSprite(500,300)
bot3sprite.velocityX=random(-2,+2)
bot3sprite.velocityY=random(-2,+2)
bot3sprite.addImage(bot3)
bot3sprite.scale=0.2

bot3sprite=createSprite(500,300)
bot3sprite.velocityX=random(-2,+2)
bot3sprite.velocityY=random(-2,+2)
bot3sprite.addImage(bot3)
bot3sprite.scale=0.2

bot3sprite=createSprite(500,300)
bot3sprite.velocityX=random(-2,+2)
bot3sprite.velocityY=random(-2,+2)
bot3sprite.addImage(bot3)
bot3sprite.scale=0.2

bot3sprite=createSprite(500,300)
bot3sprite.velocityX=random(-2,+2)
bot3sprite.velocityY=random(-2,+2)
bot3sprite.addImage(bot3)
bot3sprite.scale=0.2

bot4sprite=createSprite(500,300)
bot4sprite.velocityX=random(-2,+2)
bot4sprite.velocityY=random(-2,+2)
bot4sprite.addImage(bot4)
bot4sprite.scale=0.2

bot5sprite=createSprite(500,300)
bot5sprite.velocityX=random(-2,+2)
bot5sprite.velocityY=random(-2,+2)
bot5sprite.addImage(bot5)
bot5sprite.scale=0.2

bot6sprite=createSprite(500,300)
bot6sprite.velocityX=random(-2,+2)
bot6sprite.velocityY=random(-2,+2)
bot6sprite.addImage(bot6)
bot6sprite.scale=0.2

bot7sprite=createSprite(500,300)
bot7sprite.velocityX=random(-2,+2)
bot7sprite.velocityY=random(-2,+2)
bot7sprite.addImage(bot7)
bot7sprite.scale=0.2

player1.scale=0.02
electrical=createSprite(500,100,300,300)
navigation=createSprite(130,425,300,300)
engine=createSprite(900,300,300,300)
engine.addImage(engineimg)
electrical.addImage(electricalimg)
navigation.addImage(navigationimg)
player1.addImage(cyan)
engine.scale=0.3
electrical.scale=0.2
navigation.scale=0.2
fueling=createSprite(850,300)
fueling.visible=false
fueling.depth=51
fueling.scale=0.1
wiring=createSprite(500,100)
wiring.visible=false
wiring.depth=50
wiring.scale=0.3
divert=createSprite(140,350)
divert.addImage(divertpower)
divert.visible=false
divert.depth=53
divert.scale=0.07
w1=createSprite(900,500,30,30)
w1.shapeColor="yellow"
w2=createSprite(940,500,30,30)
w2.shapeColor="yellow"
w3=createSprite(860,500,30,30)
w3.shapeColor="yellow"
wiring.addImage(wires)
fueling.addImage(fuel)
}

function draw(){
background("black")
if (keyDown("w")){
 player1.y= player1.y-5
}
if (keyDown("s")){
 player1.y= player1.y+5
}
if (keyDown("a")){
 player1.x= player1.x-5
}
if (keyDown("d")){
 player1.x= player1.x+5
}
if (player1.collide(electrical)){
 electrical.y=170
 electrical.scale=0.3
}
if (player1.collide(navigation)){
 navigation.x=200
 navigation.scale=0.3
}
if (player1.collide(engine)){
 engine.x=830
 engine.y=370
 engine.scale=0.42}

 if(mousePressedOver(w1)){
     wiring.visible=true
 }
 if(mousePressedOver(w2)){
     fueling.visible=true
 }
 if(mousePressedOver(w3)){
    divert.visible=true
 }
 drawSprites()
}