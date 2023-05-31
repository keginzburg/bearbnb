export const OPEN_AUTH_MODAL = "ui/OPEN_AUTH_MODAL";

export const openAuthModal = () => {
    return {
        type: OPEN_AUTH_MODAL
    }
}

export const CLOSE_MODAL = "ui/CLOSE_MODAL";
export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

const preloadedState = {
    modal: null
}

const uiReducer = (state = preloadedState, action) => {
    Object.freeze(state);
    let nextState = { ...state };

    switch (action.type) {
        case OPEN_AUTH_MODAL:
            nextState.modal = "authModal"
            return nextState;
        case CLOSE_MODAL:
            nextState.modal = null;
            return nextState;
        default:
            return state;
    }
}

export default uiReducer;