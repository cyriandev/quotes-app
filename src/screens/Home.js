import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Dimensions, StatusBar } from 'react-native'
import Header from '../components/Header';
import QuotesItem from '../components/QuotesItem';
import QuotesContext from '../context/quotes/quotesContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from "../components/Banner"
import ThemeContext from '../context/theme/themeContext';

const WIDTH = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    const { loading, getQuotes, quotes, getCategories, categories, getFavourates, favourates } = useContext(QuotesContext);
    const { dark, getMode } = useContext(ThemeContext)
    const [page, setPage] = useState(1);

    useEffect(() => {
        getCategories()
        getFavourates()
        getMode()
        getQuotes(page, categories);
    }, [page])

    const loadMore = () => {
        setPage(page + 1);
    }

    return (
        <View style={[styles.container, { backgroundColor: dark ? "black" : '#fff' }]}>
            <StatusBar barStyle={dark ? "light-content" : "dark-content"} backgroundColor={dark ? "black" : "#F0F3F3"} />
            <Header navigation={navigation} />

            <FlatList
                data={quotes}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <QuotesItem key={index} quote={item} index={index} />}
                keyExtractor={(_, index) => index.toString()}
                onRefresh={() => console.log('refresh')}
                refreshing={loading}
                ListEmptyComponent={
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: WIDTH }}>
                        <MaterialCommunityIcons name="comma" size={50} color="#bdbdbd" />
                    </View>}
                onEndReached={loadMore}
                onEndReachedThreshold={5}
            />
            <Banner />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    refresh: {
        padding: 10
    }
})
