import React from 'react'
import './Post.css'
const Post = () => {
  return (
    <div className='post'>
        <h3>UserName</h3>
        {/* header -> avatar + username */}


        <img className='post__image' height="600px" src="" alt="" />
        {/* image */}

        <h4>UserName caption</h4>
        {/* username + caption */}
    </div>
  )
}

export default Post