import React, { useEffect, useState } from "react";
import EditCard from "./EditCard";

// need to add edit button/deleteCard button

function Card( {card, onUpdateCard, onCardDelete}) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/cards/${card.id}`, {
          method: "DELETE",
        })
        onCardDelete(card.id)
    }

    return (
        <div>
        <div className={card.template.classname}>
            <div className="message_render">
                <div>{card.salutation} {card.receiver},</div>
                <div>{card.message}</div>
                <div>{card.closing}, {card.user.first_name}</div>
            </div>
        </div>
        <div className="form_edit_rectangle">
            <EditCard onUpdateCard={onUpdateCard} card={card}/>
            <button onClick={handleDeleteClick}>Delete Card</button>
            <br/>
            <>__________________________________________________</>
            <br/><br/>
        </div>


        </div>

        
    )

}

export default Card