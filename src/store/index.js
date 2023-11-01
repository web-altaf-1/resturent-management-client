import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "src/Profile/profilesReducer";
import commentsReducer from "src/Comment/commentsReducer";

const store = configureStore({
  reducer: {
    profilesReducer,
    commentsReducer
  }
});


export default store;