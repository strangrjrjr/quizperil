class QuizzesController < ApplicationController
  def index 
    quizzes = Quiz.all 
    render json: quizzes.to_json(:except => [:updated_at, :created_at])
  end

  def show 
    quiz = Quiz.find_by(id: params[:id])
    render json: quiz.to_json(:except => [:updated_at, :created_at])
  end
  
  def create
    newQuiz = Quiz.create(quiz_params)
    newQuiz.question_ids = params[:question_ids]
    render json: newQuiz.to_json(:except => [:updated_at, :created_at])
  end

  def update 
    quiz = Quiz.find_by(id: params[:id])
    quiz.update(quiz_params)
    render json: quiz.to_json(:except => [:updated_at, :created_at])
  end

  private 

  def quiz_params
    params.require(:quiz).permit(:number_right, :number_wrong, :total, :user_id, :question_ids)
  end 
end
