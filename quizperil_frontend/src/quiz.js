const QUESTURL = "http://localhost:3000/questions/"

const h4 = document.getElementById("question")
const form = document.getElementById("answers")
let questionList = []
let numRight = 0
let numWrong = 0

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
    let div = document.createElement('div')
    div.className = "button-div"
    let submit = document.createElement("button")
    submit.type = "submit"
    submit.className = "btn waves-effect waves-light"
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
        numRight++
        console.log(`Correct! ${numRight}`)
    } else {
        numWrong++
        console.log(`Incorrect! ${numWrong}`)
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

// -------------
// TIMER SECTION
// -------------

let head = document.getElementById('head')
let timerDiv = document.createElement('div')
timerDiv.id = 'timer_div'
let timeSpan = document.createElement('span')
timeSpan.id = 'time'
timeSpan.classList.add('teal', 'lighten-3')
let milliSpan = document.createElement('span')
milliSpan.id = 'millispan'
milliSpan.classList.add('teal', 'lighten-3')

timerDiv.appendChild(timeSpan)
timerDiv.appendChild(milliSpan)

head.appendChild(timerDiv)

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

        if (--timer < 0) {
            // functions to run on timer expiration
            clearInterval(run)
            updateMetrics()
            toggleResults()
            return
        }
    }, 1000);
}

function toggleResults() {

    // toggle timer
    document.getElementById('timer_div').classList.toggle('hidden')
    // toggle results view
    document.getElementById('results').classList.toggle('hidden')
    // toggle quiz form 
    document.getElementById('quiz_question').classList.toggle('hidden')
}
// start timer on start button click
startButton.onclick = function () {
    let time = 60 * 1,
    display = document.querySelector('#time');
    startTimer(time, display);
};
// -----------------
// END TIMER SECTION
// -----------------
