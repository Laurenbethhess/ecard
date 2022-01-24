class DropUserss < ActiveRecord::Migration[6.1]
  def up
    drop_table :userss
  end
end
