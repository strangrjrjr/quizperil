
const QUIZURL = "http://localhost:3000/quizzes"

// Hide gameplay elements
let quizQuestion = document.getElementById('quiz_question')
quizQuestion.classList.toggle('hidden')

// update metrics
function updateMetrics() {
    let rightContainer = document.getElementById('number_right')
    let wrongContainer = document.getElementById('number_wrong')
    let totalContainer = document.getElementById('total')

    rightContainer.innerText = `Correct: ${numRight}`
    wrongContainer.innerText = `Incorrect: ${numWrong}`
    totalContainer.innerText = `Total: ${numRight + numWrong}`
    quizPost()
}

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
        body: JSON.stringify({
            numberRight: `${numRight}`,
            numberWrong: `${numWrong}`,
            total: `${total}`,
            user_id: `${user.id}`
        })
    })
    .then(res => res.json())
    .then(json => console.log(json))
}


// Percentage? Snarky comments?

document.getElementById('quiz_button').addEventListener('click', function() {
   
    toggleResults()

    // restart timer
    let twoMinutes = 60 * 2,
    display = document.querySelector('#time');
    startTimer(twoMinutes, display);
})



