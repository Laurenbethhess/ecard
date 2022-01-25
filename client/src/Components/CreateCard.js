import React, { useEffect, useState } from "react";

// -pop-up (maybe we can alert message thank you / your card have been created )


function CreateCard( {onAddCard}) {
    const [receiver, setReceiver] = useState("")
    const [salutation, setSalutation] = useState("")
    const [message, setMessage] = useState("")
    const [closing, setClosing] = useState("")
    const [user_id, setUserId] = useState(1)
    const [template_id, setTemplateId] = useState("")


    function handleSubmit(e) {
    //   e.preventDefault()
  
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
          user_id: user_id,
          template_id: template_id
        }),
      })
      .then((r) => r.json())
      .then(newCard => {
        onAddCard(newCard)
        setReceiver("")
        setSalutation("")
        setMessage("")
        setClosing("")
        setTemplateId("")
      })
    }
  
    return (
      <div className="form_background">
          <div className="form_input_rectangle">
            <form className="form" onSubmit={handleSubmit}>
            {/* ***need to set error since this is required***  */}
                <select onChange={(e) => setTemplateId(e.target.value)}>
                    <option>Choose template (required)</option>
                    <option value="1">Happy Birthday</option>
                    <option value="4">Congrats</option>
                    <option value="5">Get Well</option>
                    <option value="6">Love</option>
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
                <textarea
                    className="message"
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
                <button type="submit">Add to Card</button>
            </form>
          </div>
 
        <br/>
      </div>
      
    )

    return (
        <div>

        </div>

    )

}

export default CreateCard