import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "src/Profile/profilesReducer";
import commentsReducer from "src/Comment/commentsReducer";
import postsReducer from '../Home/Posts/postsSlice';
import searchReducer from '../Home/Search/searchReducer'

const store = configureStore({
  reducer: {
    profilesReducer,
    commentsReducer,
    posts: postsReducer,
    search: searchReducer,
  }
}); 


export default store;