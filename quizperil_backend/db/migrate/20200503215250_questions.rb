class Questions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :category
      t.string :question_type
      t.string :difficulty
      t.string :question
      t.string :correct_answer
      t.string :incorrect_answers
      t.integer :quiz_id
    end
  end
end
