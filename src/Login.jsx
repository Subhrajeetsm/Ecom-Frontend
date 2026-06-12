import React, { useState } from 'react';

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  let senddetails = async (event) => {
    event.preventDefault();
    try {

        let token = localStorage.getItem("token")
        let response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ username, password })
      });

      let data = await response.json();

      alert(data.msg);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
    }
    catch(error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={senddetails}>
      <div>Login</div>
      <p>Welcome Back! Please log in to continue.</p>

      <div>
        <label>User name</label>
        <input
          onChange={(e) => setusername(e.target.value)}
          type="text"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label>Password</label>
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;