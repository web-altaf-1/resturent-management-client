import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './postAuthor'
import Time from './Time'
import './styling/posts.css'

const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <div className="restaurantCard" key={post.id}>
            <h3>{post.restaurant}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p><PostAuthor userId={post.userId} />
            <Time timestamp={post.date}/>
            </p>

        </div>
    ))

  return (
    <div>
        <h2>Featured Posts</h2>
        {renderedPosts}
    </div>
  )
}

export default PostsList