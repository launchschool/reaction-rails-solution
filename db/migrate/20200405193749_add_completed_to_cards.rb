class AddCompletedToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :completed, :boolean, default: false
  end
end
