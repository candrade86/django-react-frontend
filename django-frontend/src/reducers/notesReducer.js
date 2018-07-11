import { GETTING, GOT, ERROR } from '../actions';

const initialState = {
    notes: [],
    getting: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) { 
        case GETTING:
            return { ...state, getting: true };
        case GOT:
            return { ...state, notes: action.notes, getting: false, error: null };
        case ERROR:
            return { ...state, error: action.errorMessage }                  
        default:
            return state;   
    }
}