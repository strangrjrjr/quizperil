
const QUIZURL = "http://localhost:3000/quizzes"

// Hide gameplay elements
let quizQuestion = document.getElementById('quiz_question')
quizQuestion.classList.toggle('hidden')

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

document.body.appendChild(resultsContainer)

// wrap in method to fire when timer expires
function quizPost() {
    // post fetch to put results in db
    // should I make this a patch? where to generate quiz?
    fetch(QUIZURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({number_right: `${num_right}`, number_wrong: `${num_wrong}`, total: `${total}`, user_id: `${user_id}`})
    })
    .then(res => res.json())
    .then(json => console.log(json))
}


// Percentage? Snarky comments?

// Button to start new quiz
let quizBtn = document.createElement('button')
quizBtn.id = "quiz_button"
quizBtn.innerText = "Start a new quiz!"
document.body.appendChild(quizBtn)

quizBtn.addEventListener('click', function() {
    // toggle results off
    resultsContainer.classList.toggle('hidden')
    
    // toggle button off
    quizBtn.classList.toggle('hidden')

    // toggle quiz form on
    quizQuestion.classList.toggle('hidden')

    // restart timer?
})



