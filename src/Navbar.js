import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "src/store/api";
import Cookies from "js-cookie";

function Navbar({ validUser }) {
  const navigate = useNavigate();

  const logOut = async () => {
    const logout = await client.logout();
    if(logout) {
        Cookies.remove('user');
        window.location.href = '/login';
    }
}
  return (
    <>
      <nav id="navbar">
        <div className="navbar_container">
          <div className="nav_left">
            <Link to="/">
              <div style={{margin: 0}}>
                <img
                  src="logo.jpeg"
                  alt="logo"
                  height={"150px"}
                  width={"150px"}
                />
              </div>
            </Link>
          </div>
          <div className="nav_right">
            {
              !validUser ? (<div className="buttons">
                <button
                  className="login-btn"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="register-btn"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </button>
              </div>) : (<div className="buttons">
                <button
                  className="profile-btn"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Profile
                </button>
                <button
                  className="logout-btn"
                  onClick={logOut}
                >
                  Logout
                </button>
              </div>)
            }
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
