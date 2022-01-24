class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.references :template, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :receiver
      t.string :message

      t.timestamps
    end
  end
end
