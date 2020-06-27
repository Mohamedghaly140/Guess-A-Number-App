import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import BodyText from '../components/BodyText';
import Title from '../components/Title';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Title style={{fontSize: 22}}>The Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          resizeMode='cover'
          fadeDuration={500}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highLight}>{props.roundsNumber}</Text>
          {' '}rounds to guess the number{' '}
          <Text style={styles.highLight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>
        New Game
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    marginVertical: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  highLight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
