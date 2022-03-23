import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
// import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
// style={useAnimatedStyle(() => {
//   return {transform: [{scale: withTiming(2)}]};
// })}
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
