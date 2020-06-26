import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = props => {
  return <Text style={{...styles.title, ...props.style}}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  }
});

export default Title;
