import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './postAuthor'
import Time from './Time'
import './styling/posts.css'

const PostsList = ({restaurantId}) => {

    const posts = useSelector(selectAllPosts);

    console.log({posts})

    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));

    console.log({orderedPosts});

    const restaurantPosts = orderedPosts.filter(posts => posts.restaurant_id == restaurantId);


    console.log("Restaurant posts:", {restaurantPosts})

    const renderedPosts = restaurantPosts.map(post => (
        <div className="restaurantCard" key={post.id}>
            <h3>{post.restaurant}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p><PostAuthor userId={post.user_id} />
            <Time timestamp={post.date}/>
            </p>

        </div>
    ))

  return (
    <div>
        <h2>Featured Reviews</h2>
        {renderedPosts}
    </div>
  )
}

export default PostsList