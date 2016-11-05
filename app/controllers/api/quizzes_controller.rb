class Api::QuizzesController < ApplicationController
  before_action :set_quiz, only: %i(show update destroy)

  # XXX: because even if send X-CSRF-Token from client, it doesn't work well...
  protect_from_forgery except: %i(create delete)

  def index
    @quizzes = Quiz.all.order(id: :desc)
    render json: @quizzes
  end

  def show
    render json: @quiz
  end

  def create
    @quiz = Quiz.new(quiz_params)

    if @quiz.save
      render json: @quiz, status: :created
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  def update
    if @quiz.update(quiz_params)
      render json: @quiz, status: :ok
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @quiz.destroy

    head :no_content
  end

  private

  def set_quiz
    @quiz = Quiz.find(params[:id])
  end

  def quiz_params
    params.permit(:content, :correct_answer)
  end
end
