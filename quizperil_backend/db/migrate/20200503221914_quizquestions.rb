class Quizquestions < ActiveRecord::Migration[6.0]
  def change
    create_table :quizquestions do |t|
      t.integer :quiz_id
      t.integer :question_id
    end
  end
end
