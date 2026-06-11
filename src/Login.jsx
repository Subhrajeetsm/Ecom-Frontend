import React from 'react'
import { useState } from 'react'


function Login() {
//user name password
const  {username,setusername}=useState('')
const {password,setpassword}=useState('')
let senddetails= async(event)=>{


    event.preventDefault();//stops reloading page when we submit a form
    //post request


    try{

        let token = localStorage.getItem("token")
        let response= await fetch('http://localhost:3000/auth/login',{
        method:'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({username,password})
    })
     let data=await result.json();
     alert(data.msg);
}
catch(error)
{
    console.log(error);
    alert("went wrong")
}

}
  return (
    <form onSubmit={senddetails} >
    <div>Login</div>
    <p>Welcome Back! Please log in to continue.</p>

    <div>
    <label>User name</label>
    <input onChange={(e)=>{e.target.value}}
        type="text"
        placeholder="Enter your email"
    />
    </div>

        <div>
        <label>Password</label>
        <input onChange={(e)=>{setpassword(e.target.vlaue)}}
            type="password"
            placeholder="Enter your password"
        />
    </div>
    <button type="submit">
        Login
    </button>
    </form>
  )
}

export default Login