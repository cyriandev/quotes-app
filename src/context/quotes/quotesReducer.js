import {
    GET_QUOTES,
    QUOTES_LOADING,
    QUOTES_ERROR,
    GET_CATEGORIES,
    ADD_CATEGORIES,
    GET_NEW_QUOTES,
    GET_FAVOURATES,
    ADD_FAVOURATES,
    REFRESH_QUOTES
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
        case REFRESH_QUOTES:
            return {
                ...state,
                quotes: [],
                quotes_loading: false
            }
        case GET_FAVOURATES:
        case ADD_FAVOURATES:
            return {
                ...state,
                favourates: action.payload
            }
        case GET_NEW_QUOTES:
            return {
                ...state,
                quotes: action.payload,
                quotes_loading: false
            }
        case GET_CATEGORIES:
        case ADD_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        case QUOTES_ERROR:
            return {
                ...state,
                error: action.payload,
                quotes_loading: false
            }
        default:
            return state;
    }
}