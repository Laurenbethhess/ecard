import React, {  } from "react";
import Card from "./Card";

// need to add functionality so when you click on card it brings you to a page
// that fetches and renders that specific card (:show)

// -If it’s possible we should add download button for the card so users can send the card)
// on that rendered page

function UserCards( { cards, onCardDelete, onUpdateCard, user_id }) {

    
    const userCards = cards.filter(card => card.user.id === user_id)

    const userRenderedCards = userCards.map(card => <Card card={card} key={card.id} onCardDelete={onCardDelete} onUpdateCard={onUpdateCard} user_id={user_id} />)

    return (
        <div className="home_user_cards_background">
            <br/>
            <div className="render_cards">
                {userRenderedCards}
            </div>
        </div>
    )

}

export default UserCards