/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import ClockScreen from './src/views/ClockScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.main}>
      <ClockScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
