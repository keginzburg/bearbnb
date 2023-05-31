import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

import "./Nav.css";

const Navbar = () => {
    const location = useLocation();
    const unfixed = location.pathname !== "/" ? "unfixed" : null;

    return (
        <div className={`nav ${unfixed}`}>
            <Logo />
            <SearchBar />
            <Menu />
        </div>
    );
}

export default Navbar;