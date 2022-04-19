import React from 'react'
import { ChatBubbleOutline } from '@mui/icons-material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Avatar } from '@mui/material';
import './Post.css';

export default function Post(props) {
    console.log(props)
  return (
   props.posts && props.posts.length && props.posts.map((post)=>{
     let {id,data:{profilePic, image, username, timestamp, message}}= post
     
     return  <div className='post'>
      <div className="post_top">
          <Avatar src={profilePic} className="post_avatar" />
          <div className="post_topinfo">
              <h3>{username}</h3>
              <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
      </div>
      <div className="post_buttom">
          <p>{message}</p>
      </div>
      <div className="post_image">
          <img src={image} alt="" />
      </div>
      <div className="post_options">
          <div className="post_option">
              <ThumbUpIcon/>
              <p>Like</p>
          </div>
          <div className="post_option">
              <ThumbDownOffAltIcon/>
              <p>DisLike</p>
          </div>
          <div className="post_option">
              <ChatBubbleOutline/>
              <p>Comment</p>
          </div>
          
      </div>
    </div>
   })
      

  )
}
