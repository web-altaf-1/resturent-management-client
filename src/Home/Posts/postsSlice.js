import {createSlice} from "@reduxjs/toolkit"

const initialState = [
    {id: '1', restaurant: 'Restaurant A', content: "The food here tasted great. I would recommend getting the pasta dinner."},
    {id: '2', restaurant: 'Restaurant B', content: "I was really excited to visit an authentic chinese restaurant. The atmosphere was very charming."}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdd(state, action){
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdd} = postSlice.actions

export default postSlice.reducer

