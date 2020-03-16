const main = () => {}

let timer = 20
let minutes
let seconds
let gameClock

const startGame = () => {
  if (
    document.querySelector('.team-1-name').textContent === 'Team 1' ||
    document.querySelector('.team-2-name').textContent === 'Team 2'
  ) {
    // eslint-disable-next-line no-undef
    alert('Please pick both teams before starting the game.')
  } else if (
    document.querySelector('.team-1-name').textContent ===
    document.querySelector('.team-2-name').textContent
  ) {
    // eslint-disable-next-line no-undef
    alert('Please pick 2 different teams for this game.')

    document.querySelector('.team-1-name').textContent = 'Team 1'
    document.querySelector('.team-2-name').textContent = 'Team 2'

    document.querySelector('.team-1-input').style.visibility = 'visible'
    document.querySelector('.team-2-input').style.visibility = 'visible'
  } else {
    gameClock = setInterval(myTimer, 1000)

    document.querySelector('.start-game').innerHTML = 'Resume Game'
  }
}

const pauseGame = () => {
  clearInterval(gameClock)
}

const myTimer = () => {
  if (timer === 20) {
    updatePeriod()
  }

  minutes = parseInt(timer / 60, 10)
  seconds = parseInt(timer % 60, 10)

  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  document.querySelector('.timer').textContent = minutes + ':' + seconds

  --timer

  if (
    timer < 0 &&
    document.querySelector('.period-tracker').textContent === '3rd Period'
  ) {
    clearInterval(gameClock)
    document.querySelector('.period-tracker').textContent = 'Game Over!'
    checkForWin()
  } else if (timer < 0) {
    timer = 20
  }
}

const updatePeriod = () => {
  if (
    document.querySelector('.period-tracker').textContent ===
    'Waiting for game to start...'
  ) {
    document.querySelector('.period-tracker').textContent = '1st Period'
  } else if (
    document.querySelector('.period-tracker').textContent === '1st Period'
  ) {
    document.querySelector('.period-tracker').textContent = '2nd Period'
  } else if (
    document.querySelector('.period-tracker').textContent === '2nd Period'
  ) {
    document.querySelector('.period-tracker').textContent = '3rd Period'
  }
}

const updateTeamOneName = () => {
  // Update Team One component with typed team name
  document.querySelector('.team-1-name').textContent = document.querySelector(
    '.team-1-input'
  ).value

  document.querySelector('.team-1-input').value = 'Select Team One...'
  document.querySelector('.team-1-input').style.visibility = 'hidden'
}

const updateTeamTwoName = () => {
  // Update Team One component with typed team name
  document.querySelector('.team-2-name').textContent = document.querySelector(
    '.team-2-input'
  ).value

  document.querySelector('.team-2-input').value = 'Select Team Two...'
  document.querySelector('.team-2-input').style.visibility = 'hidden'
}

const addOneTeamOne = () => {
  document.querySelector('.team-1-score').textContent =
    parseInt(document.querySelector('.team-1-score').textContent) + 1
}

const subtractOneTeamOne = () => {
  // If score is greater than 0, subtract one point
  if (document.querySelector('.team-1-score').textContent > 0) {
    document.querySelector('.team-1-score').textContent =
      parseInt(document.querySelector('.team-1-score').textContent) - 1
  }
}

const addOneTeamTwo = () => {
  document.querySelector('.team-2-score').textContent =
    parseInt(document.querySelector('.team-2-score').textContent) + 1
}

const subtractOneTeamTwo = () => {
  // If score is greater than 0, subtract one point
  if (document.querySelector('.team-2-score').textContent > 0) {
    document.querySelector('.team-2-score').textContent =
      parseInt(document.querySelector('.team-2-score').textContent) - 1
  }
}

const checkForWin = () => {
  document.querySelector('.team-1-add-1-button').disabled = true
  document.querySelector('.team-1-subtract-1-button').disabled = true
  document.querySelector('.team-2-add-1-button').disabled = true
  document.querySelector('.team-2-subtract-1-button').disabled = true
  document.querySelector('.start-game').disabled = true
  document.querySelector('.pause-game').disabled = true

  if (
    document.querySelector('.team-1-score').textContent >
    document.querySelector('.team-2-score').textContent
  ) {
    document.querySelector('.victory-message').textContent =
      document.querySelector('.team-1-name').textContent + ' WIN!'
    document.querySelector('.team-1-score').style.color = 'green'
    document.querySelector('.team-2-score').style.color = 'red'
  } else if (
    document.querySelector('.team-2-score').textContent >
    document.querySelector('.team-1-score').textContent
  ) {
    document.querySelector('.victory-message').textContent =
      document.querySelector('.team-2-name').textContent + ' WIN!'
    document.querySelector('.team-1-score').style.color = 'red'
    document.querySelector('.team-2-score').style.color = 'green'
  } else {
    document.querySelector('.victory-message').textContent = 'Tie Game!'
    document.querySelector('.team-1-score').style.color = 'green'
    document.querySelector('.team-2-score').style.color = 'green'
  }
}

const resetGame = () => {
  document.querySelector('.team-1-score').textContent = '0'
  document.querySelector('.team-1-score').style.color = 'black'
  document.querySelector('.team-2-score').textContent = '0'
  document.querySelector('.team-2-score').style.color = 'black'
  document.querySelector('.victory-message').textContent = ''
  document.querySelector('.period-tracker').textContent =
    'Waiting for game to start...'
  document.querySelector('.timer').textContent = '00:00'

  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.start-game').disabled = false
  document.querySelector('.pause-game').disabled = false

  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'

  document.querySelector('.team-1-input').style.visibility = 'visible'
  document.querySelector('.team-2-input').style.visibility = 'visible'

  document.querySelector('.start-game').innerHTML = 'Start Game'

  timer = 20
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-1-input')
  .addEventListener('change', updateTeamOneName)

document
  .querySelector('.team-2-input')
  .addEventListener('change', updateTeamTwoName)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneTeamOne)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneTeamOne)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneTeamTwo)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneTeamTwo)

document.querySelector('.reset-button').addEventListener('click', resetGame)

document.querySelector('.start-game').addEventListener('click', startGame)

document.querySelector('.pause-game').addEventListener('click', pauseGame)
