import React, { useContext } from 'react'
import { Share, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuotesContext from '../context/quotes/quotesContext';

const Favourate = ({ quote, dark }) => {
    const { favourates, addFavourates } = useContext(QuotesContext)


    const removeFav = (fav) => {
        addFavourates(favourates.filter((item) => item._id !== fav._id))
    }

    const share = async () => {
        try {
            await Share.share({
                message: quote.content + "\n\n - " + quote.author
            })
        } catch (err) {
            console.log(err)
        }

    }



    return (
        <View style={styles.quote}>
            <View style={{ flex: 1 }}>
                <Text style={{ color: dark ? "#e4e6eb" : "black" }}>{quote.content}</Text>
                <Text style={{ color: dark ? "rgba(235,235,245,.6)" : "gray" }}>- {quote.author}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 5
            }}>
                <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                    <TouchableNativeFeedback onPress={share} background={TouchableNativeFeedback.Ripple(dark ? '#212529' : '#e3e3e3')}>
                        <View style={{ borderRadius: 5, padding: 10 }}>
                            <Ionicons name="ios-share-outline" size={23} color={dark ? "#e4e6eb" : "black"} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                    <TouchableNativeFeedback onPress={() => removeFav(quote)} background={TouchableNativeFeedback.Ripple(dark ? '#212529' : '#e3e3e3')}>
                        <View style={{ borderRadius: 5, padding: 10 }}>
                            <Ionicons name="trash-outline" size={23} color={dark ? "#e4e6eb" : "black"} />
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </View>
        </View>
    )
}

export default Favourate

const styles = StyleSheet.create({
    quote: {
        marginVertical: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
