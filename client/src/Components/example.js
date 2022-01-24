// import './App.css';
// import React, { useEffect, useState } from "react";

function App() {
  const [template, setTemplate] = useState('');
  const [user, setUser] = useState('');
  const [card, setCard] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/templates/1")
    .then(resp => resp.json())
    .then(template => setTemplate(template))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/users/1")
    .then(resp => resp.json())
    .then(user => setUser(user))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/cards/3")
    .then(resp => resp.json())
    .then(card => setCard(card))
  }, [])

  //example card - would have the form and the class name will automatically populate
  // add columns to table for salutation and sign-off
  // npm install react-to-pdf
  return (
    
    <div className={template.classname}>
      <div className="message_render">
        <div>{card.salutation} {card.receiver},</div>
        <div>{card.message}</div>
        <div>{card.closing}, {user.first_name}</div>   
      </div>

    </div>
  );
}

export default App;