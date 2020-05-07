# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Max of 50 questions per API call to opentdb
# Generate session token: https://opentdb.com/api_token.php?command=request
# Use session token in calls to get unique questions: https://opentdb.com/api.php?amount=10&token=YOURTOKENHERE
# Reset token: https://opentdb.com/api_token.php?command=reset&token=YOURTOKENHERE
# Tokens are deleted after 6 hours.
# JSON.parse(RestClient.get(url)) #=> ruby data structure 

# GENERATE USERS

5.times do 
    User.create(username: Faker::Esport.unique.player)
end

# GENERATE QUIZZES
10.times do
    Quiz.create(number_right: (1+ rand(10)), number_wrong: (1+rand(10)), total: 10, user_id: User.all.sample.id)
end

# GENERATE QUESTIONS

# # get session token
# sesh = JSON.parse(RestClient.get("https://opentdb.com/api_token.php?command=request"))
# session_token = sesh["token"]

# # make API call for questions
# results = JSON.parse(RestClient.get("https://opentdb.com/api.php?amount=50&token=#{session_token}"))
# puts "SESSION TOKEN #{session_token}"

# questions = results["results"]
# puts "RESULTS RECEIVED"

questions = JSON.parse(open("#{Rails.root}/db/questions.json").read)
questions.each do |question|
    # change question["question_type"] to question["type"] when using API
    quest = Question.create(category: question["category"], question_type: question["question_type"], difficulty: question["difficulty"], question: question["question"], correct_answer: question["correct_answer"], incorrect_answers: question["incorrect_answers"])
   
end

i = 2
while i <=5 do
    questions = JSON.parse(open("#{Rails.root}/db/questions#{i}.json").read)
    qarray = questions["results"]
    qarray.each do |question|
        # change question["question_type"] to question["type"] when using API
        quest = Question.create(category: question["category"], question_type: question["type"], difficulty: question["difficulty"], question: question["question"], correct_answer: question["correct_answer"], incorrect_answers: question["incorrect_answers"])
    end
    puts "SEEDED QUESTIONS #{i}"
    i += 1
end


# GENERATE QUIZQUESTIONS
100.times do 
    Quizquestion.create(quiz_id: Quiz.all.sample.id, question_id: Question.all.sample.id)
end

puts "DONE"

