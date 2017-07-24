class PortfolioController < ApplicationController

  respond_to :html, :js, :json

  def index
    logger.info "Dont u render plzee let aboute"

    # if params[:genre]
    #   respond_to do |format|
    #     # format.html
    #     # format.json
    #     format.js
    #   end
    # end

  end
  def home
    logger.info "Dont u render plzee let aboute"
    @state = "home"
  end

  def show
  end

  def about_redirect
    logger.info "about sectio--------------------------"

    respond_to do |format|
      format.html
      format.js
    end
  end
  def about_me

  end
end

