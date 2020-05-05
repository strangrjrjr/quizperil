const BASEURL = "http://localhost:3000/questions/"

const h4 = document.getElementById("question")
const form = document.getElementById("answers")

const fetchQuestions = function() {
    fetch(BASEURL)
    .then(resp => resp.json())
    .then(questions => showQuestion(questions))
}

function showQuestion(questions) {
    let question = questions.shift()
    
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

    let submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Submit"
    
    form.appendChild(submit)

    form.addEventListener("submit", submitAnswer)
}

function submitAnswer(e) {
    e.preventDefault()
    elements = e.target.elements
    let answer
    for(i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            answer = elements[i].value
        }
    }
    if (answer === "correct") {
        console.log("Correct!")
    } else {
        console.log("Incorrect!")
    }
    // debugger
}
