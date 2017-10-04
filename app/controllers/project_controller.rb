class ProjectController < ApplicationController
  include ProjectInfo

  def index
    @state = "project"
    @project_state = "index"
    @numberOfProjects = 7
    logger.info "watt="
  end
  def info
    logger.info "watt="
    logger.info "watt= #{params[:state]}"
    @refresh = false
    if params[:state].nil?
      @refresh = true;
      logger.info "session= #{session[:state]}"
      if session[:state].nil?
        logger.info "inside stateishhhh nil --------------"
        @render_state = "onebas"
        @info_object = get_values("onebas")
        @next = @info_object[:next]
        @state = "project"
        @project_state = "show"
      else
        logger.info "inside session refresh!!! --------------"
        #@render_state = params[:state]
        @render_state = session[:state]
        @info_object = get_values(session[:state])
        logger.info "inside session refresh!!! --------------#{@info_object[:header]}"
        @session = session[:state]
        @state = "project"
        @project_state = "show"
      end
    else
      session[:state] = params[:state]
      @render_state = params[:state]
      logger.info "inside param --------------"
      @info_object = get_values(params[:state])
      logger.info "inside param --------------#{@info_object[:header]}"
      #@render_state = params[:state]
      @session = session[:state]
      @state = "project"
      @project_state = "show"
    end
  end
end
