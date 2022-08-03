var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var png = "DiceGame/images/dice" + randomNumber1 + ".png";
var png2 = "DiceGame/images/dice" + randomNumber2 + ".png";

document.querySelector("img.img1").srcset = png;
document.querySelector("img.img2").srcset = png2;

if(randomNumber1>randomNumber2){
    winningTitle = "Player 1 Wins!";}
else if(randomNumber1< randomNumber2){
    winningTitle = "Player 2 Wins!";}
else{
  winningTitle = "It's a tie!";
}

document.querySelector("h1").innerHTML = winningTitle;
