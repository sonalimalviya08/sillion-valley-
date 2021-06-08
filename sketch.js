var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game ,blim1,blimimg,backgroundimg,backgroundimg1,back,back1,back;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var sound,p,playerRank  ;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
 //car3_img = loadImage("images/car3.png");
 // car4_img = loadImage("images/car4.png");
 //ground = loadImage("images/ground.png");
blimimg=loadImage("imported piskel (9).gif")
backgroundimg=loadImage("images/background.jpg")
back=loadImage("images/backgro.jpg")
sound=loadSound("car sound.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 back1=createSprite(800,1300)
 back1.addImage(back)
 //sound.play()
}

function draw(){
  //if(backgroundimg)
background (backgroundimg)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
