import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './error';
import success from './success';

const rootReducer = combineReducers({
    currentUser,
    errors,
    success
})

export default rootReducer;