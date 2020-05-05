
const QUIZURL = "http://localhost:3000/quizzes"

// Hide gameplay elements
let quizQuestion = document.getElementById('quiz_question')
quizQuestion.classList.toggle('hidden')

// update result elements
let rightContainer = document.getElementById('number_right')
rightContainer.innerText = `Correct: ${numRight}`

let wrongContainer = document.getElementById('number_wrong')
wrongContainer.innerText = `Incorrect: ${numWrong}`

let totalContainer = document.getElementById('total')
totalContainer.innerText = `Total: ${numRight + numWrong}`

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

quizBtn.addEventListener('click', function() {
    // toggle results off
    resultsContainer.classList.toggle('hidden')
    
    // toggle button off
    quizBtn.classList.toggle('hidden')

    // toggle quiz form on
    quizQuestion.classList.toggle('hidden')

    // restart timer?
})



