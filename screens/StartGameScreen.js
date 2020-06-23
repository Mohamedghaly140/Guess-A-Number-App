import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <TextInput />
        <View style={styles.buttons}>
          <View style={styles.btn}>
            <Button title="Reset" color={Colors.accent} onPress={() => {}} />
          </View>
          <View style={styles.btn}>
            <Button title="Confirm" color={Colors.primary} onPress={() => {}} />
          </View>
        </View>
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
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btn: {
    width: 90
  }
});

export default StartGameScreen;
