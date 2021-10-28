import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import { version } from '../../package.json';
const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center', marginHorizontal: 5, marginTop: 20 }}>
                <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                    <TouchableNativeFeedback onPress={() => navigation.goBack()}>
                        <View style={{ borderRadius: 5, padding: 5 }}>
                            <Feather name="arrow-left" size={30} color="black" />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <Text style={{ fontWeight: '700', marginLeft: 10 }}>Menu</Text>
            </View>
            <View style={{ padding: 20 }}>

                <View>
                    <Text style={{ fontWeight: '700', fontSize: 18, marginBottom: 10 }}>About</Text>
                    <Text>This app gives random inspirational quotes. includes over 2000 quotes by 900 authors.</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <Text>App Version: </Text>
                        <Text style={{ color: 'gray' }}>{version}</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})