import React, { useReducer } from 'react';
import axios from 'axios';
import QuotesContext from './quotesContext';
import QuotesReducer from './quotesReducer';
import {
    CLEAR_ERRORS,
    GET_QUOTES,
    QUOTES_LOADING,
    QUOTES_ERROR
} from '../types';

const QuotesState = ({ children }) => {
    const initialState = {
        quotes: [],
        errors: null,
        quotes_loading: false,
        dark: false
    }
    const [state, dispatch] = useReducer(QuotesReducer, initialState);


    // Get quotes
    const getQuotes = async (page) => {

        setQuotesLoading();
        try {
            const res = await axios.get(`https://api.quotable.io/quotes?page=${page}`);

            let list = res.data.results.sort(() => Math.random() - 0.5)

            dispatch({
                type: GET_QUOTES,
                payload: list
            })

        } catch (err) {
            dispatch({
                type: QUOTES_ERROR,
                payload: (err.response || {}).data
            })
            console.error(err)

            // setTimeout(() => clearErrors(), 5000);
        }
    }



    // Clear Errors
    const clearErrors = () => dispatch({
        type: CLEAR_ERRORS
    })

    // Set Loading
    const setQuotesLoading = () => dispatch({ type: QUOTES_LOADING })


    return <QuotesContext.Provider
        value={{
            quotes: state.quotes,
            loading: state.quotes_loading,
            errors: state.errors,
            dark: state.dark,
            getQuotes
        }}
    >
        {children}
    </QuotesContext.Provider>
}

export default QuotesState;

