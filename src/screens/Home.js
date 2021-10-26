import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import Header from '../components/Header';
import QuotesItem from '../components/QuotesItem';
import QuotesContext from '../context/quotes/quotesContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NetInfo from "@react-native-community/netinfo";

const WIDTH = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    const { loading, getQuotes, quotes, errors } = useContext(QuotesContext);

    const [isRechable, setIsRechable] = useState(true)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsRechable(state.isInternetReachable);
        });

        getQuotes();

        return () => {
            unsubscribe();
        }
    }, [])

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
                onRefresh={() => getQuotes()}
                refreshing={loading}
                ListEmptyComponent={
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: WIDTH }}>
                        <MaterialCommunityIcons name="comma" size={50} color="#bdbdbd" />
                        {!isRechable ?
                            <Text>You're currently offline</Text> : <TouchableOpacity onPress={() => getQuotes()}><Text style={styles.refresh}>Refresh</Text></TouchableOpacity>
                        }
                    </View>}
            />

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
