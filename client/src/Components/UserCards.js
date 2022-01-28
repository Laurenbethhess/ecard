import React, {  } from "react";
import Card from "./Card";

function UserCards( { cards, onCardDelete, onUpdateCard, user_id, onClick, handleSingleCard, singleCard }) {
    const userCards = cards.filter(card => card.user.id === user_id)
    const userRenderedCards = userCards.map(card => <Card card={card} key={card.id} onCardDelete={onCardDelete} onUpdateCard={onUpdateCard} user_id={user_id} onClick={onClick} handleSingleCard={handleSingleCard} singleCard={singleCard} />)

    return (
        <div className="home_background">
            <div className="flex justify-center">
                <h1 className="py-8 text-4xl font-mono font-bold italic m-4">My Cards</h1>
            </div>
            <div className="render_cards">
                {userRenderedCards}
            </div>
        </div>
        
    )
}

export default UserCards