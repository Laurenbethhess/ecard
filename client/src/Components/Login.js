import React, { useState } from "react";
import Signup from "./Signup"
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          navigate('/')
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div  className="min-h-screen bg-red-200 font-mono text-center mt-20">
      {showLogin ? (
        <div>
          <h2 className="text-bold mt-4 mb-4">Please Login</h2>
          <form  className="mt-4" onSubmit={handleSubmit}>
            <input
                className = "border-teal p-8 border-t-12 bg-white mb-4 rounded-sm shadow-lg"
                type="text"
                id="username"
                autoComplete="off"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <input
                className = "border-teal p-8 border-t-12 bg-white mb-4 rounded-sm shadow-lg"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <button className="bg-yellow-100 rounded-sm p-1 font-semibold" type="submit">
                {isLoading ? "Loading..." : "Login"}
            </button>
            {errors.map((err) => (<p key={err}>{err}</p>))}
          </form>
          <br />
          <p>
            Don't have an account? &nbsp;
            <button className="italic underline" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div>
          <Signup onLogin={onLogin} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button className="italic underline" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
