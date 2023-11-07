import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addProfile,
    deleteProfile,
    updateProfile,
    setProfile,
  } from "src/Profile/profilesReducer";
  function Profile(){
    const { courseId } = useParams();
    const profiles = useSelector((state) => state.profilesReducer.profiles);
    const profile = useSelector((state) => state.profilesReducer.profile);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>ProfileIndex</h1>
        </div>
        );
  }

  export default Profile;