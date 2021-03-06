import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
    isAuthenticated:false,
    user:{}// Object to save all the user info when the is logged in
}

function currentUser(state = DEFAULT_STATE, action) {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                //turns empty object to false if no keys and true if there are keys.This is what logs you in or out
                isAuthenticated: !!Object.keys(action.user).length,
                user:action.user
            };
            default:
                return state
    }
}

export default currentUser;