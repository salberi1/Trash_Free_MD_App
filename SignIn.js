import { View, Text, StyleSheet,TextInput,Pressable, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

export default function Signin({navigation})
{
    const [email, setEmail] = useState('email');
    const [password,setPassword] = useState('password');

    return(
        <View style = {styles.container}>
            <Text style = {styles.boldText}>Email:</Text>
            <TextInput 
            style = {styles.input}
            placeholder='Enter Email...'
            onChangeText={(text) => setEmail(text)}
            />

          <Text style = {styles.boldText}>Password:</Text>
            <TextInput 
            style = {styles.input}
            placeholder='Enter Password...'
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            />
            <View>
            <TouchableOpacity style = {styles.button}>
              <Text
                style={styles.text}
              >
                SUBMIT
              </Text>
            </TouchableOpacity>
            </View>
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
        backgroundColor: '#fff',
        borderRadius: 50
    },
    boldText:{
      fontWeight: 'bold',
      fontSize: 18
    },
    button:{
        marginTop: 20,
        borderWidth: 1,
        height: 40,
        width: 150,
        borderColor: '#777',
        backgroundColor: '#efca66',
        borderRadius: 10
    },
    text: {
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 5,
      fontSize: 20,
      marginBottom: 5
    },
    forgot: {
      marginTop: 5,
      color: 'gray',
      fontSize: 12
    }      
});
    

});
