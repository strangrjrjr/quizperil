class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.integer :number_right
      t.integer :number_wrong
      t.integer :total
      t.integer :user_id

      t.timestamps
    end
  end
end
