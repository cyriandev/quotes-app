import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import { version } from '../../package.json';
import Banner from '../components/Banner';
import ThemeContext from '../context/theme/themeContext';

const Menu = ({ navigation }) => {
    const { dark } = useContext(ThemeContext)
    return (
        <View style={[styles.container, { backgroundColor: dark ? 'black' : '#fff' }]}>

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
            <View style={{ padding: 20 }}>

                <View>
                    <Text style={{ color: dark ? "#e4e6eb" : 'black', fontWeight: '700', fontSize: 18, marginBottom: 10 }}>About</Text>
                    <Text style={{ color: dark ? "rgba(235,235,245,.6)" : 'black' }}>This app gives random inspirational quotes. includes over 2000 quotes by 900 authors.</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <Text style={{ color: dark ? "#e4e6eb" : 'black' }}>App Version: </Text>
                        <Text style={[{ color: 'gray' }]}>{version}</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})