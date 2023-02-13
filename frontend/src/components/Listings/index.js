import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../store/listings";

import ListingsIndexItem from "./ListingIndexItem";

const ListingsIndex = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.entities.users);
    const listings = useSelector(state => Object.values(state.entities.listings));

    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch])

    const loadingListings = (listings) => {
        if (listings.length === 0) {
            return (
                <li>Loading...</li>
            )
        } else {
            return listings.map(listing => <ListingsIndexItem key={listing.id} listing={listing} host={users[listing.hostId]} />);
        }
    }

    return (
        <div className="listings-container">
            <ul>
                {loadingListings(listings)}
            </ul>
        </div>
    );
}

export default ListingsIndex;