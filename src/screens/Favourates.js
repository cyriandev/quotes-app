import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Banner from '../components/Banner';
import QuotesContext from '../context/quotes/quotesContext';
import ThemeContext from '../context/theme/themeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourate from '../components/Favourate';

const Favourates = ({ navigation }) => {
    const { dark } = useContext(ThemeContext)
    const { favourates } = useContext(QuotesContext)
    return (
        <View style={{ flex: 1, backgroundColor: dark ? 'black' : '#fff' }}>
            <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center', marginHorizontal: 5, marginTop: 20 }}>
                <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                    <TouchableNativeFeedback onPress={() => navigation.goBack()} background={TouchableNativeFeedback.Ripple(dark ? '#212529' : '#e3e3e3')}>
                        <View style={{ borderRadius: 5, padding: 5 }}>
                            <Feather name="arrow-left" size={30} color={dark ? "#e4e6eb" : 'black'} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                {/* <Text style={{ color: dark ? "#e4e6eb" : 'black', fontWeight: '700', marginLeft: 10 }}>Menu</Text> */}
            </View>
            <Banner />
            <View style={{ padding: 20, flex: 1 }}>
                <Text style={{ color: dark ? "#e4e6eb" : 'black', fontWeight: '700', fontSize: 18, marginBottom: 10 }}>Your Favourates</Text>
                <FlatList
                    data={favourates}
                    renderItem={({ item, index }) => <Favourate quote={item} dark={dark} />}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="comma" size={50} color="#bdbdbd" />
                        </View>}
                // ItemSeparatorComponent={() => <View style={{ borderBottomColor: '#fafafa', borderWidth: 1 }} />}
                />
            </View>

        </View>
    )
}

export default Favourates

const styles = StyleSheet.create({})
