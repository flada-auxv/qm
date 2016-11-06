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

    it 'listings all quizzes' do
      expect(response).to be_success
      expect(response.body).to be_json_including([
        {'content' => 'oh', 'correctAnswer' => 'yeah'},
        {'content' => '1 + 1', 'correctAnswer' => '2'}
      ])
    end
  end

  describe 'GET /quizzes/:id' do
    let!(:quiz) { create(:quiz, content: '1 + 1', correct_answer: '2') }

    before do
      get "/api/quizzes/#{quiz.id}"
    end

    it 'shows a quiz' do
      expect(response).to be_success
      expect(response.body).to be_json_as({'id' => quiz.id, 'content' => '1 + 1', 'correctAnswer' => '2'})
    end
  end

  describe 'POST /api/quizzes' do
    let(:content) { '1 + 1' }
    let(:correct_answer) { '2' }

    subject { post '/api/quizzes', params: {content: content, correct_answer: correct_answer} }

    it 'creates a quiz' do
      expect { subject }.to change { Quiz.count }.from(0).to(1)

      expect(response).to be_created
      expect(response.body).to be_json_as({'id' => Quiz.last.id, 'content' => '1 + 1', 'correctAnswer' => '2'})
    end

    context 'when content is empty' do
      let(:content) { '' }

      it 'does not create quiz' do
        expect { subject }.not_to change { Quiz.count }

        expect(response).to be_unprocessable
        expect(response.body).to be_json_as({'content' => ["can't be blank"]})
      end
    end
  end

  describe 'PATCH /api/quizzes/:id' do
    let(:content) { '1 + 1' }

    let!(:quiz) { create(:quiz, content: '1 - 1', correct_answer: '0') }

    subject { patch "/api/quizzes/#{quiz.id}", params: {content: content} }

    it 'updates a quiz' do
      expect { subject }.to change { quiz.reload.content }.from('1 - 1').to('1 + 1')

      expect(response).to be_ok
      expect(response.body).to be_json_as({'id' => quiz.id, 'content' => '1 + 1', 'correctAnswer' => '0'})
    end

    context 'when content is empty' do
      let(:content) { '' }

      it 'does not update quiz' do
        expect { subject }.not_to change { quiz.reload.content }

        expect(response).to be_unprocessable
        expect(response.body).to be_json_as({'content' => ["can't be blank"]})
      end
    end
  end

  describe 'DELETE /api/quizzes/:id' do
    let!(:quiz) { create(:quiz, content: '1 + 1', correct_answer: '2') }

    subject { delete "/api/quizzes/#{quiz.id}" }

    it 'deletes a quiz' do
      expect { subject }.to change { Quiz.count }.from(1).to(0)

      expect(response).to be_no_content
      expect(response.body).to be_empty
    end

    context 'when not found resource' do
      it 'does not update quiz' do
        delete "/api/quizzes/#{quiz.id + 1}"

        expect(response).to be_not_found
        expect(response.body).to be_json_as({'base' => ["Couldn't find Quiz with 'id'=#{quiz.id + 1}"]})
      end
    end
  end
end
