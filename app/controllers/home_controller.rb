class HomeController < ApplicationController
  skip_action_callback  :authenticate_user!
  def index
  end
end
