const QUESTURL = "http://localhost:3000/questions/"
const QUIZURL = "http://localhost:3000/quizzes"

const h4 = document.getElementById("question")
const form = document.getElementById("answers")
let questionList = []
let numRight = 0
let numWrong = 0
const messageDiv = document.getElementById("modal")
const messageH2 = document.getElementById("message")
const question_ids = []

function fetchQuestions(method) {
    fetch(QUESTURL)
    .then(resp => resp.json())
    .then(questions => {
        shuffle(questions)
        questionList = questions
        method()
    })
}

function showQuestion() {

    let question = questionList.pop()
    form.innerHTML = ""
    question_ids.push(question.id)
    
    h4.innerHTML = question.question

    if (question.question_type === "boolean") {
        booleanQuestion(question)
    } else {
        multipleQuestion(question)
    }
}

function booleanQuestion(question) {
    let correct = document.createElement("p")
    correct.innerHTML = `
        <label>
        <input type="radio" id="correct" name="question" value="correct">
        <span>${question.correct_answer}</span>
        </label>
    `
    let incorrect = document.createElement("p")
    incorrect.innerHTML = `
        <label>
        <input type="radio" id="incorrect" name="question" value="incorrect">
        <span>${question.incorrect_answers[0]}</span>
        </label>
    `
    if (question.correct_answer === "True") {
        form.appendChild(correct)
        form.appendChild(incorrect)
    } else {
        form.appendChild(incorrect)
        form.appendChild(correct)
    }
    createSubmit()
}

function multipleQuestion(question) {
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

    createSubmit()
}

function createSubmit() {
    let div = document.createElement('div')
    div.className = "button-div"
    let submit = document.createElement("button")
    submit.type = "submit"
    submit.className = "btn teal lighten-3 waves-effect waves-light"
    submit.name = "action"
    submit.id = "submit-button"
    submit.innerHTML = "Submit"
    div.appendChild(submit)
    form.appendChild(div)

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
        messageDiv.style.backgroundColor = "green"
        messageH2.innerText = "Correct!"
        console.log("Correct!")
        numRight++
    } else {
        messageDiv.style.backgroundColor = "maroon"
        messageH2.innerText = "Incorrect!"
        console.log("Incorrect!")
        numWrong++
    }
    toggleHidden(messageDiv)
    setTimeout(toggleHidden, 1000, messageDiv)
    if (true) {
        showQuestion()
    }
}

function toggleHidden(element) {
    element.classList.toggle("hidden")
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

// -------------
// TIMER SECTION
// -------------

let timerDiv = document.getElementById('timer_div')
let timeSpan = document.getElementById('time')
let milliSpan = document.getElementById('millispan')

// millisecond timer
// delay in milliseconds to keep browsers happy
const THROTTLE_AMOUNT = 5
function countdown(secs) {
    let milli = secs * (1000);
    let counter = setInterval(function() {
        if(milli <= 0) {
            clearInterval(counter);
            return
        }
        milli -= THROTTLE_AMOUNT;
        milliSpan.innerText = `${milli}`
    }, THROTTLE_AMOUNT);
}

// minute and second timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    let run = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        countdown(1)
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = `TIMER:` + minutes + ":" + seconds + ":";
        // add other time-based changes here
        if (timer < 10) {
            flashTimer(timer)
        }
        if (--timer < 0) {
            // functions to run on timer expiration
            clearInterval(run)
            updateMetrics()
            toggleResults()
            return
        }
    }, 1000);
}

function flashTimer(timer) {
    timeSpan.classList.remove('teal')
    timeSpan.classList.remove('lighten-3')
    timeSpan.classList.add('red')
    milliSpan.classList.remove('teal')
    milliSpan.classList.remove('lighten-3')
    milliSpan.classList.add('red')
    let flash = setInterval(function() {
        timeSpan.classList.toggle('red')
        milliSpan.classList.toggle('red')
        
    },200)
    if (timer < 0){
        clearInterval(flash)
    }
    
}

function toggleResults() {
  
    // toggle timer
    timerDiv.classList.toggle('hidden')

    // restyle timer
    timeSpan.classList.remove('red')
    timeSpan.classList.add('teal')
    timeSpan.classList.add('lighten-3')
    milliSpan.classList.remove('red')
    milliSpan.classList.add('teal')
    milliSpan.classList.add('lighten-3')
    // toggle results view
    document.getElementById('results').classList.toggle('hidden')
    // toggle quiz form 
    document.getElementById('quiz_question').classList.toggle('hidden')
}

// start timer on start button click
startButton.onclick = function () {
    let time = 60 * parseInt(document.getElementById('inputTimer').value),
    display = document.querySelector('#time');
    startTimer(time, display);
};
// -----------------
// END TIMER SECTION
// -----------------
