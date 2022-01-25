import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import UserCards from "./Components/UserCards"
import CreateCard from "./Components/CreateCard"
import Login from "./Components/Login"
import Nav from "./Components/Nav"

function App() {
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
    .then(r => r.json())
    .then(cards => setCards(cards))
  }, [])

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  const user_id = user.id


  function handleAddCard(newCard) {
    setCards([...cards, newCard])
  }

 function handleDeleteCard(id) {
    const finalCards = cards.filter(card => card.id !== id)
    setCards(finalCards)
  }

  function handleUpdateCard(updatedCardObj) {
    const updatedCards = cards.map(card => {
      if (card.id === updatedCardObj.id) {
        return updatedCardObj;
      } else {
        return card;
      }
    });
    setCards(updatedCards);
  }

  // this is just for test
  // useEffect(() => {
  //   fetch("http://localhost:3000/users/13")
  //   .then(resp => resp.json())
  //   .then(user => setUser(user))
  // }, [])



  return (
    <div>
      <Nav user={user} onSetUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_cards" element={<UserCards user_id={user_id} cards={cards} onCardDelete={handleDeleteCard} onUpdateCard={handleUpdateCard}/>} />
        <Route path="/new_card" element={<CreateCard onAddCard={handleAddCard} user_id={user_id} />} />
      </Routes>
    </div>
  );
}

export default App;

