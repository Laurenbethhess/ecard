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
        <div className="bg-red-200 sticky top-0 z-50 py-6">
            {/* <div className="nav_rectangle"></div>
            <div className="logout_button" onClick={handleLogoutClick}>
                Logout
            </div>
            <div className="welcome">Welcome {user.first_name}!</div>
            <div className="e_card">Welcome to ECard</div>
            <div className ="form_link"><Link to="/new_card">Create</Link></div>
            <div className="my_cards_link"><Link to="/my_cards">My Cards</Link></div>
            <div className="home_link"><Link to="/">Home</Link></div> */}
            <div className="flex justify-between text-lg font-mono font-semibold">
                <div className="px-2">
                    <p>Welcome to <i>LoveNotes</i> {user.first_name}!</p>
                </div>
                <div className="px-2 space-x-4 float-right ">
                    <Link to="/">Home</Link>
                    <Link to="/new_card">Create</Link>
                    <Link to="/my_cards">My Cards</Link>
                    {/* <Link to="/my_card"></Link> */}
                    <Link to="/logout" onClick={handleLogoutClick}>Logout</Link>
                </div>
            </div>
           
            
        </div>

    )

}

export default Nav