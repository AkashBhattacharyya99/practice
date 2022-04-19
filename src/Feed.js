import React, { useEffect, useState } from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import db from "./firebase"
import LeftSidebar from './LeftSidebar';



export default function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  console.log(posts);
  return (
    <div className='feed'>

     
      <div className="mid-feed">
      <MessageSender />
  
        <Post posts={[...posts]}/>
      

       
      </div>

      <div className="right-feed">
        <LeftSidebar />
      </div>

      
     

      {/* <Post profilePic="https://bsmedia.business-standard.com/_media/bs/img/article/2020-01/23/full/1579722019-5602.jpg?im=Resize,width=1200"
            message="Be Humble"
            timestamp="this is ts"
            username="Ratan Tata"
            image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-01/23/full/1579722019-5602.jpg?im=Resize,width=1200"
      />  */}
      {/* <Post />
      <Post /> */}
    </div>
  )
}
