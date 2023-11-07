import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addProfile,
    deleteProfile,
    updateProfile,
    setProfile,
} from "src/Profile/profilesReducer";
import {
    addComment,
    deleteComment,
    updateComment,
    setComment,
} from "src/Comment/commentsReducer";
import "./index.css";
function Personal() {
    const profiles = useSelector((state) => state.profilesReducer.profiles);
    const dispatch = useDispatch();
    dispatch(setProfile(profiles[0]));
    const profile = useSelector((state) => state.profilesReducer.profile);
    const comments = useSelector((state) => state.commentsReducer.comments).filter((comment) => comment.user_id == profile._id);;
    const navigate = useNavigate();
    const friendFind = (id) => {
        return profiles.find((user) => user._id == id)
    }
    
    
    return (
        <div className="profile">
            <h1>Personal Profile</h1>
            <div className="profile-grid">
                <span className="profile__first-name">{profile.first_name}</span>
                <span className="profile__last-name">{profile.last_name}</span>
                <span className="profile__phone">{profile.email}</span>
                <span className="profile__email">{profile.phone_number}</span>
                <div className="profile__friends">
                    <h2>Friends</h2>
                    <ul className="profile__friends__list">
                        {profile.friends.map((friend) => (
                            <li key={friend}>
                                <Link to={`/profile/${friend}`} className="profile__friends__text">
                                    Friend: {friendFind(friend).first_name} {friendFind(friend).last_name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="profile__comments">
                    <h2>Comments</h2>
                    <ul className="profile__comments__list">
                        {comments.map((comment) => (
                            <li key={comment._id}>
                                {comment.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="profile__edit"
                    onClick={() => navigate(`/profile/edit`)}>
                    Edit</button>
            </div>
        </div>
    );
}
export default Personal;