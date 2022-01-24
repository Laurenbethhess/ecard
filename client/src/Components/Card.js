import React, { useEffect, useState } from "react";

// -this will be the formula for rendering an individual card
// -basically example but can use props instead of fetching in this component

function Card( {card}) {
    const [template, setTemplate] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/templates/${card.template.id}`)
        .then(resp => resp.json())
        .then(template => setTemplate(template))
      }, [])

    return (
        <div className={card.template.classname}>
            <div className="message_render">
            <div>{card.salutation} {card.receiver},</div>
            <div>{card.message}</div>
            <div>{card.closing}, {card.user.first_name}</div>   
            </div>
        </div>
        
    )

}

export default Card