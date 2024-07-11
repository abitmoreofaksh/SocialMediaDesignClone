import { MoreVert } from '@mui/icons-material'
import './post.css'
import {Users} from "../../data"
import { useState } from 'react'
export default function Post({post}) {
  const [like,setLike]=useState(post.likes);
  const [isliked,setisLiked]=useState(false);

  const likeHandler = ()=>{
    setLike(isliked?like-1:like+1);
    setisLiked(!isliked);
  }
  return (
    <div className='post'>
      <div className="postTop">
        <div className="postTopLeft">
            <img src={Users.filter((u)=>u.id===post.userId)[0].photo} alt="" className="postUser" />
            <span className="postUsername">
              {Users.filter((u)=>u.id===post.userId)[0].username}
              </span>
            <span className="time">{post.date}</span>
        </div>
        <div className="postTopRight"><MoreVert/></div>
      </div>
      <div className="postCenter">
        <span className="postCaption">{post?.desc}</span>
        <img src={post.postPhoto} alt="" className="postImage" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
            <img src="/assets/LikeButton.png" alt="" className="likeButton"onClick={likeHandler} />
            <span className="likeCounter">{like} people liked</span>
        </div>
        <div className="postBottomRight">
            <span className="commentCounter">{post.comments} Comments</span>
        </div>
      </div>
    </div>
  )
}
