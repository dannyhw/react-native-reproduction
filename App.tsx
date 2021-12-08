/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Draggable} from './stories/Draggable';

const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  darker: '#222',
  black: '#000',
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: StyleProp<ViewStyle> = {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const titleStyle = [
    {
      color: isDarkMode ? Colors.white : Colors.black,
    },
    styles.title,
  ];

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={backgroundStyle}>
        <Draggable style={styles.draggable}>
          <Text style={titleStyle}>Hello World!</Text>
        </Draggable>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  draggable: {backgroundColor: 'white'},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
