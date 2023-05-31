const ShowHeader = ({listing: {title, city, state, country}}) => {
    return (
        <div className="show-header-container">
            <h1 className="show-header-title">{title}</h1>
            <div className="show-header-links">
                <div className="show-header-details">
                    <h2 className="l-h2 show-header-rating">
                        <div className="star-icon">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        4.72
                    </h2>
                    <div className="div-dot">•</div>
                    <h2 className="show-header-reviews">92 reviews</h2>
                    <div className="div-dot">•</div>
                    <h2>
                        <div className="medal-icon">
                            <i class="fa-solid fa-medal"></i>
                        </div>
                        Superbear
                    </h2>
                    <div className="div-dot">•</div>
                    <h2 className="show-header-location">{city}, {state}, {country}</h2>
                </div>
                <div className="show-header-buttons">
                    <button className="show-header-share">
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        <h2>Share</h2>
                    </button>
                    <button className="show-header-save">
                        <i className="fa-regular fa-heart"></i>
                        <h2>Save</h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowHeader;