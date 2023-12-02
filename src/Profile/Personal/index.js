import React from "react";
import { useNavigate } from "react-router-dom";
import * as client from "src/store/api";
import { useState, useEffect } from "react";
import "./index.css";
import Cookies from "js-cookie";

function Personal() {
    const cookieToken = Cookies.get('user')
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const fetchProfile = async () => {
        const fetchedProfile = await client.account();
        if (fetchedProfile) {
            setProfile(fetchedProfile?.data);
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        fetchProfile();
    }, [cookieToken]);

    return (
        <div className="profile">
            <h1>Personal Profile</h1>
            {profile && <div className="profile-grid">
                <span className="profile__first-name">first_name: {profile.first_name}</span>
                <span className="profile__last-name">last_name: {profile.last_name}</span>
                <span className="profile__phone">email: {profile.email}</span>
                <span className="profile__email">phone_number: {profile.phone_number}</span>
                <button className="profile__edit"
                    onClick={() => navigate(`/profile/edit`)}>
                    Edit</button>
            </div>}
        </div>
    );
}
export default Personal;