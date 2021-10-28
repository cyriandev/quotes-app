import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import QuotesState from './src/context/quotes/QuotesState';
import Home from './src/screens/Home';
import Menu from './src/screens/Menu';
import RNBootsplash from "react-native-bootsplash";

const App = () => {
  const Stack = createStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? console.log("dark") : console.log("light"),
  // };

  useEffect(() => {
    RNBootsplash.hide();
  }, [])

  return (
    <QuotesState>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F3F3" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    </QuotesState>
  );
};

const styles = StyleSheet.create({});

export default App;
