class AddDueDateToCards < ActiveRecord::Migration[6.0]
  change_table :cards do |t|
    t.datetime :due_date
  end
end
