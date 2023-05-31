import csrfFetch from "./csrf";
import { closeModal } from "./uiReducer";

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
        storeCurrentUser(data.user);
        dispatch(setCurrentUser(data.user));
        dispatch(closeModal())
        return response;
    }
}

export const signup = user => async dispatch => {
    const { fname, lname, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ f_name: fname, l_name: lname, email, password })
    });

    if (response.ok) {
        const data = await response.json();
        storeCurrentUser(data.user);
        dispatch(setCurrentUser(data.user));
        dispatch(closeModal())
        return response;
    }
}

const REMOVE_CURRENT_USER = "session/removeCurrentUser";

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
};

export const logout = () => async dispatch => {
    const response = await csrfFetch("/api/session", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        storeCurrentUser(null);
        dispatch(removeCurrentUser());
        return response;
    }
}

export const storeCSRFToken = (response) => {
    const csrfToken = response.headers.get('X-CSRF-Token');
    if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
};

export const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}

export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
}

const initialState = { user: JSON.parse(sessionStorage.getItem("currentUser")) }

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