import React from 'react'
import './style.css'

const Post = ({ post: { title, body, author }, index }) => {
  return (
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <p>{body}</p>
      <div className="info">
        <h4>Written by: {author}</h4>
      </div>
    </div>
  )
}

export default Post
