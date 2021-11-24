import React, { useState } from 'react';
import ThemeContext from './themeContext';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeState = ({ children }) => {


    let system = useColorScheme() === 'dark';
    const [dark, setDark] = useState(system)
    const getMode = async () => {
        try {
            const data = await AsyncStorage.getItem('@mode')
            if (data) {
                const mode = JSON.parse(data).mode
                if (mode === true) {
                    setDark(mode)
                } else if (mode === false) {
                    setDark(mode)
                }
            }

        } catch (err) {
            console.error(err)
        }
    }
    // getMode();
    const toggleDark = async (mode) => {
        try {
            if (mode) {
                await AsyncStorage.setItem('@mode', JSON.stringify({ mode: true }))
                setDark(true)
            } else {
                await AsyncStorage.setItem('@mode', JSON.stringify({ mode: false }))
                setDark(false)
            }

        } catch (err) {
            console.error(err)
        }

        // console.log(dark)
    }

    return <ThemeContext.Provider
        value={{ dark, toggleDark, getMode }}
    >
        {children}
    </ThemeContext.Provider>
}

export default ThemeState;

