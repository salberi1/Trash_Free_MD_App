import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import Org_menu from "../org_menu.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Org_menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100

  },
});
