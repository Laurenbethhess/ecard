class User < ApplicationRecord
    has_many :cards
    has_many :templates, through: :cards
end
