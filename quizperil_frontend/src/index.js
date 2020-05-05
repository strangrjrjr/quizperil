// Maybe we should make different js files and this folder and call them here?
const USERURL = "http://localhost:3000/users"

usernameBar.addEventListener("submit", setUser)

function setUser(e) {
    e.preventDefault()
    homeDiv.classList.toggle("hidden")

    fetch(USERURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: `${e.target.username.value}`
        })
    })
    .then(response => response.json())
    .then(user => startQuiz(user))
} 

function startQuiz(user) {
    console.log(user)
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
      <button class="submit-question container black-text btn-large yellow lighten-2 waves-effect waves-light" type="submit" name="action">Submit</button>
      </form>
    </div>`
}
