import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../theme/Colors';

const Clock = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    marginBottom: 20,
    color: Colors.BLACK,
  },
});

export default Clock;
