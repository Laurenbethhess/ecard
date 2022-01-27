import React, { useState, useEffect } from "react";
import EditCard from "./EditCard";
import { useNavigate } from 'react-router-dom';

function Card( {card, onUpdateCard, onCardDelete, singleCard, handleSingleCard}) {
    const navigate = useNavigate();

    function handleclick() {
        // fetch(`http://localhost:3000/cards/${card.id}`)
        fetch(`https://my-ecards.herokuapp.com/cards/80`)
        .then(r => r.json())
        .then(singleCard => handleSingleCard(singleCard))
        navigate('/single_card')
      }

    function handleDeleteClick() {
        fetch(`http://localhost:3000/cards/${card.id}`, {
          method: "DELETE",
        })
        onCardDelete(card.id)
    }

    return (
        <div onClick={handleclick}>
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
            <button className="bg-red-600 mt-4 p-1 font-semibold rounded-sm text-sm" onClick={handleDeleteClick}>Delete Card</button>
            <br/>
            <>__________________________________________________</>
            <br/><br/>
        </div>
        </div>

        
    )

}

export default Card