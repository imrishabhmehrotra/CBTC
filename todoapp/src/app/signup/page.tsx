"use client"
import React, { useState } from "react";

export default function signup(){
    const [data,setData]  = useState({})


    const handleData = () =>{
        alert("registered")
    }

    return (
        <>
         <center>
            <form className="form" onSubmit={handleData}>
       <p className="form-title">Sign in to your account</p>
       <div className="input-container">

        <input type="text" placeholder="Full Name" />
       </div>
        <div className="input-container">
          <input placeholder="Enter email" type="email" />
         
      </div>
      <div className="input-container" >
          <input placeholder="Enter password" type="password" />

        </div>
         <button className="submit" type="submit">
        Sign in
      </button>

      <p className="signup-link">
        No account?
        <a href="/signup">Sign up</a>
      </p>
   </form>
            </center>
   
        </>
    )
}