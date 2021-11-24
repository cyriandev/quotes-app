import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import ThemeContext from '../context/theme/themeContext'

const Theme = () => {
    const { dark, toggleDark } = useContext(ThemeContext)
    return (
        <View style={{ flexDirection: 'row', marginVertical: 10, flexWrap: 'wrap' }}>
            <View style={{ borderRadius: 20, overflow: 'hidden', margin: 5 }}>
                <TouchableNativeFeedback
                    onPress={() => toggleDark(true)}
                    background={TouchableNativeFeedback.Ripple(dark ? 'gray' : '#fff')}>
                    <View style={[styles.btn, { backgroundColor: dark ? '#313644' : '#e3e3e3' }]}>
                        <Text style={{ color: dark ? "#fff" : '#212529' }}>Dark</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={{ borderRadius: 20, overflow: 'hidden', margin: 5 }}>
                <TouchableNativeFeedback
                    onPress={() => toggleDark(false)}
                    background={TouchableNativeFeedback.Ripple(dark ? 'gray' : '#fff')}>
                    <View style={[styles.btn, { backgroundColor: dark ? '#e3e3e3' : '#313644' }]}>
                        <Text style={{ color: dark ? "#212529" : '#fff' }}>Light</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default Theme

const styles = StyleSheet.create({
    btn: {
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
    }
})
