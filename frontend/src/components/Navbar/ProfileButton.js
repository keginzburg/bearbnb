import { useState } from "react";

import SessionLinks from "./SessionLinks";

import "./ProfileButton.css";

const ProfileButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="profile-button-box" onClick={e => setShowMenu(prevState => !prevState)}>
            <div className="hamburger-icon">
                <i className="fa-sharp fa-solid fa-bars"></i>
            </div>
            <div className="profile-icon">
                <i className="fa-solid fa-circle-user"></i>
            </div>
            {showMenu && (
                <div className="dropdown-menu">
                    <div className="auth-links">
                        <SessionLinks />
                    </div>
                    <div className="addl-links">
                        <a className="l-h4" href="http://github.com/keginzburg">My GitHub</a>
                        <a className="l-h4" href="https://www.linkedin.com/in/kyleginzburg">My LinkedIn</a>
                        <a className="l-h4" href="https://angel.co/u/kyle-ginzburg">My AngelList</a>
                    </div> 
                </div>
            )}
        </div>
    );
}

export default ProfileButton;