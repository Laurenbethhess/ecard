import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("https://my-ecards.herokuapp.com/users", {
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
        navigate('/')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (
        <div className="login_box">
        <form className="bg-red-200 shadow-md rounded px-8 pb-8 mb-4 w-96"onSubmit={handleSubmit}>
            <h2 className="font-semibold pt-4">Please Sign In</h2>
            <div className="px-6 py-2">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                type="text"
                placeholder="username"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="px-6 py-2">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password"
                type="text"
                placeholder="first name"
                id="first_name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="px-6 py-2">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password"
                type="text"
                placeholder="last name"
                id="last_name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="px-6 py-2">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password"
                type="password"
                placeholder="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div className="px-4 py-2">
              <button className="bg-yellow-100 rounded-sm py-1 px-6 font-semibold" type="submit">
                  {isLoading ? "Loading..." : "Sign Up"}
              </button>
            </div>
            <div className="text-red-600 pb-4">
                {errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
            </div>
          </form>
        </div>
    )
}

export default Signup