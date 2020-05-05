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

let quiz = document.getElementById('quiz_question')
    quiz.classList.toggle("hidden")
    quiz.innerHTML = `
    <div class="divider"></div>
      <div class="container" id="question-box">
      <h4 id="question">Which of the following was not one of "The Magnificent Seven"?</h4>
      <form id="answers">
      <!-- The answers, inputs with type="radio" -->
      <p>
        <label>    
        <input type="radio" id="correct" name="question" value="correct">
        <span class="black-text">Clint Eastwood</span>
        </label>
      </p>
      <p>
        <label>
        <input type="radio" id="0" name="question" value="0">
        <span class="black-text">Steve McQueen</span>
        </label>
      </p>
      <p>
        <label>    
        <input type="radio" id="1" name="question" value="1">
        <span class="black-text">Charles Bronson</span>
        </label>
      </p>
      <p>    
        <label>
        <input type="radio" id="2" name="question" value="2">
        <span class="black-text">Robert Vaughn</span>
        </label>
      </p>
      <button class=" black-text btn-large yellow lighten-2 waves-effect waves-light" type="submit" name="action">Submit</button>
      </form>
    </div>`