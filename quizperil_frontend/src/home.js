document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  let options = {}
  var instances = M.Dropdown.init(elems, options);
});


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

let loginButton = document.createElement('button')
loginButton.innerText = 'Login'
loginButton.classList.add('btn-large', 'waves-effect', 'waves-light', 'yellow', 'lighten-2')
loginButton.id = 'startButton'

usernameBar.append(input, loginButton)
homeDiv.appendChild(usernameBar)

// ---------------new-form-for-time-and-difficulty-----

let selectionForm = document.createElement('form')
selectionForm.classList.add('container')
selectionForm.classList.add('hidden')
selectionForm.id = 'selectionForm'

// let inputTimer = document.createElement('input')
// inputTimer.type = 'text'
// inputTimer.id = 'inputTimer'
// inputTimer.name = 'inputTimer'
// inputTimer.placeholder = 'minutes you want to play'
// inputTimer.className = 'center-align'

// let inputDifficulty = document.createElement('input')
// inputDifficulty.type = 'text'
// inputDifficulty.id = 'inputDifficulty'
// inputDifficulty.name = 'inputDifficulty'
// inputDifficulty.placeholder = 'easy/medium/hard/all'
// inputDifficulty.className = 'center-align'

let difficulty
let interval

selectionForm.innerHTML = `
<a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Choose Minutes</a>

<!-- Dropdown Structure -->
<ul id='dropdown1' class='dropdown-content'>
  <li><a onclick="handleTimer()">1</a></li>
  <li><a onclick="handleTimer()">2</a></li>
  <li><a onclick="handleTimer()">3</a></li>
  <li><a onclick="handleTimer()">4</a></li>
  <li><a onclick="handleTimer()">5</a></li>
</ul>

<a class='dropdown-trigger btn' href='#' data-target='dropdown2'>Choose Difficulty</a>

<!-- Dropdown Structure -->
<ul id='dropdown2' class='dropdown-content'>
  <li><a onclick="handleDifficulty()">easy</a></li>
  <li><a onclick="handleDifficulty()">medium</a></li>
  <li><a onclick="handleDifficulty()">hard</a></li>
  <li><a onclick="handleDifficulty()">all</a></li>
</ul>`

let startButton = document.createElement('button')
startButton.innerText = 'Start'
startButton.classList.add('btn-large', 'waves-effect', 'waves-light', 'yellow', 'lighten-2')
startButton.id = 'startButton'

function handleTimer(){
    console.log(event.target.innerText)
    interval = event.target.innerText
}

function handleDifficulty() {
    console.log(event.target.innerText)
    difficulty = event.target.innerText
}

selectionForm.append(startButton)
homeDiv.appendChild(selectionForm)
