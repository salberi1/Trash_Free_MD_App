import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';

import Org_menu from "./components/organization_using_app/org_menu.js"
import V_with_menu from './components/volunteer_org_using_app/v_with_app.js';
import Create_Account from './components/create_account.js';
import Select_Policy_Ind from './components/individual/select_policy.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Select_Policy_Ind/>
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
