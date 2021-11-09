import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AdMobBanner } from 'react-native-admob';
const Banner = () => {


    return (
        <View style={styles.banner}>
            <AdMobBanner
                adSize="banner"
                adUnitID="ca-app-pub-9517559323051124/3919201813"
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
            />
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    banner: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 5
    }
})
