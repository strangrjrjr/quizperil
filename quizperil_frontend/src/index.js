// Maybe we should make different js files and this folder and call them here?
const USERURL = "http://localhost:3000/users"
let userId

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
    getData()
}

function getData() {
    const questDiv = document.getElementById("quiz_question")
    toggleHidden(selectionForm)
    toggleHidden(questDiv)
    toggleHidden(timerDiv)
    fetchQuestions(startQuiz)
}

function startQuiz() {
    showQuestion()
}

function getElements(){
    let total = document.getElementById('total').innerText[1]
}

getElements()