import React, {  } from "react";

function SingleCard( {singleCard}) {

    return (
        <div className="top">
            <div className={singleCard.template.classname}>
                <div className="message_render">
                    <div>{singleCard.salutation} {singleCard.receiver},</div>
                    <br/>
                    <div>{singleCard.message}</div>
                    <br/>
                    <div>{singleCard.closing}, {singleCard.user.first_name}</div>
                </div>
            </div>
        </div>
    )

}

export default SingleCard