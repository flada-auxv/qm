class CreateQuizzes < ActiveRecord::Migration[5.0]
  def change
    create_table :quizzes do |t|
      t.string :content
      t.string :correct_answer

      t.timestamps
    end
  end
end
