import React, { useReducer } from 'react';
import axios from 'axios';
import QuotesContext from './quotesContext';
import QuotesReducer from './quotesReducer';
import {
    GET_QUOTES,
    QUOTES_LOADING,
    QUOTES_ERROR,
    GET_CATEGORIES,
    ADD_CATEGORIES,
    REFRESH_QUOTES,
    GET_FAVOURATES,
    ADD_FAVOURATES
} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuotesState = ({ children }) => {
    const initialState = {
        quotes: [],
        categories: [],
        favourates: [],
        errors: null,
        quotes_loading: false,
        dark: false
    }
    const [state, dispatch] = useReducer(QuotesReducer, initialState);

    // get new quotes
    const refreshQuotes = async () => {
        setQuotesLoading();
        try {
            dispatch({
                type: REFRESH_QUOTES
            })
        } catch (err) {
            console.error(err)
        }
    }

    // Get quotes
    const getQuotes = async (page) => {
        setQuotesLoading();
        try {
            const response = await AsyncStorage.getItem('@categories')
            const categories = JSON.parse(response)
            let toUrl = '';
            if (categories) {
                toUrl = categories.map(item => item.category).join('|')
            }

            const res = await axios.get(`https://api.quotable.io/quotes?page=${page}&tags=${toUrl}`);

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

    // Get all categories from localstorage
    const getCategories = async () => {
        try {
            const res = await AsyncStorage.getItem('@categories')
            const categories = JSON.parse(res)
            dispatch({
                type: GET_CATEGORIES,
                payload: categories ? categories : []
            })
        } catch (err) {
            console.error(err)
        }
    }

    // get all favourates from localstorage
    const getFavourates = async () => {
        try {
            const res = await AsyncStorage.getItem('@favourates')
            const favourates = JSON.parse(res)
            dispatch({
                type: GET_FAVOURATES,
                payload: favourates ? favourates : []
            })
        } catch (err) {
            console.error(err)
        }
    }

    // add favourates to localstorage
    const addFavourates = async (items) => {
        try {
            await AsyncStorage.setItem('@favourates', JSON.stringify(items))
            dispatch({
                type: ADD_FAVOURATES,
                payload: items
            })
        } catch (err) {
            console.error(err)

        }
    }

    // add category to locastorage
    const addCategory = async (items) => {
        try {
            await AsyncStorage.setItem('@categories', JSON.stringify(items))
            dispatch({
                type: ADD_CATEGORIES,
                payload: items
            })

            refreshQuotes();

            getQuotes();
        } catch (err) {
            console.error(err)

        }
    }


    // Set Loading
    const setQuotesLoading = () => dispatch({ type: QUOTES_LOADING })


    return <QuotesContext.Provider
        value={{
            quotes: state.quotes,
            loading: state.quotes_loading,
            errors: state.errors,
            dark: state.dark,
            categories: state.categories,
            favourates: state.favourates,
            getQuotes,
            getCategories,
            addCategory,
            getFavourates,
            addFavourates
        }}
    >
        {children}
    </QuotesContext.Provider>
}

export default QuotesState;

