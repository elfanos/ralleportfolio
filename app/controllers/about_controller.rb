class AboutController < ApplicationController

  def index
    logger.info "jaman?  #{params[:state]}"
    @state = "about"
  end
end
