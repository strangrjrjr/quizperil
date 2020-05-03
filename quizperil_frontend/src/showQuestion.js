const BASEURL = "http://localhost:3000/questions/"

function showQuestion() {
    fetch(BASEURL)
    .then(resp => resp.json())
    .then(console.log)
}
