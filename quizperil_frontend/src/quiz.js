const QUESTURL = "http://localhost:3000/questions/"

const h4 = document.getElementById("question")
const form = document.getElementById("answers")
let questionList = []

function fetchQuestions(method) {
    fetch(QUESTURL)
    .then(resp => resp.json())
    .then(questions => {
        questionList = questions
        method()
    })
}

function showQuestion() {
    // debugger
    let question = questionList.pop()
    form.innerHTML = ""
    
    h4.innerHTML = question.question

    let inputs = []

    let p = document.createElement("p")
    p.innerHTML = `
        <label>
        <input type="radio" id="correct" name="question" value="correct">
        <span>${question.correct_answer}</span>
        </label>
    `
    inputs.push(p)

    question.incorrect_answers.forEach((answer, id) => {
        let p = document.createElement("p")
        p.innerHTML = `
            <label>
            <input type="radio" id="${id}" name="question" value="${id}">
            <span class=“black-text”>${answer}</span>
            </label>
        `
        inputs.push(p)
    })

    shuffle(inputs)

    inputs.forEach(p => form.appendChild(p))

    let submit = document.createElement("button")
    submit.type = "submit"
    submit.className = "btn waves-effect waves-light"
    submit.name = "action"
    submit.innerHTML = "Submit"
    
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
    if (true) {
        showQuestion()
    }
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};
