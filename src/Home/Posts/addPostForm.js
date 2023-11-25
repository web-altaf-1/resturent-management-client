import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdd } from './postsSlice';

const AddPostForm = () => {

    const [restaurant, setRestaurant] = useState('');
    const [content, setContent] = useState('');

    const onRestaurantChanged = e => setRestaurant(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const dispatch = useDispatch()

    const onPostReview = () => {
        if (restaurant && content){
            dispatch(
                postAdd({
                    id: nanoid(),
                    restaurant,
                    content
                })
            )

            setRestaurant('')
            setContent('')
        }
    }

  return (
    <div>
        <h2>Add new Review</h2>
        <form>
            <label htmlFor='postRestaurant'>Post Restaurant:</label>
            <input
            type="text"
            id="postRestaurant"
            name="postRestaurant"
            value={restaurant}
            onChange={onRestaurantChanged}>
            </input>
            <label htmlFor='postContent'>Content:</label>
            <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                />
            <button type="button"
            onClick={onPostReview}>Post Review</button>
        </form>
    </div>
  )
}

export default AddPostForm