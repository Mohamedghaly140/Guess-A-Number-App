import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: '#000',
    fontSize: 22,
  }
});

export default Header;