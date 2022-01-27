import React, {  } from "react";

// -map over each of the templates to create thumbnails of each template at top


function SingleCard( {card}) {

    return (
        <div className="top">
            <div className={card.template.classname}>
                <div className="message_render">
                    <div>{card.salutation} {card.receiver},</div>
                    <br/>
                    <div>{card.message}</div>
                    <br/>
                    <div>{card.closing}, {card.user.first_name}</div>
                </div>
            </div>
        </div>
        

    )

}

export default SingleCard