class UsersController < ApplicationController
  def index 
    users = User.all 
    render json: users.to_json(:except => [:updated_at, :created_at])
  end

  def show 
    user = User.find_by(id: params[:id])
    render json: user.to_json(:except => [:updated_at, :created_at])
  end

  def create
    user = User.find_or_create_by(set_params)
    render json: user.to_json(:except => [:updated_at, :created_at])
  end

  private

  def set_params
    params.require(:user).permit(:username)
  end
end

