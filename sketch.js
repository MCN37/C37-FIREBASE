var canvas,backgroundImg;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var database;

var form,player,game;

function setup(){
    database = firebase.database();
    createCanvas(400,400);

    game = newGame();
    game.getState();
    game.start();
   
}

function draw(){


    drawSprites();
    

}
