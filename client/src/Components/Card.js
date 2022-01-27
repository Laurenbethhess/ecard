import React, { useState, useEffect } from "react";
import EditCard from "./EditCard";
import { useNavigate } from 'react-router-dom';
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";



    //if card.user.id === user_id, render card
    //same logic for update and delete

function Card( {card, onUpdateCard, onCardDelete, singleCard, handleSingleCard}) {
    // const [singleCard, setSingleCard] = useState('');
    const navigate = useNavigate();


    function handleclick() {
        fetch(`http://localhost:3000/cards/${card.id}`)
        // fetch(`https://my-ecards.herokuapp.com/cards/80`)
        .then(r => r.json())
        .then(singleCard => handleSingleCard(singleCard))
        navigate('/single_card')
      }

    function handleDeleteClick() {
        fetch(`http://localhost:3000/cards/${card.id}`, {
        // fetch(`https://my-ecards.herokuapp.com/cards/${card.id}`, {
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
            <button onClick={handleDeleteClick}>Delete Card</button>
            <br/>
            <>__________________________________________________</>
            <br/><br/>
        </div>


        </div>

        
    )

}

export default Card