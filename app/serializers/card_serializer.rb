class CardSerializer < ActiveModel::Serializer
  attributes :id, :receiver, :message
  has_one :template
  has_one :user
end
