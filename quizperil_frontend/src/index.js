// Maybe we should make different js files and this folder and call them here?
const USERURL = "http://localhost:3000/users"
let userId
let difficulty
let interval

usernameBar.addEventListener("submit", setUser)

function setUser(e) {
    e.preventDefault()
    homeDiv.classList.toggle("hidden")

    difficulty = e.target.difficulty.value
    interval = e.target.interval.value

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
    .then(user => getData(user))
} 

function getData(user) {
    userId = user.id
    const questDiv = document.getElementById("quiz_question")
    toggleHidden(questDiv)
    toggleHidden(timerDiv)
    fetchQuestions(startQuiz)
}

function startQuiz() {
    showQuestion()
}
