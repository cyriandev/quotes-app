import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import QuotesState from './src/context/quotes/QuotesState';
import Home from './src/screens/Home';
import Menu from './src/screens/Menu';
import RNBootsplash from "react-native-bootsplash";
import ThemeState from './src/context/theme/ThemeState';
import Favourates from './src/screens/Favourates';

const App = () => {
  const Stack = createStackNavigator();

  useEffect(() => {
    RNBootsplash.hide();
  }, [])

  return (
    <QuotesState>
      <ThemeState>
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
            <Stack.Screen name="Favourates" component={Favourates} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeState>
    </QuotesState>
  );
};

export default App;
