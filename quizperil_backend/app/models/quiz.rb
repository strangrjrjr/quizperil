class Quiz < ApplicationRecord
    belongs_to :user
    has_many :quizquestions
    has_many :questions, through: :quizquestions
end
