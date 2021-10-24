import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <TouchableNativeFeedback onPress={() => navigation.goBack()}>
                    <View style={{ borderRadius: 5, padding: 5 }}>
                        <Feather name="arrow-left" size={30} color="black" />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <Text>Menu</Text>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})
