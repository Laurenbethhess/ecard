import React, { useState } from "react";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        first_name: firstname,
        last_name: lastname

      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (
        <div className="login_box">
          <h2 className="text-bold mt-4 mb-4">Please Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                className = "border-teal p-8 border-t-12 bg-white mb-4 rounded-sm shadow-lg"
                type="text"
                placeholder="username"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                className = "border-teal p-8 border-t-12 bg-white mb-4 rounded-sm shadow-lg"
                type="password"
                placeholder="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                />
                <br/>
                <input
                    className = "border-teal p-8 border-t-12 bg-white mb-4 rounded-sm shadow-lg"
                    type="text"
                    placeholder="first name"
                    id="first_name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br/>
                <input
                    className = "border-teal p-8 border-t-12 bg-white mb-4 rounded-sm shadow-lg"
                    type="text"
                    placeholder="last name"
                    id="last_name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="current-password"
                />
                <br/>
                <button className="bg-yellow-100 rounded-sm p-1 font-semibold" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                {errors.map((err) => (<p key={err}>{err}</p>))}
            </form>
        </div>
    )
}

export default Signup