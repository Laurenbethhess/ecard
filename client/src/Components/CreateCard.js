import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// -add template thumbails around the form

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
  
      fetch("http://localhost:3000/cards", {
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
          <div className="form_input_rectangle">
            <form className="form" onSubmit={handleSubmit}>
                <select onChange={(e) => setTemplateId(e.target.value)}>
                    <option>Choose template (required)</option>
                    <option value="1">Happy Birthday</option>
                    <option value="2">Congrats</option>
                    <option value="3">Get Well</option>
                    <option value="4">Love</option>
                </select>
                <br></br>
                <select onChange={(e) => setSalutation(e.target.value)}>
                    <option >Choose Greeting</option>
                    <option value="Greetings">Greetings</option>
                    <option value="Hello">Hello</option>
                    <option value="Dear">Dear</option>
                </select>
                <br></br>
                <input
                    type="text"
                    name="receiver"
                    autoComplete="off"
                    value={receiver}
                    placeholder="To"
                    onChange={(e) => setReceiver(e.target.value)}
                />
                <br></br>
                <input
                    type="text"
                    name="message"
                    autoComplete="off"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br></br>
                <select onChange={(e) => setClosing(e.target.value)}>
                    <option>Choose Signature</option>
                    <option value="Love">Love</option>
                    <option value="Yours Truly">Yours Truly</option>
                    <option value="Sincerely">Sincerely</option>
                    <option value="Condolences">Condolences</option>
                    <option value="Thinking of you">Thinking of you</option>
                    <option value="Best">Best</option>
                </select>
                <br></br>
                <button type="submit">Create Card</button>
                {errors.map((err) => (
                  <p key={err}>{err}</p>
                ))}
            </form>
          </div>
 
        <br/>
      </div>
      
    )

}

export default CreateCard