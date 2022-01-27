import './App.css';
import './index.css'
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import UserCards from "./Components/UserCards"
import CreateCard from "./Components/CreateCard"
import Login from "./Components/Login"
import Nav from "./Components/Nav"
import SingleCard from './Components/SingleCard';

function App() {
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [singleCard, setSingleCard] = useState(
    {
      id: 88,
      receiver: "",
      message: "",
      salutation: "",
      closing: "",
      template: {
        id: 1,
        classname: "happy_birthday"
      },
      user: {
        id: 13,
        username: "Caris",
        first_name: "Caris",
        last_name: "Hess-Boyle"
      }
    }
  )

  useEffect(() => {
    fetch('https://my-ecards.herokuapp.com/cards')
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

  if (!user) return <Login onLogin={setUser} />
  
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

  return (
    <div>
      <Nav user={user} onSetUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_cards" element={<UserCards user_id={user_id} cards={cards} onCardDelete={handleDeleteCard} onUpdateCard={handleUpdateCard} handleSingleCard={setSingleCard} singleCard={singleCard} />} />
        <Route path="/new_card" element={<CreateCard onAddCard={handleAddCard} user_id={user_id} />} />
        <Route path="/single_card" element={<SingleCard singleCard={singleCard} />} />
      </Routes>
    </div>
  );
}

export default App;



