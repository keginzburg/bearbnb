// import csrfFetch from "./csrf";

const RECEIVE_LISTINGS = 'listings/receiveListings';
const RECEIVE_USERS = 'users/receiveUsers';

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    };
};

// export const fetchUsers = () => async dispatch => {
//     const response = await csrfFetch("/api/users")

//     if (response.ok) {
//         const data = await response.json();
//         dispatch(receiveUsers(data))
//         return response;
//     }
// }

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_LISTINGS:
            Object.values(action.listings).forEach(listing => {
                const { host } = listing;
                nextState[host.id] = host;
            })
            return nextState;
        default:
            return nextState;
    };
};

export default usersReducer;