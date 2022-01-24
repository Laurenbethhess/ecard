class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        render json: find_user
    end

    private

    def find_user
        User.find(params[:id])
    end
end
