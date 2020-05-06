
let homeDiv = document.getElementById('homepage')
let usernameBar = document.createElement('form')
usernameBar.classList.add('container')
usernameBar.id = 'usernameBar'

let input = document.createElement('input')
input.type = 'text'
input.id = 'input'
input.name = 'username'
input.placeholder = 'Please enter your username'
input.className = 'center-align'

// -----------slider-----------------
// let slider = document.createElement('p')
// slider.classList.add('range-field')
// let timeInput = document.createElement('input')
// timeInput.type = 'range' 
// timeInput.id = 'timer-time'
// timeInput.min = '1'
// timeInput.max = '5'
// slider.appendChild(timeInput)
// --------------------------------------

let inputTimer = document.createElement('input')
inputTimer.type = 'text'
inputTimer.id = 'inputTimer'
inputTimer.name = 'inputTimer'
inputTimer.placeholder = 'minutes you want to play'
inputTimer.className = 'center-align'

let inputDifficulty = document.createElement('input')
inputDifficulty.type = 'text'
inputDifficulty.id = 'inputDifficulty'
inputDifficulty.name = 'inputDifficulty'
inputDifficulty.placeholder = 'easy/medium/hard/all'
inputDifficulty.className = 'center-align'

let startButton = document.createElement('button')
startButton.innerText = 'Start'
startButton.classList.add('btn-large', 'waves-effect', 'waves-light', 'yellow', 'lighten-2')
startButton.id = 'startButton'
usernameBar.append(input, inputTimer,inputDifficulty, startButton)
homeDiv.appendChild(usernameBar)


