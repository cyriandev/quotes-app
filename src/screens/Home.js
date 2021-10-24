import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import Header from '../components/Header';
import QuotesItem from '../components/QuotesItem';
import QuotesContext from '../context/quotes/quotesContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WIDTH = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    const { loading, getQuotes, quotes, errors } = useContext(QuotesContext);

    useEffect(() => {
        getQuotes();
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
                ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: WIDTH }}><MaterialCommunityIcons name="comma" size={50} color="#bdbdbd" /></View>}
            />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
