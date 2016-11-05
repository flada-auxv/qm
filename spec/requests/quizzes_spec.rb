require 'rails_helper'

describe 'quizzes' do
  describe 'GET /quizzes' do
    before do
      create(:quiz, content: '1 + 1', correct_answer: '2')
      create(:quiz, content: 'oh', correct_answer: 'yeah')
    end

    before do
      get '/api/quizzes'
    end

    it 'listing all quizzes' do
      expect(response).to be_success
      expect(response.body).to be_json_including([
        {'content' => 'oh', 'correctAnswer' => 'yeah'},
        {'content' => '1 + 1', 'correctAnswer' => '2'}
      ])
    end
  end
end
