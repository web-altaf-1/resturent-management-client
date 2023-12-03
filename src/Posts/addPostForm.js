import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdd } from './postsSlice';
import { selectAllUsers } from '../Home/Users/usersSlice';
import {useNavigate} from 'react-router-dom';
import './styling/posts.css'

import db from "src/Database";

const AddPostForm = ({restaurantId}) => {

    const restaurants = db.restaurants;

    console.log("Restaurants: ", {restaurants});

    const [restaurant, setRestaurant] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onRestaurantChanged = e => setRestaurant(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("Restaurant ID: ", restaurantId)

    useEffect(() => {
        // Find the restaurant based on restaurantId and set its name
        console.log("Restaurant IDDD: ", restaurantId)
        console.log("Restaurants here: ", {restaurants});
        console.log("restaurant 1", restaurants[0].id);
        const selectedRestaurant = restaurants.find((r) => r.id == restaurantId);
        console.log("Selected Restaurant ", selectedRestaurant);
        if (selectedRestaurant) {
          setRestaurant(selectedRestaurant.name);
        }
      }, [restaurantId, restaurants]);

    const onPostReview = () => {
        if (restaurant && content){
            dispatch(
                postAdd({
                    id: nanoid(),
                    restaurant_id: restaurantId,
                    content: content,
                    user_id: userId,
                    content_accomodations: '',
                    accommodations: {
                        gluten_free: 0,
                        nut_free: 0,
                        dairy_free: 0,
                        shellfish: 0,
                        vegetarian: 0,
                        vegan: 0,
                      },
                      rating: 0.0
                })
            )

            setRestaurant('')
            setContent('')
        }

        navigate(`/restaurant/${restaurantId}`)
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
            <label htmlFor='postRestaurant'>Restaurant:</label>
            <input
            type="text"
            id="postRestaurant"
            name="postRestaurant"
            value={restaurant}
            onChange={() => {}}>
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