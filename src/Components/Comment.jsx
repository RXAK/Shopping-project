import React, { useState } from "react";
import "./Comment.css"

const Comment = () => {
    const [message, setMessage] = useState("");

  return (
    <div className='Comment'>
        <h1>COMMENENT YOUR REVIEW</h1>
        <div className="inputs">
    <input type="name" className='name' placeholder="Enter Your name" />
        <input type="email" className='email' placeholder=" Enter Your email" />
        <input type="text" className='text' placeholder="Enter your comment" value={message}    onChange={e => setMessage(e.target.value)}/>
        <button className='submit' >Comment</button>
        </div>
        <div className="copy">
        <span> Your Comment :<p>{message}</p></span>
        </div>
        

    
    </div>
  )
}

export default Comment
