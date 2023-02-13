import { combineReducers } from 'redux';
import usersReducer from './users';
import listingsReducer from './listings';

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer
});

export default entitiesReducer;