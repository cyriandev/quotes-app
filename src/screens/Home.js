import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import Header from '../components/Header';
import QuotesItem from '../components/QuotesItem';
import QuotesContext from '../context/quotes/quotesContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from "@react-native-community/netinfo";
import Banner from "../components/Banner"

const WIDTH = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    const { loading, getQuotes, quotes, errors } = useContext(QuotesContext);

    const [isRechable, setIsRechable] = useState(true)
    const [page, setPage] = useState(1);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsRechable(state.isInternetReachable);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        getQuotes(page);
    }, [page])

    const loadMore = () => {
        setPage(page + 1);
    }

    return (
        <View style={styles.container}>
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
        flex: 1,
        backgroundColor: '#fff'
    },
    refresh: {
        padding: 10
    }
})
