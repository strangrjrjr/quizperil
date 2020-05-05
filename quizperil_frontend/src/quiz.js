const QUESTURL = "http://localhost:3000/questions/"

const h4 = document.getElementById("question")
const form = document.getElementById("answers")
let questionList = []
let numRight = 0
let numWrong = 0
const messageDiv = document.getElementById("modal")
const messageH2 = document.getElementById("message")

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

let head = document.getElementById('head')
let timerDiv = document.createElement('div')
let timeSpan = document.createElement('span')
timeSpan.id = 'time'
let milliSpan = document.createElement('span')
milliSpan.id = 'millispan'

timerDiv.appendChild(timeSpan)
timerDiv.appendChild(milliSpan)

head.appendChild(timerDiv)

// millisecond timer
// delay in milliseconds to keep browsers happy
const THROTTLE_AMOUNT = 10
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

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        countdown(1)
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = `TIMER:` + minutes + ":" + seconds + ":";
        if (--timer < 0) {
            // don't restart, run other functions
            timer = duration;
        }
    }, 1000);
}

// start timer on start button click
startButton.onclick = function () {
    let twoMinutes = 60 * 2,
    display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};
// -----------------
// END TIMER SECTION
// -----------------
