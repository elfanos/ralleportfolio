class AboutController < ApplicationController
  def index
    logger.info "le fucking state: #{params[:state]}"
    logger.info "yalla i index----------"
    #@state = params[:state]
    @state = "about"
  end

end
