class AddSalutationAndClosingToCards < ActiveRecord::Migration[6.1]
  def change
    add_column :cards, :salutation, :string
    add_column :cards, :closing, :string
  end
end
