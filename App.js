import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';

import Org_menu from "./org_menu.js"
import V_with_menu from './v_with_app.js';
import Create_Account from './create_account.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Create_Account/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afd8c9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100

  },
});
