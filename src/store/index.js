import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "src/Profile/profilesReducer";

const store = configureStore({
  reducer: {
    profilesReducer
  }
});


export default store;