class CreateQuizzes < ActiveRecord::Migration[5.0]
  def change
    create_table :quizzes do |t|
      t.string :content, null: false
      t.string :correct_answer, null: false

      t.timestamps
    end
  end
end
