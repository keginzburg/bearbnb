import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className="search-box">
            <div className="search-bar">
                <div className="font-st">
                    Anywhere
                </div>
                <div className="divider">

                </div>
                <div className="font-st">
                    Any week
                </div>
                <div className="divider">

                </div>
                <div className="font-st font-var">
                    Add guests
                </div>
                <div className="search-icon-box">
                    <div className="search-icon">
                        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;