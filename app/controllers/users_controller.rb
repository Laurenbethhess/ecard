class UsersController < ApplicationController
    skip_before_action :authorize, only: :create


    def index
        render json: User.all
    end

    def show
        # render json: find_user
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def create
    #     @user = User.new(user_params)
    
    #     respond_to do |format|
    #       if @user.save
    #         # Tell the UserMailer to send a welcome email after save
    #         UserMailer.with(user: @user).welcome_email.deliver_later
    
    #         format.html { redirect_to(@user, notice: 'User was successfully created.') }
    #         format.json { render json: @user, status: :created, location: @user }
    #       else
    #         format.html { render action: 'new' }
    #         format.json { render json: @user.errors, status: :unprocessable_entity }
    #       end
    #     end
    #   end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :first_name, :last_name)
      end
end
