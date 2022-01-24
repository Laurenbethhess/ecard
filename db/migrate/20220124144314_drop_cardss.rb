class DropCardss < ActiveRecord::Migration[6.1]
  def up
    drop_table :cardss
  end
end
