class Template < ApplicationRecord
    has_many :cards, dependent: :destroy
    has_many :users, through: :cards
end
