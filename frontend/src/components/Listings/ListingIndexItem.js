import { Link } from 'react-router-dom';

const ListingsIndexItem = ({listing, host}) => {


    // const toRating = (number) => {
    //     if (Number.isInteger(number)) {
    //         return number + ".0";
    //     } else {
    //         return number;
    //     }
    // }

    // debugger
    
    return (
        <Link to={`/listings/${listing.id}`}>
            <li className="listings-idx-item">
                <div className="listings-idx-img-container">
                    <img className="thumb-1" src={listing.photoUrls[0] ? listing.photoUrls[0] : "https://previews.123rf.com/images/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg"} alt={listing.name} />
                </div>
                <div className="listings-idx-item-info">
                    <div className="listings-idx-item-head">
                        <h1 className="l-h1">{listing.title}</h1>
                        <h2 className="l-h2">
                            <div className="star-icon">
                                <i className="fa-solid fa-star"></i>
                            </div>
                            {/* {toRating(listing.rating)} */}
                            4.72
                        </h2>
                    </div>
                    <div className="listings-idx-item-addl">
                        <h3 className="l-h3">{listing.street}</h3>
                        <h4 className="l-h4">{listing.city}, {listing.zipCode}</h4>
                        <h5 className="l-h5">${listing.price} <span className="l-night">night</span></h5>
                    </div>
                </div>
            </li>
        </Link>
    )
};

export default ListingsIndexItem;