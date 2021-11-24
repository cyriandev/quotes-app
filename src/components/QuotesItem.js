import React, { useContext } from 'react'
import { StyleSheet, Text, View, Dimensions, Share } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
import ThemeContext from '../context/theme/themeContext';
import QuotesContext from '../context/quotes/quotesContext';

const QuotesItem = ({ quote }) => {
    const { dark } = useContext(ThemeContext)
    const { addFavourates, favourates } = useContext(QuotesContext)


    const setFav = (fav) => {
        if (favourates.length) {
            const found = favourates.some((item) => item._id === fav._id);

            if (!found) {
                addFavourates([fav, ...favourates]);
            } else {
                addFavourates(favourates.filter((item) => item._id !== fav._id))
            }
        } else {
            addFavourates([fav]);
        }
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
        <View style={styles.container}>
            <View />
            <View>
                <Text style={{ fontSize: 19, color: dark ? "#e4e6eb" : "black" }}>{quote.content}</Text>
                <Text style={{ marginTop: 30, fontSize: 17, color: dark ? "rgba(235,235,245,.6)" : "gray" }}>{quote.author}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: dark ? "rgba(235,235,245,.6)" : "gray" }}>Swipe for more</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Text style={{ marginRight: 10, color: dark ? "#e4e6eb" : "black" }}>{index + 1}</Text> */}

                    <View style={{ borderRadius: 5, overflow: 'hidden', marginRight: 15 }}>
                        <TouchableNativeFeedback onPress={() => setFav(quote)} background={TouchableNativeFeedback.Ripple(dark ? '#212529' : '#e3e3e3')}>
                            <View style={{ borderRadius: 5, padding: 5 }}>
                                <Ionicons name={`bookmark${favourates.some(item => item._id === quote._id) ? "" : "-outline"}`} size={25} color={dark ? "#e4e6eb" : "black"} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                    <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                        <TouchableNativeFeedback onPress={share} background={TouchableNativeFeedback.Ripple(dark ? '#212529' : '#e3e3e3')}>
                            <View style={{ borderRadius: 5, padding: 5 }}>
                                <Ionicons name="ios-share-outline" size={30} color={dark ? "#e4e6eb" : "black"} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default QuotesItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH,
        justifyContent: "space-between",
        padding: 20
    }
})
