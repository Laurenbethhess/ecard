import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CreateCard( {onAddCard, user_id}) {
    const [receiver, setReceiver] = useState("")
    const [salutation, setSalutation] = useState("")
    const [message, setMessage] = useState("")
    const [closing, setClosing] = useState("")
    const [user, setUserId] = useState(user_id)
    const [template_id, setTemplateId] = useState("")
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault()
  
      fetch("https://my-ecards.herokuapp.com/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiver: receiver,
          salutation: salutation,
          message: message,
          closing: closing,
          user_id: user,
          template_id: template_id
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then(newCard => {
              onAddCard(newCard)
              setReceiver("")
              setSalutation("")
              setMessage("")
              setClosing("")
              setTemplateId("")
              setUserId(user_id)
              navigate('/my_cards');
            })
        } else {
          r.json().then((err) => setErrors(err.errors));  
        }
      });
    }
  
    return (
      
      <div className="form_background">
          <div className="rose_thumb">Roses are red</div>
          <div className="aqua_thumb">As cold as blue blazes</div>
          <div className="green_thumb">Green vibes only</div>
          <div className="yellow_thumb">I'm just mad about saffron</div>

          <div className="pt-6 flex justify-center">
            <form className="bg-green-200 shadow-md rounded px-8 pb-8 mb-4" onSubmit={handleSubmit}>
            <p className="font-semibold mt-4 flex justify-center">Create Your Card Here</p>
              <div className="bg-red-100 m-4">
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setTemplateId(e.target.value)}>
                  <option>Choose template</option>
                  <option value="1">Roses are red</option>
                  <option value="2">As cold as blue blazes</option>
                  <option value="3">Green vibes only</option>
                  <option value="4">I'm just mad about saffron</option>
                </select>
              </div>
              <div className="bg-red-100 m-4">
                <select 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setSalutation(e.target.value)}>
                    <option >Choose Greeting</option>
                    <option value="Greetings">Greetings</option>
                    <option value="Hello">Hello</option>
                    <option value="Hi">Hi</option>
                    <option value="Dear">Dear</option>
                </select>
              </div>
              <div className="bg-red-100 m-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="receiver"
                  autoComplete="off"
                  value={receiver}
                  placeholder="To"
                  onChange={(e) => setReceiver(e.target.value)}
                />
              </div>
              <div className="bg-red-100 m-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="message"
                  autoComplete="off"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="bg-red-100 m-4">
                <select 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setClosing(e.target.value)}>
                    <option>Choose Signature</option>
                    <option value="Love,">Love,</option>
                    <option value="Yours Truly,">Yours Truly,</option>
                    <option value="Sincerely,">Sincerely,</option>
                    <option value="Condolences,">Condolences,</option>
                    <option value="Thinking of you,">Thinking of you,</option>
                    <option value="Best,">Best,</option>
                    <option value="Thanks!">Thanks!</option>
                    <option value="Thanks you!">Thank you!</option>
                </select>
              </div>
              <div className="m-4 flex justify-center">
                <button className="bg-red-100 border-solid border-2 border-red-600 mt-4 rounded-sm p-1 font-semibold" type="submit">Create Card</button>
              </div>
              <div className="text-red-600 pl-6 pb-4">
                {errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </div>
            </form>
            <br/>
        </div>
      </div>
    )
}

export default CreateCard