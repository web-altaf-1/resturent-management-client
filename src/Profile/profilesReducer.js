import { createSlice } from "@reduxjs/toolkit";
import db from "src/Database";


const initialState = {
  profiles: db.profiles,
  profile: { name: "New profile 123", description: "New Description" },
};


const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profiles = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.profiles,
      ];
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter(
        (profile) => profile._id !== action.payload
      );
    },
    updateProfile: (state, action) => {
      state.profiles = state.profiles.map((profile) => {
        if (profile._id === action.payload._id) {
          return action.payload;
        } else {
          return profile;
        }
      });
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});


export const { addProfile, deleteProfile,
  updateProfile, setProfile } = profilesSlice.actions;
export default profilesSlice.reducer;

