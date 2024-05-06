import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native';
import { colors } from './colors.js';

let TextInput = (props) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder={props.label}
      />
    </View>
  )
}

export default TextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    padding: 5, 
    width: 300, 
    alignSelf: 'center', 
    textAlign: 'left', 
    borderRadius: 10,
  },
  input: {
    backgroundColor: colors.colors.surface,
    textAlign: 'left',
    justifyContent: 'center',
    padding: 5,
  },
})