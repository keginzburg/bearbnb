import csrfFetch from "./csrf";

const RECEIVE_LISTINGS = 'listings/receiveListings';

export const receiveListings = listings => {
    return {
        type: RECEIVE_LISTINGS,
        listings
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

const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_LISTINGS:
            Object.values(action.listings).forEach(listing => {
                const { id, title, description, longitude, latitude, numberOfBaths, numberOfBeds, numberOfGuests, price, propertyType, street, city, country, zipCode, host } = listing;
                nextState[id] = { id, title, description, longitude, latitude, numberOfBaths, numberOfBeds, numberOfGuests, price, propertyType, street, city, country, zipCode, "hostId": host.id };
            })
            return nextState;
        default:
            return nextState;
    };
};

export default listingsReducer;