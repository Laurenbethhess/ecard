import React, { useState, useEffect } from "react";
import EditCard from "./EditCard";
import { useNavigate } from 'react-router-dom';

function Card( {card, onUpdateCard, onCardDelete, handleSingleCard, singleCard}) {
    const navigate = useNavigate();

    function handleclick() {
        fetch(`https://my-ecards.herokuapp.com/cards/${card.id}`)
        .then(r => r.json())
        .then(singleCard => handleSingleCard(singleCard))
        navigate('/single_card')
      }

    function handleDeleteClick() {
        fetch(`https://my-ecards.herokuapp.com/cards/${card.id}`, {
          method: "DELETE",
        })
        onCardDelete(card.id)
    }

    return (
        <div>
            <p className="flex justify-center">click image to save</p>
            <div onClick={handleclick} className="flex justify-center">
            <div className={card.template.classname}>
                <div className="message_render">
                    <div>
                        <div>{card.salutation} {card.receiver},</div>
                        <div>{card.message}</div>
                        <div>{card.closing}</div>
                        <div>-{card.user.first_name}</div>
                    </div>
                </div>
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