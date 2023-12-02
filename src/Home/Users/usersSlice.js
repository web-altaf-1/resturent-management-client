import {createSlice} from "@reduxjs/toolkit"
import db from "src/Database";

const initialState = db.profiles;

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;