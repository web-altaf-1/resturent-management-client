import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import db from "src/Database";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        name: '',
        cuisine: '',
        zipCode: '',
        city: '',
        streetAddress: '',
        distance: [],
        results: []
    },
    reducers: {
        setSearchName: (state, action) => {
            state.name = action.payload;
            console.log("State Name: " + state.name)
            state.results = filterRestaurants(state);
        },
        setCuisineFilter: (state, action) => {
            state.cuisine = action.payload;
            state.results = filterRestaurants(state);
        },
        setZipCodeFilter: (state, action) => {
            state.zipCode = action.payload;
            state.results = filterRestaurants(state);
        },
        setCityFilter: (state, action) => {
            state.city = action.payload;
            state.results = filterRestaurants(state);
        },
        setStreetAddressFilter: (state, action) => {
            state.streetAddress = action.payload;
            state.results = filterRestaurants(state);
        },
        setDistance: (state, action) => {
            state.distance = action.payload;
        }
    },
});


const filterRestaurants = (state) => {
    
    const { name, cuisine, zipCode, city, streetAddress } = state;


    const filteredResults = db.restaurants.filter((restaurant) => {
        const nameMatch = name ? restaurant.name.includes(name) : true;
        const cuisineMatch = cuisine ? restaurant.cuisine[0].includes(cuisine) : true;
        const zipCodeMatch = zipCode ? restaurant.zipCode.includes(zipCode) : true;
        const cityMatch = city ? restaurant.City.includes(city) : true;
        const streetAddressMatch = streetAddress
            ? restaurant.streetAddress.includes(streetAddress)
            : true;

        

        return nameMatch && cuisineMatch && zipCodeMatch && cityMatch && streetAddressMatch;
    });

    return filteredResults;
};

export const {
    setSearchName,
    setCuisineFilter,
    setZipCodeFilter,
    setCityFilter,
    setStreetAddressFilter,
    setDistance
} = searchSlice.actions;

export default searchSlice.reducer;