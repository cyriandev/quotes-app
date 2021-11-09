import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThemeContext from '../context/theme/themeContext';

const Header = ({ navigation }) => {
    const { dark } = useContext(ThemeContext)
    return (
        <>
            <View style={[styles.container, { backgroundColor: dark ? "black" : '#fff' }]}>
                <MaterialCommunityIcons name="comma" size={35} color={dark ? "#e4e6eb" : "black"} />
                <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('Menu')} background={TouchableNativeFeedback.Ripple(dark ? '#212529' : '#e3e3e3')}>
                        <View style={{ borderRadius: 5, padding: 5 }}>
                            <Ionicons name="menu-outline" size={30} color={dark ? "#e4e6eb" : "black"} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})
