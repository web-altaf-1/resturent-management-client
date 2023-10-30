import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css"
import {
    addProfile,
    deleteProfile,
    updateProfile,
    setProfile,
} from "src/Profile/profilesReducer";
function Edit() {
    const profiles = useSelector((state) => state.profilesReducer.profiles);
    const profile = useSelector((state) => state.profilesReducer.profile);
    const dispatch = useDispatch();


    const navigate = useNavigate();
    return (
        <div className="edit">
            <h1>Edit Profile</h1>
            <div className="edit__grid">
                <div className="edit__first-name">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" value={profile.first_name} onChange={(e) => dispatch(setProfile({ ...profile, first_name: e.target.value }))} />
                </div>
                <div className="edit__last-name">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" value={profile.last_name} onChange={(e) => dispatch(setProfile({ ...profile, last_name: e.target.value }))} />
                </div>

                <button className="edit__save"
                    onClick={() => {
                        dispatch(updateProfile(profile));
                        navigate(`/profile`);
                    }}>
                    Save</button>


                <button className="edit__cancel"
                    onClick={() => {

                        navigate(`/profile`);
                    }}>
                    Cancel</button>

            </div>
        </div>
    );

}

export default Edit;