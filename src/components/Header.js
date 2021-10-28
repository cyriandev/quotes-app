import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="comma" size={35} color={"black"} />
            <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                <TouchableNativeFeedback onPress={() => navigation.navigate('Menu')} background={TouchableNativeFeedback.Ripple('#e3e3e3')}>
                    <View style={{ borderRadius: 5, padding: 5 }}>
                        <Ionicons name="menu-outline" size={30} color="black" />
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20
    }
})
