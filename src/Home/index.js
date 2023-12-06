import React from "react";
import RestaurantCard from "./Home_Components/restaurantCard";
import restaurantData from "../Database/restaurants.json"
//import PostsList from "./Posts/postsList";
//import AddPostForm from "./Posts/addPostForm";
import { Link } from "react-router-dom";

function Home() {
    const homeStyle = { display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#36454F", height: "60vh" };
    const restaurants = restaurantData;

    return (
        <>
            <div style={homeStyle}>
                <Link to="/search">
                    <button className="btn btn-primary">Search</button>
                </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2>Featured Restaurants</h2>
                {restaurants?.map(a => a.id)}
            </div>
        </>
    )
}

export default Home;