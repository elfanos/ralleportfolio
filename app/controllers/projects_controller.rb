class ProjectsController < ApplicationController
  respond_to  :js, :html, :json
  include ProjectInfo
  def index
    logger.info "in index lolol?"
    @state_info = false
    @state = "projects"
    @stateProject = "projects"
   # @info_object = get_values("onebas")
  end
  def living
    logger.info "in lalala living?"
    @state = "projects"
    @stateProject = "living"
    @info_object = get_values(params[:state])
    if @info_object.nil?
      logger.info "in lalala living? infoobjec nille-----"
      @info_object = get_values("livingmaps")
    end

  end
  def onebas
    @stateProject = "onebas"
    logger.info "in onebas==??...."
    @state = "projects"
    @info_object = get_values(params[:state])
    @info_object = get_values("onebas")
    if @info_object.nil?
      @info_object = get_values("onebas")
    end

  end
  def magazinos
    @stateProject = "magazinos"
    @state = "projects"
    @info_object = get_values(params[:state])
    if @info_object.nil?
      @info_object = get_values("magazinos")
    end
  end
  def lag
    @stateProject = "googleglass"
    @state = "projects"
    @info_object = get_values(params[:state])
    if @info_object.nil?
      @info_object = get_values("googleglass")
    end
  end
end
