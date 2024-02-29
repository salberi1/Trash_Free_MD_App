import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import SignIn from './SignIn';

export default function App() {
  
 
  return (
    
      
      <View  style={styles.container}>
        <SignIn label="Submit">

        </SignIn>
    </View>
    
  );
}





import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afd8c9',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    

  },

  header:{
    //paddingBottom:200,
    
  },

  boldText:
  {
    fontWeight:'bold',
    fontSize: 18
  }
});