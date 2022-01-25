class UsersController < ApplicationController
    skip_before_action :authorize, only: :create


    def index
        render json: User.all
    end

    def show
        render json: find_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :first_name, :last_name)
      end
end
