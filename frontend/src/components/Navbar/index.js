import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

import "./Nav.css";

const Navbar = () => {
    return (
        <div className="nav">
            <Logo />
            <SearchBar />
            <Menu />
        </div>
    );
}

export default Navbar;