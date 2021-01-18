function dicePlay(){
  let randomNumber1 = Math.floor(Math.random()*6)+1;
  let randomNumber2 = Math.floor(Math.random()*6)+1;

  let firstDiceIMG = document.querySelector(".img1");
  let secondDiceIMG = document.querySelector(".img2");
  let title = document.querySelector("h1");

  firstDiceIMG.src = "images/dice"+randomNumber1+".png";
  secondDiceIMG.src = "images/dice"+randomNumber2+".png";
  if(randomNumber1 > randomNumber2){
    title.innerText = "Player 1 Wins!";
  }
  else if( randomNumber2 > randomNumber1){
    title.innerText ="Player 2 Wins!";
  }
  else if (randomNumber2 === randomNumber1){
    title.innerText = "Draw!";
  }

}

