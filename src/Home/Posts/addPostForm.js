import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdd } from './postsSlice';
import { selectAllUsers } from '../Users/usersSlice';
import './styling/posts.css'

const AddPostForm = () => {

    const [restaurant, setRestaurant] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onRestaurantChanged = e => setRestaurant(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const dispatch = useDispatch()

    const onPostReview = () => {
        if (restaurant && content){
            dispatch(
                postAdd({
                    id: nanoid(),
                    restaurant,
                    content,
                    userId
                })
            )

            setRestaurant('')
            setContent('')
        }
    }

    const canPost = Boolean(restaurant) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user => (
        <option key={user._id} value={user._id}>
            {user.first_name + " " + user.last_name} 
        </option> 
    ))

  return (
    <div>
        <h2>Add new Review</h2>
        <form className="postForm">
            <label htmlFor='postRestaurant'>Post Restaurant:</label>
            <input
            type="text"
            id="postRestaurant"
            name="postRestaurant"
            value={restaurant}
            onChange={onRestaurantChanged}>
            </input>
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {userOptions}
            </select>
            <label htmlFor='postContent'>Content:</label>
            <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                />
            <button className="btn btn-primary postButton" type="button"
            onClick={onPostReview} disabled={!canPost}>Post Review</button>
        </form>
    </div>
  )
}

export default AddPostForm