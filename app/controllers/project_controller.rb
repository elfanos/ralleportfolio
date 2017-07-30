class ProjectController < ApplicationController
  def index
    @state = "project"
    @numberOfProjects = 7;
  end
end
