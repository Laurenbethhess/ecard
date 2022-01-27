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
            <p className="font-semibold mt-4">Edit Card Here</p>
            <form onSubmit={handleFormSubmit}>
                <select 
                    className="border-teal p-1 border-t-12 bg-red-100 mb-2 rounded-sm shadow-lg" 
                    onChange={(e) => setSalutation(e.target.value)}>
                    <option >Choose Greeting</option>
                    <option value="Greetings">Greetings</option>
                    <option value="Hello">Hello</option>
                    <option value="Dear">Dear</option>
                </select>
                <br></br>
                <input
                    className="border-teal p-1 border-t-12 bg-red-100 mb-2 rounded-sm shadow-lg"
                    type="text"
                    name="receiver"
                    autoComplete="off"
                    placeholder="To"
                    onChange={(e) => setReceiver(e.target.value)}
                />
                <br></br>
                <textarea 
                    className="border-teal p-1 border-t-12 bg-red-100 mb-2 rounded-sm shadow-lg"
                    name="message" 
                    autoComplete="off"
                    rows="3" 
                    cols="30"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)} ></textarea>
                <br></br>
                <select 
                    className="border-teal p-1 border-t-12 bg-red-100 mb-2 rounded-sm shadow-lg"
                    onChange={(e) => setClosing(e.target.value)}>
                    <option>Choose Signature</option>
                    <option value="Love">Love</option>
                    <option value="Yours Truly">Yours Truly</option>
                    <option value="Sincerely">Sincerely</option>
                    <option value="Condolences">Condolences</option>
                    <option value="Thinking of you">Thinking of you</option>
                    <option value="Best">Best</option>
                </select>
                <br></br>
                <button className="bg-green-100 p-1 font-semibold rounded-sm border-green-500  text-sm hover:bg-green-500" type="submit">Submit Update</button>
            </form>

        </div>
    )
}

export default EditCard