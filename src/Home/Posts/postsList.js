import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

const PostsList = () => {

    const posts = useSelector(selectAllPosts)
  
    const restaurantCard = {width: "200px", height: "225px", border: "1px solid black", margin: 10};

    const renderedPosts = posts.map(post => (
        <div style={restaurantCard} key={post.id}>
            <h3>{post.restaurant}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </div>
    ))

  return (
    <div>
        <h2>Posts</h2>
        {renderedPosts}
    </div>
  )
}

export default PostsList