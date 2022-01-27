class TemplatesController < ApplicationController
    skip_before_action :authorize


    def index
        render json: Template.all
    end

    def show
        render json: find_template
    end

    private

    def find_template
        Template.find(params[:id])
    end
end
