import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addProfile,
    deleteProfile,
    updateProfile,
    setProfile,
} from "src/Profile/profilesReducer";
import "./index.css";
function Personal() {
    const { courseId } = useParams();
    const profiles = useSelector((state) => state.profilesReducer.profiles);
    const profile = useSelector((state) => state.profilesReducer.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(setProfile(profiles[0]))
    return (
        <div className="profile">
            <h1>Personal Profile</h1>
            <div className="profile-grid">
                <span className="profile__first-name">Name: {profile.first_name}</span>
                <span className="profile__last-name">{profile.last_name}</span>
                <span className="profile__phone">{profile.email}</span>
                <span className="profile__email">{profile.phone_number}</span>
                <button className="profile__edit"
                    onClick={() => navigate(`/profile/edit`)}>
                    Edit</button>
            </div>
        </div>
    );
}
export default Personal;