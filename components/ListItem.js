import React from 'react';
import { View, StyleSheet } from 'react-native';

import BodyText from './BodyText';

const ListItem = ({ value, roundNum }) => (
  <View style={styles.listItem}>
    <BodyText>#{roundNum}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ListItem;
