import { View, Text, StyleSheet,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Signin()
{
    const [email, setEmail] = useState('email');
    const [password,setPassword] = useState('password');

    return(
        <View style = {styles.container}>
            <Text style = {styles.boldText}>Email:</Text>
            <TextInput 
            style = {styles.input}
            placeholder='Enter Email'
            />

          <Text style = {styles.boldText}>Password:</Text>
            <TextInput 
            style = {styles.input}
            placeholder='Enter Password'
            />
            <Text>email:{email} password:{password}</Text>
            
            <View>
            <Pressable style = {styles.button}>
              <Text>
                Submit
              </Text>
            </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#afd8c9',
      alignItems: 'center',
      justifyContent: 'center',
      
  
    },

    input:{
        borderWidth:1,
        borderColor: '#777',
        padding:8,
        margin:10,
        width:200,
        backgroundColor: '#efca66'
    },

    boldText:{
      fontWeight: 'bold',
      fontSize: 18
    },

    button:{
        borderWidth: 1,
        padding: 50,
        borderColor: '#777',
    }
    

});