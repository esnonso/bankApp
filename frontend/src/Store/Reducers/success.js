import { ADD_SUCCESS} from '../actionTypes';

function errors (state = {message: null}, action ) {
    switch (action.type) {
        case ADD_SUCCESS:
            return {...state, message: action.errors};
        default:
            return state
    }
}

export default errors;