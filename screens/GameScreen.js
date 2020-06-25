import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else rndNum;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 99, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttos}>
        <Button title='Lower' onPress={() => {}} />
        <Button title='Greater' onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginVertical: 15
  },
  buttos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
    textTransform: 'uppercase',
  },
});

export default GameScreen;
