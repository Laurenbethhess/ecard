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
    fetch("https://my-ecards.herokuapp.com/login", {
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
    // <div  className="min-h-screen bg-red-200 font-mono text-center mt-20">
    //   {showLogin ? (
    //     <div>
    //       <h2 className="text-bold mt-4 mb-4">Please Login</h2>
    //       <form  className="mt-4" onSubmit={handleSubmit}>
    //         <input
    //             className = "border-teal p-8 border-t-12 bg-white mb-4 rounded-sm shadow-lg"
    //             type="text"
    //             id="username"
    //             autoComplete="off"
    //             placeholder="username"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //         />
    //         <br/>
    //         <input
    //             className = "border-teal p-8 border-t-12 bg-white mb-4 rounded-sm shadow-lg"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //             placeholder="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //         />
    //         <br/>
    //         <button className="bg-yellow-100 rounded-sm p-1 font-semibold" type="submit">
    //             {isLoading ? "Loading..." : "Login"}
    //         </button>
    //         {errors.map((err) => (<p key={err}>{err}</p>))}
    //       </form>
    //       <br />
    //       <p>
    //         Don't have an account? &nbsp;
    //         <button className="italic underline" onClick={() => setShowLogin(false)}>
    //           Sign Up
    //         </button>
    //       </p>
    //     </div>
    //   ) : (
    //     <div>
    //       <Signup onLogin={onLogin} />
    //       <br />
    //       <p>
    //         Already have an account? &nbsp;
    //         <button className="italic underline" onClick={() => setShowLogin(true)}>
    //           Log In
    //         </button>
    //       </p>
    //     </div>
    //   )}
    // </div>

    <div  className="pt-6 flex justify-center font-mono text-center mt-20">
      {showLogin ? (
        <div>
          <form className="bg-red-200 shadow-md rounded px-8 pb-8 mb-4 w-96"onSubmit={handleSubmit}>
          <h2 className="font-semibold pt-4">Please Login</h2>
            <div className="px-6 py-2">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                type="text"
                id="username"
                autoComplete="off"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="px-6 py-2">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="px-4 py-2">
              <button className="bg-yellow-100 rounded-sm py-1 px-6 font-semibold" type="submit">
                  {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
            <div className="text-red-600 pb-4">
                {errors.map((err) => (
                  <span key={err}>{err}</span>
                ))}
            </div>
            <div className="pb-4">
              <p>
                Don't have an account? &nbsp;
                <button className="italic underline" onClick={() => setShowLogin(false)}>
                  Sign Up
                </button>
              </p>
            </div> 
          </form>
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
