import React, { useEffect, useState } from "react";
import Card from "./Card";

// -This will map over all the cards attributes and render them on the page 
// -If it’s possible we should add download button for the card so users can send the card)
// 	-updateCard button/deleteCard button


function UserCards( {cards}) {

    const renderCards = cards.map(card => <Card card={card} key={card.id}/>)
    console.log(renderCards)


    return (
        <div className="render_cards">
            {renderCards}

        </div>

    )

}

export default UserCards