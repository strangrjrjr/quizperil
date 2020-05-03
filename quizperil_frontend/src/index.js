// Maybe we should make different js files and this folder and call them here?
const BASEURL = "http://localhost:3000/questions/"

function showQuestion() {
    fetch(BASEURL)
    .then(resp => resp.json())
    .then(console.log)
}

showQuestion()
