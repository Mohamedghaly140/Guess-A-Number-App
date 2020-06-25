import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = +enteredValue;
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number Has to Be A Number Between 1 to 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmOutput;

  if (confirmed) {
    confirmOutput = (
      <Card style={styles.summary}>
        <Text style={{fontSize: 18}}>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='Start Game' onPress={() => props.onStartGame(selectedNumber)} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={{fontSize: 18}}>Select A Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttons}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
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
    marginVertical: 15,
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
    width: 90,
  },
  input: {
    width: 60,
    textAlign: 'center',
    fontSize: 16,
  },
  summary: {
    marginTop: 20,
    alignItems: 'center'
  },
});

export default StartGameScreen;
