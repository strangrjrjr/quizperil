class Question < ApplicationRecord
    has_many :quizquestions
    has_many :quizzes, through: :quizquestions
    serialize :incorrect_answers, Array
end
