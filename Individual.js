import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import Button from './Features/Button.js';
import TextInput from './Features/TextInput.js';
import BackButton from './Features/BackButton.js';
import { colors } from './Features/colors.js';

export default function Individual({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plese enter the following {'\n'} information</Text>
      <Text style={styles.Name}>Name:</Text>
      <TextInput
        label="Enter Name"
      />
      <Text style={styles.Name}>Email:</Text>
      <TextInput
        label="Enter Email"
      />
      <Button  mode="contained" onPress={() => navigation.navigate("Policy Priority item selection")}>
        SUMBIT
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.colors.Chesapeake_Teal,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  title:{
    fontWeight: "bold",
    fontSize:28,
    color:"black",
    padding: 5,
    textAlign: 'center', 
    marginTop: 180, 
    },

    Name:{
      fontWeight: "bold",
      fontSize:24,
      color:"black",
      textAlign: 'center', 
      marginTop: 55, 
    }
});