import {
    CLEAR_ERRORS,
    GET_QUOTES,
    QUOTES_LOADING,
    QUOTES_ERROR
} from '../types';


export default (state, action) => {
    switch (action.type) {
        case QUOTES_LOADING:
            return {
                ...state,
                quotes_loading: true
            }
        case GET_QUOTES:
            return {
                ...state,
                quotes: [...state.quotes, ...action.payload],
                quotes_loading: false
            }
        case QUOTES_ERROR:
            return {
                ...state,
                error: action.payload,
                quotes_loading: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}