let buttonColors = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let level = 1
let userClickedPattern = []
let currentLevel = gamePattern.length
let started = false

let highscore = 0;
let currentScore = level;

let score = document.createElement("h2");
score.setAttribute("id","score1")


document.addEventListener('keydown', function (event) {
  if (!started) {
    if (event.key == 'a') {
      nextSequence()
      registerHandlers()

      started = true
    }
  }
})


function nextSequence() {
  score.remove();
  let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)]
  let sound1 = new Audio('sounds/' + randomChosenColor + '.mp3')
  sound1.play()
  gamePattern.push(randomChosenColor)
  document.querySelector('h1').innerText = 'Level ' + level
  //STYLE
  document.querySelector('#' + randomChosenColor).classList.add('pressed')
  setTimeout(function () {
    document.querySelector('#' + randomChosenColor).classList.remove('pressed')
  }, 200)
}

function registerHandlers() {
  for (let i = 0; i < document.querySelectorAll('.btn').length; i++) {
    document.querySelectorAll('.btn')[i].addEventListener('click', handler)
  }
}

function handler() {
  let userChosenColor = this.getAttribute('id')
  userClickedPattern.push(userChosenColor)
  //SOUND
  let sound1 = new Audio('sounds/' + userChosenColor + '.mp3')
  sound1.play()
  //STYLE
  document.querySelector('#' + userChosenColor).classList.add('pressed')
  setTimeout(function () {
    document.querySelector('#' + userChosenColor).classList.remove('pressed')
  }, 200)
  currentScore = level;
  if(currentScore>highscore){
    highscore = currentScore
  }
  checker()
}


function checker() {
  if (userClickedPattern[userClickedPattern.length-1] === gamePattern[userClickedPattern.length-1]) {
    if (userClickedPattern.length === gamePattern.length) {
      level++
      userClickedPattern = []
      setTimeout(nextSequence, 1000)
    }
  } 
  else{
    document.querySelector('h1').innerText =
      "Game Over. Press 'A' key to start again";
    score.innerText = "Current Highscore: "+ (highscore-1);
    document.body.appendChild(score);
    let error1 = new Audio('sounds/wrong.mp3')
    error1.play()
    document.querySelector('body').classList.add('game-over')
    setTimeout(function () {
      document.querySelector('body').classList.remove('game-over')
    }, 200)
    
    startOver()
  }
}

function startOver() {
  for (let i = 0; i < document.querySelectorAll('.btn').length; i++) {
    document.querySelectorAll('.btn')[i].removeEventListener('click', handler)
  }
  gamePattern = []
  userClickedPattern = []
  level = 1
  started = false
}