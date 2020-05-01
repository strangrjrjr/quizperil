# quizperil
Trivia Against The Clock!

## User Stories

- As a user, I should be able to login via username
- Select a time interval for quiz
- Take quiz as fast as possible
- Get visual feedback immediately upon answering (indicate correct answer?)
- View running timer (use visual feedback to add urgency)
- View results with metrics
- Choose quiz by category (stretch)
- Bonus for a good score (<80%?)
- Snarky feedback for poor scores?

## Models

- User
    - id
    - username

- Game
    - id
    - number_right
    - number_wrong
    - total

- Question
    - id
    - category
    - type
    - difficulty
    - question
    - correct_answer
    - incorrect_answers []

## Routes

- '/' -> homepage/login
- '/quiz' -> main quiz page
- '/result' -> end of game page and button to retake?

## **TODO**

- Build rails backend (setup custom routes, serialize array of incorrect answers, seed db)
- Create HTML pages (home, quiz, result)
