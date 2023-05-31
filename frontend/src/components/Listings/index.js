import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../store/listings";

import ListingsIndexItem from "./ListingIndexItem";

import "./ListingsIndex.css";

const ListingsIndex = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const users = useSelector(state => state.entities.users);
    let listings = useSelector(state => Object.values(state.entities.listings));

    let sampleListings = [
        {
            name: "Lady of the Lake-Poconos Premier Lakefront Retreat",
            location: "East Stroudsburg, Pennsylvania",
            miles_away: "67",
            availability: "Dec 4 - 9",
            price: 144,
            rating: 4.92,
            image: 'https://a0.muscache.com/im/pictures/miso/Hosting-673753152039498122/original/c136e486-ce55-4aed-8724-e6deaff67909.jpeg?im_w=1200',
            type: "cabin"
        },
        {
            name: "The Lake Cottage: A Sweetwater Stay",
            location: "Orange, Massachusetts",
            miles_away: "153",
            availability: "Sep 18 - 24",
            price: 607,
            rating: 5.0,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-547546026940255992/original/27a93237-2870-4b6d-bee3-d5db820a84ab.jpeg?im_w=1200",
            type: "arctic"
        },
        {
            name: "NEW Poconos Treetop Lakehouse: Lakefront, Elevator",
            location: "East Stroudsburg, Pennsylvania",
            miles_away: "68",
            availability: "Aug 28 - Sep 2",
            price: 858,
            rating: 5.0,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-665819087296104155/original/d17b5fe9-6c37-4353-8c38-85901cf8395c.jpeg?im_w=1200",
            type: "cave"
        },
        {
            name: "Airy Waterfront Escape with Dock & Paddle Boat!",
            location: "Huguenot, New York",
            miles_away: "60",
            availability: "Sep 11 - 16",
            price: 263,
            rating: 4.72,
            image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46358245/original/e02fa4d8-2cb2-4e87-a523-091e5bd78bf6.jpeg?im_w=1200",
            type: "tropical"
        },
        {
            name: "LAKE FRONT! Burden Lake House. 2.5 hours from NYC",
            location: "Averill Park, New York",
            miles_away: "130",
            availability: "Oct 17 - 23",
            price: 615,
            rating: 5.0,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-49769902/original/09b94e0d-0c59-4d92-92ba-cc297bed4899.jpeg?im_w=1200",
            type: "farm"
        },
        {
            name: "Slalom Run (Lakefront Cottage)",
            location: "Hammondsport, New York",
            miles_away: "203",
            availability: "Nov 4 - 10",
            price: 315,
            rating: 4.97,
            image: "https://a0.muscache.com/im/pictures/28b008aa-4238-4c6c-a903-b6a5ae28e33e.jpg?im_w=1200",
            type: "beach"
        },
        {
            name: "Direct Waterfront/Chefs indoor & outdoor kitchen!",
            location: "New Fairfield, Connecticut",
            miles_away: "59",
            availability: "Sep 11 - 16",
            price: 1400,
            rating: "New",
            image: "https://a0.muscache.com/im/pictures/e24ed0a8-7c95-43a5-8eed-b1976bd58fed.jpg?im_w=1200",
            type: "lakefront"
        },
        {
            name: "Lakefront Lakeview Villa 4 Bed 4 bath sleeps 12+",
            location: "Lake Harmony, Pennsylvania",
            miles_away: "87",
            availability: "Sep 11 - 16",
            price: 315,
            rating: 4.9,
            image: "https://a0.muscache.com/im/pictures/3755723c-8369-45d3-ad9f-e6ace8fe69e0.jpg?im_w=1200",
            type: "desert"
        }
    ]

    if (location.search.includes('category')) {
        let filter = location.search.split('=')[1];
        listings = listings.filter(listing => listing.propertyType === filter);
    }

    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch])

    const loadingListings = (listings) => {
        if (listings.length === 0) {
            return (
                <li>Loading...</li>
            )
        } else {
            // debugger
            return listings.map(listing => <ListingsIndexItem key={listing.id} listing={listing} host={users[listing.hostId]} />);
        }
    }

    return (
        <div className="listings-container">
            <ul className="listings-idx">
                {loadingListings(listings)}
            </ul>
        </div>
    );
}

export default ListingsIndex;