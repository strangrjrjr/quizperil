// import {num_right, num_wrong, total} from './quiz.js';


// Hide gameplay elements
document.getElementById('quiz_question').style.display = "none"
document.getElementById('question').style.display = "none"
document.getElementById('answers').style.display = "none"

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



