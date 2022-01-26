import React, { useState } from "react";

function EditCard( {onUpdateCard, card}) {
    const [receiver, setReceiver] = useState(card.receiver)
    const [message, setMessage] = useState(card.message)
    const [salutation, setSalutation] = useState(card.salutation)
    const [closing, setClosing] = useState(card.closing)

    function handleUpdateCard(updatedCard) {
        onUpdateCard(updatedCard)
      }

    function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://my-ecards.herokuapp.com/cards/${card.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        receiver: receiver,
        message: message,
        salutation: salutation,
        closing: closing,
        }),
    })
    .then((r) => r.json())
    .then(updatedCard => {
        handleUpdateCard(updatedCard)
    })
    }

    return (
        <div>
            <p>Edit Card Here</p>
            <form className="edit_form" onSubmit={handleFormSubmit}>
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
                    placeholder="To"
                    onChange={(e) => setReceiver(e.target.value)}
                />
                <br></br>
                <input
                    className="message"
                    type="text"
                    name="message"
                    autoComplete="off"
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
                <button type="submit">Submit Update</button>
            </form>

        </div>
    )
}

export default EditCard