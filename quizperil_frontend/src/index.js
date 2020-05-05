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
}
