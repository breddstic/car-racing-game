var database;
var form, player, game
var gameState = 0
var playerCount = 0
var allPlayers
var car1,car2, car3, car4, cars
var trackImg
var c1, c2, c3, c4
var bg;


function preload(){
c1 = loadImage ("car1.png")
c2 = loadImage ("car2.png")
c3 = loadImage ("car3.png")
c4 = loadImage ("car4.png")
trackImg = loadImage ("track.jpg")
bg = loadImage ("bg.jpg")
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth, displayHeight);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  
  if(playerCount === 4){
    game.updateState(1)
  }
  if (gameState === 1){
    clear()
    game.play()
  }

  if (gameState === 2){
    game.end()
  }
}