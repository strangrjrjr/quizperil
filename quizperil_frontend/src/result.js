// style results elements
let quizBtn = document.getElementById('quiz_button')
quizBtn.classList.add('btn-large', 'waves-effect', 'waves-light', 'yellow', 'lighten-2')

let logoutBtn = document.getElementById('logout_button')
logoutBtn.classList.add('btn-large', 'waves-effect', 'waves-light', 'yellow', 'lighten-2')

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
    fetch(QUIZURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            number_right: `${numRight}`,
            number_wrong: `${numWrong}`,
            total: `${numRight + numWrong}`,
            user_id: `${userId}`
        })
    })
    .then(res => res.json())
    .then(json => console.log(json))
}


// Percentage? Snarky comments?

document.getElementById('quiz_button').addEventListener('click', function() {
    // question view
    toggleResults()
    // reset counters
    numRight = 0
    numWrong = 0
    // restart timer
    let time = 60 * 1,
    display = document.querySelector('#time');
    startTimer(time, display);
})

document.getElementById('logout_button').addEventListener('click', function() {

    toggleResults()
    toggleHidden(document.getElementById('quiz_question'))
    toggleHidden(document.getElementById('timer_div'))
    toggleHidden(document.getElementById('homepage'))
    document.getElementById('usernameBar').reset()
    numRight = 0
    numWrong = 0
    userId = null

})

