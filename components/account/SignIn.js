import { View, Text, StyleSheet,TextInput,Pressable, TouchableOpacity, SafeAreaView, DevSettings, Alert } from 'react-native'
import React, { useState } from 'react'
import { background, format, submit_button, heading, submit_button_text } from "../Features/Design.js"

export default function Signin({navigation})
{
    const [username, setUsername] = useState('username');
    const [password,setPassword] = useState('password');

    const confirmLogin = async ()=> {
      try {
        const userData = {
          username: username,
          password: password,
         };
    
         const response = await fetch('http://172.20.10.3:3000/userLogin',{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
         });
    
         if(response.ok){
          //user signed in successfully
          Alert.alert('Signed in Successfully');
          navigation.navigate("Home Page");
         }
    
         else{
          Alert.alert("Username or password are incorrect")
         }
      } catch (error) {
          Alert.alert('Error', 'Something went wrong. Please try again.');
      }
  };

    return(
        <View style = {background}>
          <View style={styles.stripe}>
          </View>
            <Text style = {heading}>Username:</Text>
            <TextInput 
            style = {styles.input}
            placeholder='enter username...'
            onChangeText={(text) => setUsername(text)}
            />

          <Text style = {heading}>Password:</Text>
            <TextInput 
            style = {styles.input}
            placeholder='enter password...'
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            />
            
            <TouchableOpacity 
            style = {submit_button}
            onPress={confirmLogin}>
              <View style={format}>
                <Text style={submit_button_text}>
                  SUBMIT
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={styles.forgot}>
                Forgot Username/Password
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("Create Account")}>
              <Text>create account</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => navigation.navigate("Main Menu")}>
              <Text>continue as guest</Text>            
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor: '#777',
        padding:8,
        margin:'3%',
        width:'50%',
        backgroundColor: '#fff',
        borderRadius: 50
    }, 
    forgot: {
      marginTop: 5,
      color: 'gray',
      fontSize: 12
    },
    stripe: {
      backgroundColor: '#9ab880',
      width: '100%',
      height: '10%',
      marginBottom: 40,
      marginTop: '35%'
    },       
});