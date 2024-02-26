import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';

import Org_menu from "./org_menu.js"
import V_with_menu from './v_with_app.js';

export default function App() {
  return (
    <View style={styles.container}>
      <V_with_menu/>
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
