import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

let BackButton = () => { //goBack }) {
  return (
    <TouchableOpacity style={styles.container}>
    </TouchableOpacity>
  )
}

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 30,
  },
  image: {
    width: 35,
    height: 24,
  },
})