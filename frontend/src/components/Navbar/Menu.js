import { Link } from 'react-router-dom';
import ProfileButton from "./ProfileButton";

import "./Menu.css"

const Menu = () => {
    return (
        <div className="menu-box">
            <div className="menu">
                <Link className="host-box" to="/not-found">
                    <button>Become a Bear</button>
                </Link>
                <a className="per-link-box" href="http://github.com/keginzburg" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a className="per-link-box" href="https://www.linkedin.com/in/kyleginzburg" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="per-link-box" href="https://angel.co/u/kyle-ginzburg" target="_blank">
                    <i className="fa-brands fa-angellist"></i>
                </a>
                <ProfileButton />
            </div>
        </div>
    );
}

export default Menu;