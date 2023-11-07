import React from "react";
import SearchBar from "./Home_Components/searchBar";
import RestaurantCard from "./Home_Components/restaurantCard";
import restaurantData from "../Database/restaurants.json"
import restaurantA from './Images/restaurantA.jpeg';

function Home() {
    const homeStyle = {display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#36454F", height: "60vh"};
    const restaurants = restaurantData;

    return (
        <>
            <div style={homeStyle}>
                <h1>Welcome to Restaurant Dev branch Justin's Version</h1>
                <SearchBar/>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h2>Featured Restaurants</h2>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                    key={restaurant.id}
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    rating={restaurant.rating}
                    image={restaurant.image}
                    />
                ))}
            </div>
        </>
    )
}

export default Home;