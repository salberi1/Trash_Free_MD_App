import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { colors } from './colors.js';

export default function Button({ mode, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined'
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '40%',
    backgroundColor: colors.colors.Sunflower,
    color: colors.colors.Sunflower,
    marginVertical: 70,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    lineHeight: 26,
  },
})