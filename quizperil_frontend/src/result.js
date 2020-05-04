// import {user_id, num_right, num_wrong, total} from './quiz.js';



// Hide gameplay elements
let quizQuestion = document.getElementById('quiz_question')
quizQuestion.style.display = "none"
let question = document.getElementById('question')
question.style.display = "none"
let answers = document.getElementById('answers')

// Create result elements
let resultsContainer = document.createElement('div')
resultsContainer.id = "results"


let rightContainer = document.createElement('p')
rightContainer.id = "number_right"
rightContainer.innerText = `Correct: ${num_right}`

let wrongContainer = document.createElement('p')
wrongContainer.id = "number_wrong"
wrongContainer.innerText = `Incorrect: ${num_wrong}`

let totalContainer = document.createElement('p')
totalContainer.id = "total"
totalContainer.innerText = `Total: ${total}`

resultsContainer.append(rightContainer, wrongContainer, totalContainer)

document.append(resultsContainer)


// Percentage? Snarky comments?

// Button to start new quiz
let quizBtn = document.createElement('button')
quizBtn.id = "quiz_button"

quizBtn.addEventListener('click', function() {
    // toggle results off
    resultsContainer.style.display = "none"

    // toggle quiz form on
    quizQuestion.style.display = "block"
    question.style.display = "block"
    answers.style.display = "block"

    // fetch post to Quiz to create new quiz?
    fetch('http://localhost:3000/quizzes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(user_id)
    })
})



