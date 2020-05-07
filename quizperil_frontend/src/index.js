// Maybe we should make different js files and this folder and call them here?
const USERURL = "http://localhost:3000/users"
let userId
let difficulty
let interval

usernameBar.addEventListener("submit", getUser)

function getUser(e) {
    e.preventDefault()
    toggleHidden(usernameBar)
    toggleHidden(selectionForm)

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
    .then(user => setUser(user))
}

function setUser(user) {
    userId = user.id
    selectionForm.addEventListener("submit", getSelectors)
}

function getSelectors(e) {
    e.preventDefault()
    debugger
    difficulty = "easy"//e.target.difficulty.value
    // interval = e.target.interval.value
    getData()
}

function getData() {
    const questDiv = document.getElementById("quiz_question")
    toggleHidden(questDiv)
    toggleHidden(timerDiv)
    fetchQuestions(startQuiz)
}

function startQuiz() {
    showQuestion()
}

function getElements(){
    let total = document.getElementById('total').innerText[1]
    console.log(total)
}

getElements()