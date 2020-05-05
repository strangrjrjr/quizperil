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
let startButton = document.createElement('button')
startButton.innerText = 'Start'
startButton.classList.add('btn-large', 'waves-effect', 'waves-light', 'yellow', 'lighten-2')
startButton.id = 'startButton'
usernameBar.append(input, startButton)
homeDiv.appendChild(usernameBar)
