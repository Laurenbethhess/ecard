class CardSerializer < ActiveModel::Serializer
  attributes :id, :receiver, :message, :salutation, :closing
  has_one :template
  has_one :user
end
