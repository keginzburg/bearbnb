import csrfFetch from "./csrf";

const SET_CURRENT_USER = "session/setCurrentUser";

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        user
    };
};

export const login = user => async dispatch => {
    const { email, password } = user;
    const response = await csrfFetch("/api/session", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    
    if (response.ok) {
        const data = await response.json();
        dispatch(setCurrentUser(data.user));
        return response;
    }
}

const REMOVE_CURRENT_USER = "session/removeCurrentUser";

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
};

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = { ...state };

    switch (action.type) {
        case SET_CURRENT_USER:
            nextState.user = action.user;
            return nextState;
        case REMOVE_CURRENT_USER:
            nextState.user = null;
            return nextState;
        default:
            return nextState;
    }
};

export default sessionReducer;