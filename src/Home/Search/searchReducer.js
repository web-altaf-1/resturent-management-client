import {createSlice} from "@reduxjs/toolkit";
import db from "src/Database";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        name: '',
        cuisine: '',
        zipCode: '',
        city: '',
        streetAddress: '',
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
        }
    },
});

const filterRestaurants = (state) => {

    const {name, cuisine, zipCode, city, streetAddress} = state;

    const filteredResults = db.restaurants.filter((restaurant) => {
      const nameMatch = name ? restaurant.name.includes(name) : true;
      const cuisineMatch = cuisine ? restaurant.cuisine[0].includes(cuisine) : true;
      const zipCodeMatch = zipCode ? restaurant.zipCode.includes(zipCode) : true;
      const cityMatch = city ? restaurant.City.includes(city) : true;
      const streetAddressMatch = streetAddress
        ? restaurant.streetAddress.includes(streetAddress)
        : true;

        console.log(`name: ${name}, restaurant.name: ${restaurant.name}, nameMatch: ${nameMatch}`);
        console.log(`cuisine: ${cuisine}, restaurant.cuisine: ${restaurant.cuisine}, cuisineMatch: ${cuisineMatch}`);
        console.log(`zipCode: ${zipCode}, restaurant.zipCode: ${restaurant.zipCode}, zipCodeMatch: ${zipCodeMatch}`);
        console.log(`city: ${city}, restaurant.city: ${restaurant.city}, cityMatch: ${cityMatch}`);
        console.log(`streetAddress: ${streetAddress}, restaurant.streetAddress: ${restaurant.streetAddress}, streetAddressMatch: ${streetAddressMatch}`);
     
        return nameMatch && cuisineMatch && zipCodeMatch && cityMatch && streetAddressMatch;
    });

    console.log("Filtered Results:", filteredResults);
    return filteredResults;
  };

  export const {
    setSearchName,
    setCuisineFilter,
    setZipCodeFilter,
    setCityFilter,
    setStreetAddressFilter,
  } = searchSlice.actions;

  export default searchSlice.reducer;