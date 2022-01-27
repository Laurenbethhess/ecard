import React, {  } from "react";
import EditCard from "./EditCard";

    //if card.user.id === user_id, render card
    //same logic for update and delete

function Card( {card, onUpdateCard, onCardDelete, onClick}) {



    function handleDeleteClick() {
        fetch(`http://localhost:3000/cards/${card.id}`, {
          method: "DELETE",
        })
        onCardDelete(card.id)
    }

    return (
        <div onClick={onClick}>
        <div className={card.template.classname}>
            <div className="message_render">
                <div>{card.salutation} {card.receiver},</div>
                <br/>
                <div>{card.message}</div>
                <br/>
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