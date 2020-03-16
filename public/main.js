const main = () => {}

const updatePeriod = () => {
  if (document.querySelector('.period-tracker').textContent === 'Period: 1st') {
    document.querySelector('.period-tracker').textContent = 'Period: 2nd'
  } else if (
    document.querySelector('.period-tracker').textContent === 'Period: 2nd'
  ) {
    document.querySelector('.period-tracker').textContent = 'Period: 3rd'
    document.querySelector('.update-period').disabled = true
  }
}

const updateTeamOneName = () => {
  // Update Team One component with typed team name
  document.querySelector('.team-1-name').textContent = document.querySelector(
    '.team-1-input'
  ).value

  document.querySelector('.team-1-input').value = ''
}

const updateTeamTwoName = () => {
  // Update Team One component with typed team name
  document.querySelector('.team-2-name').textContent = document.querySelector(
    '.team-2-input'
  ).value

  document.querySelector('.team-2-input').value = ''
}

const addOneTeamOne = () => {
  // If score is less than 21, add one point
  if (document.querySelector('.team-1-score').textContent < 21) {
    document.querySelector('.team-1-score').textContent =
      parseInt(document.querySelector('.team-1-score').textContent) + 1
  }
  checkForWin()
}

const subtractOneTeamOne = () => {
  // If score is greater than 0, subtract one point
  if (document.querySelector('.team-1-score').textContent > 0) {
    document.querySelector('.team-1-score').textContent =
      parseInt(document.querySelector('.team-1-score').textContent) - 1
  }
}

const addOneTeamTwo = () => {
  // If score is less than 21, add one point
  if (document.querySelector('.team-2-score').textContent < 21) {
    document.querySelector('.team-2-score').textContent =
      parseInt(document.querySelector('.team-2-score').textContent) + 1
  }
  checkForWin()
}

const subtractOneTeamTwo = () => {
  // If score is greater than 0, subtract one point
  if (document.querySelector('.team-2-score').textContent > 0) {
    document.querySelector('.team-2-score').textContent =
      parseInt(document.querySelector('.team-2-score').textContent) - 1
  }
}

const checkForWin = () => {
  if (
    document.querySelector('.team-1-score').textContent === '21' ||
    document.querySelector('.team-2-score').textContent === '21'
  ) {
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true

    if (document.querySelector('.team-1-score').textContent === '21') {
      document.querySelector('.victory-message').textContent =
        document.querySelector('.team-1-name').textContent + ' WIN!'
      document.querySelector('.team-1-score').style.color = 'green'
      document.querySelector('.team-2-score').style.color = 'red'
    } else if (document.querySelector('.team-2-score').textContent === '21') {
      document.querySelector('.victory-message').textContent =
        document.querySelector('.team-2-name').textContent + ' WIN!'
      document.querySelector('.team-1-score').style.color = 'red'
      document.querySelector('.team-2-score').style.color = 'green'
    }
  }
}

const resetGame = () => {
  document.querySelector('.team-1-score').textContent = '0'
  document.querySelector('.team-1-score').style.color = 'black'
  document.querySelector('.team-2-score').textContent = '0'
  document.querySelector('.team-2-score').style.color = 'black'
  document.querySelector('.victory-message').textContent = ''
  document.querySelector('.period-tracker').textContent = 'Period: 1st'

  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.update-period').disabled = false
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)

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

document.querySelector('.update-period').addEventListener('click', updatePeriod)

document.querySelector(('.team-1-input')
.addEventListener('onchange', updateTeamOneName)