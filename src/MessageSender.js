import { PhotoLibrary } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './MessageSender.css';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from './firebase';

export default function MessageSender() {

  const [{user}, dispatch] = useStateValue();  
    const [input, setInput]=useState('');

    const handleSubmit = (e) => {
     
      e.preventDefault();
     
      db.collection("posts").add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilepic: user.photoURL,
          username: user.displayName

          
        })

        setInput('');
    };
  return (
    <div className='messageSender'>
      <div className="messageSender_left">
          <Avatar src={user.photoURL}/>
          <form>
          <input value={input} onChange={(e)=> setInput(e.target.value)}
          className='messageSender_input' 
          placeholder={`what's on your mind`}/>
          <button type="submit" onClick={handleSubmit}>Hidden</button>
          </form>
      </div>

      <div className="messageSender_right" type="submit">
          <div className="messageSender_option">
              <PhotoLibrary style={{color: "green"}}/>
              <h6>Photo/Video</h6>
          </div>
      </div>
    </div>
  )
}
