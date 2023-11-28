import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "src/Profile/profilesReducer";
import commentsReducer from "src/Comment/commentsReducer";
import postsReducer from '../Home/Posts/postsSlice';
import searchReducer from '../Home/Search/searchReducer'
import usersReducer from '../Home/Users/usersSlice';

const store = configureStore({
  reducer: {
    profilesReducer,
    commentsReducer,
    posts: postsReducer,
    search: searchReducer,
    users: usersReducer,
  }
}); 


export default store;