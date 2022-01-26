class User < ApplicationRecord
    has_many :cards, dependent: :destroy
    has_many :templates, through: :cards

    has_secure_password

    validates :username, presence: true, uniqueness: true
  
end
