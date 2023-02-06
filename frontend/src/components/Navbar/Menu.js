import ProfileButton from "./ProfileButton";

import "./Menu.css"

const Menu = () => {
    return (
        <div className="menu-box">
            <div className="menu">
                <div className="host-box">
                    <button>Become a Bear</button>
                </div>
                <div className="per-link-box">
                    <i className="fa-brands fa-github"></i>
                </div>
                <div className="per-link-box">
                    <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="per-link-box">
                    <i className="fa-brands fa-angellist"></i>
                </div>
                <ProfileButton />
            </div>
        </div>
    );
}

export default Menu;