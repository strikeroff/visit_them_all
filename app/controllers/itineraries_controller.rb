class ItinerariesController < ApplicationController

  before_action :itinerary, only: [:update, :show]

  def index
    @itineraries = Itinerary.for_user(current_user).all
  end

  def new

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
end
