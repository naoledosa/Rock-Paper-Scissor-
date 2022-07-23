const playerScore = document.getElementById('player-score')
const hands = document.getElementById('hands')
const result = document.getElementById('result')
const buttons = document.querySelectorAll('.rpsButton')
const choices = ['Rock','Paper','Scissors']
const totalScore = {playerScore:0, computerScore:0} 

function getComputerChoice() {
  let index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

function getResult(playerChoice, computerChoice) {
  let result
  if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
    result = 1
  }else if (playerChoice === "Paper" && computerChoice === "Rock") {
    result = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    result = 1
  } else if(playerChoice === computerChoice){
    result = 0
  } else{
    result = -1
  }
  return result
}

function showResult(score, playerChoice, computerChoice) {
  if(score == 1){
    result.innerText = 'You Win!'
  } else if(score == 0){
    result.innerText = `It's a Draw!`
  } else {
    result.innerText = 'You Lose!'
  }
  
  hands.innerText = `${playerChoice} vs ${computerChoice}`
  playerScore.innerText = `Your Score: ${totalScore['playerScore']} Computer Score: ${totalScore['computerScore']}`
  
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] = score
  let index = choices.indexOf(computerChoice)
  totalScore['computerScore'] = index
  showResult(score, playerChoice, computerChoice)
}

function playGame() {

  buttons.forEach(bu => {
  bu.onclick = () => {
    onClickRPS(bu.value)
  }
})
 const end = document.getElementById('endGameButton')
 end.onclick = () => {
   endGame()
 } 
}

function endGame() {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()







