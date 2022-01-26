import React, { } from "react";
import { Link } from "react-router-dom";

function Nav( {user, onSetUser}) {

    function handleLogoutClick() {
        fetch("https://my-ecards.herokuapp.com/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onSetUser(null);
            }
        });
    }

    return (
        <div className="card">
            <div className="nav_rectangle"></div>
            <div className="logout_button" onClick={handleLogoutClick}>
                Logout
            </div>
            <div className="welcome">Welcome {user.first_name}!</div>
            <div className="e_card">Welcome to ECard</div>
            <div className ="form_link"><Link to="/new_card">Create</Link></div>
            <div className="my_cards_link"><Link to="/my_cards">My Cards</Link></div>
            <div className="home_link"><Link to="/">Home</Link></div>

            

        </div>

    )

}

export default Nav