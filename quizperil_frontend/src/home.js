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

// ---------------new-form-for-time-and-difficulty-----

let selectionForm = document.createElement('form')
selectionForm.classList.add('container')
selectionForm.id = 'selectionForm'

selectionForm.innerHTML = `
<a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Minutes</a>

<!-- Dropdown Structure -->
<ul id='dropdown1' class='dropdown-content'>
  <li><a onclick="handleFunc()">one</a></li>
  <li><a onclick="handleFunc()">two</a></li>
  <li><a onclick="handleFunc()">three</a></li>
  <li><a onclick="handleFunc()">four</a></li>
  <li><a onclick="handleFunc()">five</a></li>
</ul>

<a class='dropdown-trigger btn' href='#' data-target='dropdown2'>Difficulty</a>

<!-- Dropdown Structure -->
<ul id='dropdown2' class='dropdown-content'>
  <li><a href="#!">easy</a></li>
  <li><a href="#!">medium</a></li>
  <li><a href="#!">hard</a></li>
  <li><a href="#!">all</a></li>
</ul>`

homeDiv.appendChild(selectionForm)

function handleFunc(){
  console.log(event.target.innerText)
}