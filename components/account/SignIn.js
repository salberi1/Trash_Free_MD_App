import { View, Text, StyleSheet,TextInput,Pressable, TouchableOpacity, SafeAreaView, DevSettings } from 'react-native'
import React, { useState } from 'react'
import { background, format, submit_button, heading, submit_button_text } from "../Features/Design.js"

export default function Signin({navigation})
{
    const [username, setUsername] = useState('username');
    const [password,setPassword] = useState('password');

    return(
        <View style = {background}>
          <View style={styles.stripe}>
          </View>
            <Text style = {heading}>Username:</Text>
            <TextInput 
            style = {styles.input}
            placeholder='enter esername...'
            onChangeText={(text) => setUsername(text)}
            />

          <Text style = {heading}>Password:</Text>
            <TextInput 
            style = {styles.input}
            placeholder='enter password...'
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            />
            
            <TouchableOpacity style = {submit_button}>
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