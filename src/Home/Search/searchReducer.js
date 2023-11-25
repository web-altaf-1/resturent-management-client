import {createSlice} from "@reduxjs/toolkit";
import db from "src/Database";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        term: '',
        results: []
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.term = action.payload;
            state.results = filterRestaurants(action.payload);
        },
    },
});

const filterRestaurants = (searchTerm) => {
    return db.restaurants.filter((restaurant) => restaurant.name.includes(searchTerm));
};

export const {setSearchTerm} = searchSlice.actions;
export default searchSlice.reducer;