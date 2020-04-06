class AddUserIdToBoards < ActiveRecord::Migration[6.0]
  add_column :boards, :user_id, :integer, nil: false
end
