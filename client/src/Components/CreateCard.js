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

          <div className="form_input_rectangle">
            <form className="form" onSubmit={handleSubmit}>
                <select 
                    className="border-teal p-0.5 border-t-12 bg-yellow-100 mb-1 rounded-sm shadow-lg" 
                    onChange={(e) => setTemplateId(e.target.value)}>
                    <option>Choose template (required)</option>
                    <option value="1">Roses are red</option>
                    <option value="2">As cold as blue blazes</option>
                    <option value="3">Green vibes only</option>
                    <option value="4">I'm just mad about saffron</option>
                </select>
                <br></br>
                <select 
                    className="border-teal p-0.5 border-t-12 bg-yellow-100 mb-1 rounded-sm shadow-lg" 
                    onChange={(e) => setSalutation(e.target.value)}>
                    <option >Choose Greeting</option>
                    <option value="Greetings">Greetings</option>
                    <option value="Hello">Hello</option>
                    <option value="Hi">Hi</option>
                    <option value="Dear">Dear</option>
                </select>
                <br></br>
                <input
                    className="border-teal p-0.5 border-t-12 bg-yellow-100 mb-1 rounded-sm shadow-lg" 
                    type="text"
                    name="receiver"
                    autoComplete="off"
                    value={receiver}
                    placeholder="To"
                    onChange={(e) => setReceiver(e.target.value)}
                />
                <br></br>
                <input
                    className="border-teal p-0.5 border-t-12 bg-yellow-100 mb-1 rounded-sm shadow-lg" 
                    type="text"
                    name="message"
                    autoComplete="off"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br></br>
                <select 
                    className="border-teal p-0.5 border-t-12 bg-yellow-100 mb-1 rounded-sm shadow-lg" 
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
                <br></br>
                <button className="bg-green-200 mt-4 rounded-sm p-1 font-semibold" type="submit">Create Card</button>
                <br/><br/><br/>
                {errors.map((err) => (
                  <div key={err}>{err}</div>
                ))}
            </form>
          </div>
        <br/>
      </div>
    )
}

export default CreateCard