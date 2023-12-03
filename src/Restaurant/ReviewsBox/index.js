// Use reviews to get dietary information
import db from "./../temp-database"
import React from "react";
import { Link } from "react-router-dom";

// Will need to match restaurants and reviews by ID
function ReviewsBox({ rId }) {
    const restaurantDb = db.restaurants;
    const reviewsDb = db.reviews;
    const matchingReviews = reviewsDb.filter(review => review.restaurant_id === rId );
    return (
        <div>
            <h2>
                Reviews
            </h2>

            <Link to={`/restaurant/${rId}/review`}>
                <button>Write a review</button>
            </Link>

            <hr/>
            {matchingReviews.map(review => (
                <div>
                    <h3>Rating: {review.rating}</h3>
                    {review.content}
                    <br/>
                    {review.content_accomodations}
                </div>
            ))}
        </div>
    )
}

export default ReviewsBox;