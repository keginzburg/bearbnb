import csrfFetch from "./csrf";

const RECEIVE_LISTINGS = 'listings/receiveListings';
const RECEIVE_LISTING = 'listings/receiveListing';

export const receiveListings = listings => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    };
};

export const receiveListing = listing => {
    return {
        type: RECEIVE_LISTING,
        listing
    };
};

export const fetchListings = () => async dispatch => {
    const response = await csrfFetch("/api/listings")

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveListings(data))
        return response;
    }
}

export const fetchListing = id => async dispatch => {
    const response = await csrfFetch(`/api/listings/${id}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveListing(data));
        return response;
    }
};

const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_LISTINGS:
            Object.values(action.listings).forEach(listing => {
                const { id, title, description, longitude, latitude, numberOfBaths, numberOfBeds, numberOfGuests, price, propertyType, street, city, state, country, zipCode, host, photoUrls } = listing;
                nextState[id] = { id, title, description, longitude, latitude, numberOfBaths, numberOfBeds, numberOfGuests, price, propertyType, street, city, state, country, zipCode, "hostId": host.id, photoUrls };
            })
            return nextState;
        case RECEIVE_LISTING:
            const { id, title, description, longitude, latitude, numberOfBaths, numberOfBeds, numberOfGuests, price, propertyType, street, city, state, country, zipCode, host, photoUrls } = action.listing;
            nextState[id] = { id, title, description, longitude, latitude, numberOfBaths, numberOfBeds, numberOfGuests, price, propertyType, street, city, state, country, zipCode, "hostId": host.id, photoUrls };
            return nextState;
        default:
            return nextState;
    };
};

export default listingsReducer;