class RemoveQuizFromQuestion < ActiveRecord::Migration[6.0]
  def change
    remove_column :questions, :quiz_id
  end
end
