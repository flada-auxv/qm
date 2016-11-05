class QuizSerializer < ActiveModel::Serializer
  attributes :id, :content
  attribute :correct_answer, key: :correctAnswer
end
