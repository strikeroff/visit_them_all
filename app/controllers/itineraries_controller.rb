class ItinerariesController < ApplicationController

  before_action :itinerary, only: [:update, :show]
  before_action :set_ng_app

  def index
    @itineraries = Itinerary.for_user(current_user).all
  end

  def new
    @stops = [
      {
        id: 1,
        address: {
          street_line_1: "Tsentralnaya ul., 27",
          city: "Samara",
          state: "Samarskaya oblast'",
          zip: "443080",
          country: "RU",
          lat: 53.221263,
          lng: 50.194241
        },
        time: {
          expect_to_spend: "",
          open_hours: ""

        }
      },
      {
        id: 2,
        address: {
          street_line_1: " Moskovskoye shosse, 185А",
          city: "Samara",
          state: "Samarskaya oblast'",
          zip: "443087",
          country: "RU",
          lat: 53.248772,
          lng: 50.220729
        },
        time: {
          expect_to_spend: "",
          open_hours: ""

        }
      }
    ]
  end

  def create
    #replace with proper creation
    @itinerary = Itinerary.create(user: current_user)
    redirect_to itinerary_path(@itinerary)
  end

  def show

  end


  def itinerary
    @itinerary = Itinerary.find(params[:id])

  end

  def set_ng_app
    @ng_app = "itineraryBuilder"
  end
end
