import React, { useState } from 'react';
import ThemeContext from './themeContext';
import { useColorScheme } from 'react-native';

const ThemeState = ({ children }) => {

    const [dark, setDark] = useState(useColorScheme() === 'dark')

    // const toggleDark = (mode) => {
    //     if (mode) {
    //         setDark(true)
    //     } else {
    //         setDark(false)
    //     }
    // }

    return <ThemeContext.Provider
        value={{ dark }}
    >
        {children}
    </ThemeContext.Provider>
}

export default ThemeState;

