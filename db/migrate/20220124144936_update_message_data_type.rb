class UpdateMessageDataType < ActiveRecord::Migration[6.1]
  def change
    change_column :cards, :message, :text
  end
end
