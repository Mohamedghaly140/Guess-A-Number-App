import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
});

export default Input;
