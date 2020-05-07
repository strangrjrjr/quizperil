Rails.application.routes.draw do
  resources :questions, only: [:index]
  resources :users, only: [:index, :show, :create]
  resources :quizzes, only: [:index, :show, :create]
  get '/questions/:difficulty', to: 'questions#difficulty', as: 'difficulty'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
