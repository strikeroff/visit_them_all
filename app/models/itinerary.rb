class Itinerary < ActiveRecord::Base
  belongs_to :user
  has_many :stops, -> { order("order_number ASC") }
end
