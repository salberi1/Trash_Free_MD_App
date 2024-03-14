import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Button from '../Features/Button.js';
import TextInput from '../Features/TextInput.js';
import BackButton from '../Features/BackButton.js';
import { colors } from '../Features/colors.js';
import { submit_button, format, background, heading, submit_button_text } from '../Features/Design.js';

export default function Individual({navigation}) {
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  return (
    <View style={background}>
      <View style={{marginTop: 150}}>
      <Text style={heading}>Plese enter the following {'\n'} information</Text>
      </View>
      <Text style={styles.Name}>Name:</Text>
      <TextInput
        label="Enter Name"
        onChangeText={(text) => setName(text)} //store name in buffer
      />
      <Text style={styles.Name}>Email:</Text>
      <TextInput
        label="Enter Email"
        onChangeText={(text) => setEmail(text)} //store email address in buffer
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Policy Priority item selection")}
        style={submit_button}>
        <View style={format}>
          <Text style={submit_button_text}>SUBMIT</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',  
  },
    Name:{
      fontWeight: "bold",
      fontSize: 24,
      color:"black",
      textAlign: 'center', 
      marginTop: 55, 
    }
});