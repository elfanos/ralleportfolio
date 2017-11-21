class HomeController < ApplicationController
  include ProjectInfo
  def index
    @state = "home"
    @info_object = get_values("livingmaps")
  end
end
