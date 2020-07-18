import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';

const MainButton = ({ onPress, title, accentColor }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View
      style={
        accentColor
          ? { ...styles.button, ...styles.accentButton }
          : styles.button
      }
    >
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  accentButton: {
    backgroundColor: colors.accent,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default MainButton;
