Rails.application.routes.draw do
  root to: 'welcome#index'

  namespace :api, formats: :json do
    resources :quizzes, only: %i(index)
  end
end
