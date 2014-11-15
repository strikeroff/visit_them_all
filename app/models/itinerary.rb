class Itinerary < ActiveRecord::Base
  belongs_to :user
  has_many :stops, -> { order("order_number ASC") }

  scope :for_user, lambda { |user| where(user_id: user.id) }
end
