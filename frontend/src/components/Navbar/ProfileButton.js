import { useState, useEffect } from "react";

import SessionLinks from "./SessionLinks";

import "./ProfileButton.css";

const ProfileButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        const closeMenu = () => {
            setShowMenu(false);
        }
        if (showMenu) {
            document.addEventListener('click', closeMenu);
            return () => document.removeEventListener('click', closeMenu);
        }
    }, [showMenu])

    return (
        <div className="profile-button-box" onClick={openMenu}>
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
                        <a className="l-h4 personal" href="http://github.com/keginzburg">My GitHub</a>
                        <a className="l-h4 personal" href="https://www.linkedin.com/in/kyleginzburg">My LinkedIn</a>
                        <a className="l-h4 personal" href="https://angel.co/u/kyle-ginzburg">My AngelList</a>
                    </div> 
                </div>
            )}
        </div>
    );
}

export default ProfileButton;