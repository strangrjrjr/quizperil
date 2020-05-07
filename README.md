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

## Mockups

[NinjaMock Renders](https://ninjamock.com/s/XJ89HGx)

## Models

- User

    has_many :quizzes

    has_many :questions

    has_many :questions, through: :quizzes

    - id
    - username

    ### Routes
    - show
    - create

- Quiz

    belongs_to :user

    has_many :quizquestions

    has_many :questions, through: :quizquestions

    - id
    - number_right
    - number_wrong
    - total
    - user_id

    ### Routes
    - show
    - create
    - update

- Question

    has_many :quizquestions

    has_many :quizzes, through: :quizquestions

    - id
    - category
    - question_type
    - difficulty
    - question
    - correct_answer
    - incorrect_answers []

    ### Routes
    - index

- QuizQuestion

    belongs_to :quiz

    belongs_to :question

    - id
    - quiz_id
    - question_id


## Routes

Single page app, default routing, but restricted actions

## Frontend

- Compartmentalize page via divs and ids
- Break work out into components like background, logo, formatting, etc
- Once MVP is reached, start working on JS effects/CSS

## TODO

[x] Build rails backend (create schema, API calls, serialize array of incorrect answers, seed db)

[x] Create HTML page template

[x] Create JS template

[x] Awesome logo created

[x] Work on mockups

[x] Color scheme Grey background, black text. Logo is main focus

[x] Standardize naming conventions

[x] Start page rendering separate JS files (login, quiz, result)

[x] Timer with milliseconds

[x] Start work on css

### MVP

[x] Timer ends -> go to results

[x] Create results elements in index.html

[x] Results makes POST to quiz db

[x] Indicate correct vs incorrect answers

[x] Results retake button functionality

[x] Results logout button & functionality

[x] Results process & display quiz results

[x] Add questions to QuizQuestion db (create array & push question id)

### Stretch

[x] Selectable timer interval

[x] Timer changes color/flashes after a certain interval

[] Selectable category (may be too difficult to parse)

[x] Selectable difficulty (easy, medium, hard)

[x] Add "Trivia against the clock!" to login
