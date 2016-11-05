class Api::QuizzesController < ApplicationController
  def index
    @quizzes = Quiz.all.order(id: :desc)
    render json: @quizzes
  end
end
