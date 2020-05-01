# quizperil

Trivia Against The Clock!

## Communication/Action Plan

- Group session to build database and rails backend
- Readme on master branch as single source of truth
- Use slack as asynchronous communication during weekend/off hours
- Rule set on repo to require 2 members to view pull request before merging to master

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
    has_many :quizzes
    has_many :questions
    has_many :questions, through: :quizzes
    - id
    - username

- Quiz
    belongs_to :user
    has_many :questions
    - id
    - number_right
    - number_wrong
    - total
    - user_id

- Question
    belongs_to :user
    belongs_to :quiz
    - id
    - category
    - type
    - difficulty
    - question
    - correct_answer
    - incorrect_answers []
    - user_id
    - quiz_id

## Routes

Single page app, default routing, but restricted actions (currently)

## Frontend

- Compartmentalize page via divs and ids
- Break work out into components like background, logo, formatting, etc
- Once MVP is reached, start working on JS effects/CSS

## TODO for this weekend

- Build rails backend (setup custom routes, serialize array of incorrect answers, seed db)
- Create HTML pages (home, quiz, result)
