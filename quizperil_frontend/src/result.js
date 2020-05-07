// style results elements
let quizBtn = document.getElementById('quiz_button')
quizBtn.classList.add('btn-large', 'waves-effect', 'waves-light', 'yellow', 'lighten-2')

let logoutBtn = document.getElementById('logout_button')
logoutBtn.classList.add('btn-large', 'waves-effect', 'waves-light', 'red', 'lighten-2')

// update metrics
function updateMetrics() {
    let rightContainer = document.getElementById('number_right')
    let wrongContainer = document.getElementById('number_wrong')
    let totalContainer = document.getElementById('total')
    let percentage = document.getElementById('percentage')

    rightContainer.innerText = `Correct: ${numRight}`
    wrongContainer.innerText = `Incorrect: ${numWrong}`
    totalContainer.innerText = `Total: ${numRight + numWrong}`
    // Percentage? Snarky comments?
    percentage.innerText = `Percentage: ${parseInt(numRight / (numRight + numWrong) * 100)}`
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
            user_id: `${userId}`,
            question_ids: question_ids
        })
    })
    .then(res => res.json())
    .then(user => displayPercentage(user))
}

// Percentage? Snarky comments?
function displayPercentage(user){
   let percentage = 0 
    if(user['total'] === 0){
        percentage = 0
    } else {
        percentage = Math.round((user['number_right']*100) / user['total'])
    }
    console.log(percentage)
    let banner = document.getElementById('percentage')
    banner.innerText = `${percentage} %`
    // change this to 50 in production
    if (percentage >= 50){
        wipeImage()
        displayDog()
    } else {
        wipeImage()
        displayCat()
    }
}

function wipeImage(){
    img = document.getElementById('image')
    img.innerHTML = ''
}

function displayCat(){
    catImg = document.createElement('img')
    catImg.classList.add('responsive-img')
    catImg.src = './src/imgs/angry-cat.jpeg'
    img = document.getElementById('image')
    img.appendChild(catImg)
}

function displayDog(){
    dogImg = document.createElement('img')
    dogImg.classList.add('responsive-img')
    dogImg.src = './src/imgs/happy-dog.jpg'
    dogImg.style.maxWidth = "250px";
    img = document.getElementById('image')
    img.appendChild(dogImg)
}

// retake button
document.getElementById('quiz_button').addEventListener('click', function() {
    toggleHidden(document.getElementById('results'))
    // reset counters
    numRight = 0
    numWrong = 0
    question_ids = []
    toggleHidden(selectionForm)
})

function name(params) {
    // restart timer
    let time = 60 * 1,
    display = document.querySelector('#time');
    startTimer(time, display);
}

// logout button
document.getElementById('logout_button').addEventListener('click', function() {

    // toggleResults()
    // toggleHidden(document.getElementById('timer_div'))
    // toggleHidden(document.getElementById('quiz_question'))
    // toggleHidden(document.getElementById('homepage'))
    toggleHidden(document.getElementById('results'))
    usernameBar.reset()
    toggleHidden(usernameBar)
    numRight = 0
    numWrong = 0
    userId = null

})

