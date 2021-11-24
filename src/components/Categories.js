import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import QuotesContext from '../context/quotes/quotesContext';

const Categories = ({ dark }) => {

    const { categories, addCategory, refreshQuotes } = useContext(QuotesContext);

    const myCategories = [
        { id: 1, category: 'life' },
        { id: 2, category: 'love' },
        { id: 3, category: 'science' },
        { id: 4, category: 'wisdom' },
        { id: 5, category: 'friendship' },
        { id: 6, category: 'famous-quotes' },
        { id: 7, category: 'happiness' },
        { id: 8, category: 'inspirational' },
        { id: 9, category: 'technology' },
        { id: 10, category: 'politics' },
    ]

    const setCategory = (category) => {
        if (categories.length) {
            const found = categories.some((item) => item.id === category.id);

            if (!found) {
                addCategory([...categories, category]);
            } else {
                addCategory(categories.filter((item) => item.id !== category.id))
            }
        } else {
            addCategory([category]);
        }
    }
    const allCategories = () => {
        if (categories.length === myCategories.length) {
            addCategory([]);
        } else {
            addCategory(myCategories);
        }
    }


    return (
        <View style={{ flexDirection: 'row', marginVertical: 10, flexWrap: 'wrap' }}>


            <View style={{ borderRadius: 20, overflow: 'hidden', margin: 5 }}>
                <TouchableNativeFeedback onPress={allCategories} background={TouchableNativeFeedback.Ripple(dark ? 'gray' : '#fff')}>
                    <View style={[styles.btn, { backgroundColor: categories.length === myCategories.length ? '#313644' : '#e3e3e3' }]}>
                        <Text style={{ color: dark ? (categories.length === myCategories.length ? "#fff" : "#212529") : (categories.length === myCategories.length ? "#fff" : 'gray') }}>All Categories</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            {myCategories.map((category, index) => (
                <View key={index} style={{ borderRadius: 20, overflow: 'hidden', margin: 5 }}>
                    <TouchableNativeFeedback onPress={() => setCategory(category)} background={TouchableNativeFeedback.Ripple(dark ? 'gray' : '#fff')}>
                        <View style={[styles.btn, { backgroundColor: categories.some((item) => item.id === category.id) ? '#313644' : '#e3e3e3' }]}>
                            <Text style={{ color: dark ? (categories.some((item) => item.id === category.id) ? "#fff" : "#212529") : (categories.some((item) => item.id === category.id) ? "#fff" : 'gray') }}>{category.category}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            ))
            }

        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    btn: {
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
    }
})
