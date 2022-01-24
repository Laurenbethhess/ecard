class CardsController < ApplicationController

    def index
        render json: Card.all
    end

    def show
        render json: find_card
    end

    def create
        card = Card.create!(card_params)
        render json: card, status: :created
    end

    def update
        card = find_card
        card.update(update_params)
        render json: card
    end

    def destroy
        find_card.destroy
        head :no_content
    end

    private

    def find_card
        Card.find(params[:id])
    end

    def card_params
        params.permit(:template_id, :user_id, :receiver, :message, :salutation, :closing)
    end

    def update_params
        params.permit(:receiver, :message, :salutation, :closing)
    end
end
