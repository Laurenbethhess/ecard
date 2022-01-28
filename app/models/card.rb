class Card < ApplicationRecord
  belongs_to :template
  belongs_to :user

  validates :message, presence: true
  validates :salutation, presence: true
  validates :closing, presence: true
  validates :receiver, presence: true

  validates :message, length: { maximum: 80,
    too_long: "%{count} characters is the maximum allowed" }
end
