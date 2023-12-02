import {createSlice} from "@reduxjs/toolkit"
import {sub} from 'date-fns';

const initialState = [
    {id: '1', restaurant: 'Restaurant A', content: "The food here tasted great. I would recommend getting the pasta dinner.", 
    date: sub(new Date, {minutes: 10}).toISOString()},
    {id: '2', restaurant: 'Restaurant B', content: "I was really excited to visit an authentic chinese restaurant. The atmosphere was very charming.",
    date: sub(new Date, {minutes: 5}).toISOString()}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdd(state, action){
            let date = new Date().toISOString();
            console.log("Date:", date);
            state.push({...action.payload, date: date});
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdd} = postSlice.actions

export default postSlice.reducer

