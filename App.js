import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? console.log("dark") : console.log("light"),
  };

  return (
    <View>
      <Text>Quotes</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
