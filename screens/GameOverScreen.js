import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import BodyText from '../components/BodyText';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <BodyText>Number of rounds: {roundsNumber} </BodyText>
      <BodyText>User Number: {userNumber} </BodyText>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
