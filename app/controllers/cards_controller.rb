class CardsController < ApplicationController

    def index
        render json: Card.all
    end

    def show
        render json: find_card
    end

    private

    def find_card
        Card.find(params[:id])
    end
end
