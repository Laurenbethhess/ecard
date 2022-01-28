class Card < ApplicationRecord
  belongs_to :template
  belongs_to :user

  validates :message, presence: true

  validates :message, length: { maximum: 10,
    too_long: "%{count} characters is the maximum allowed" }
end
