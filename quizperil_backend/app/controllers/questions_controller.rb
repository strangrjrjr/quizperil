class QuestionsController < ApplicationController
  def index 
    questions = Question.all 
    render json: questions.to_json(:except => [:updated_at, :created_at])
  end

  def difficulty
    questions = Question.where("difficulty = ?", params[:difficulty])
    questions = Question.all if questions.length == 0
    render json: questions.to_json(:except => [:updated_at, :created_at])
  end
end
