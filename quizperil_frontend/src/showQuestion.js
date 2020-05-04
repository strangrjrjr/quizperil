const BASEURL = "http://localhost:3000/questions/"

const div = document.getElementById("quiz_question")
const h4 = document.getElementById("question")
const form = document.getElementById("answers")
const submit = document.getElementById("submit")

function fetchQuestions() {
    fetch(BASEURL)
    .then(resp => resp.json())
    .then(questions => showQuestion(questions))
}

function showQuestion(questions) {
    let question = questions[0]
    console.log(question)
    h4.innerHTML = question.question

    let inp = document.createElement("input")
    inp.type = "radio"
    inp.id = "correct"
    inp.name = "question"
    inp.value = "correct"

    let correct = document.createElement("label")
    correct.innerHTML = question.correct_answer
    correct.for = "correct"

    form.appendChild(inp)
    form.appendChild(correct)

    question.incorrect_answers.forEach((answer, id) => {
        let inp = document.createElement("input")
        inp.type = "radio"
        inp.id = id
        inp.name = "question"
        inp.value = id

        let ans = document.createElement("label")
        ans.innerHTML = answer
        ans.for = id

        form.appendChild(inp)
        form.appendChild(ans)
    })
}

fetchQuestions()
