import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';



let Create_Account = () => {
    const [password, setPassword] = useState('');
    const [confirm_password, set_confirm_password] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const confirmAccount = () => {
        if (password === confirm_password){
            Alert.alert('Account successfully created');
        }else{
            Alert.alert('Error', 'Passwords Do Not Match');
        }
    };
    return(
        <View style={styles.background}>
            <Text 
            style={styles.heading}>CREATE ACCOUNT</Text>
            <Text>Choose Username: </Text>
            <TextInput 
                style={styles.text_box}
                placeholder="username..."
                multiline={false}
                onChangeText={(text) => setUsername(text)}/>
                
            <Text>Choose Password: </Text>
            <TextInput
                style={styles.text_box}
                placeholder="password..."
                secureTextEntry={true} // encrypts the password
                onChangeText={(text) => setPassword(text)}
            />
            <Text>Confirm Password: </Text>
            <TextInput    
                style={styles.text_box}
                placeholder="password..."
                secureTextEntry={true}
                onChangeText={(text) => set_confirm_password(text)}
            />
            <Text>Enter Email: </Text>
            <TextInput
                style={styles.text_box}
                placeholder="email..."
                multiline={false}
                onChangeText={(text) => setEmail(text)}
                />
            <Text>Enter Phone-Number: </Text>
            <TextInput 
                style={styles.text_box}
                placeholder="phone-number..."
                multiline={false}
                onChangeText={(text) => setPhoneNumber(text)}
            />

            <Text>Enter First-Name: </Text>
            <TextInput 
                style={styles.text_box}
                placeholder="first-name..."
                multiline={false}
                onChangeText={(text) => setFirstName(text)}
            />

            <Text>Enter Last-Name: </Text>
            <TextInput 
                style={styles.text_box}
                placeholder="last-name..."
                multiline={false}
                onChangeText={(text) => setLastName(text)}
            />

            <TouchableOpacity style={styles.container} onPress={confirmAccount}>
                <View style={styles.format}>
                <Text style={styles.text}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default Create_Account;

const styles = StyleSheet.create({
    text_box: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        padding: 5,
        textAlign: 'left',
        height: 30,
        width: 200,
        borderRadius: 8,
        marginBottom: 20
    },
    container: {
    
        borderWidth: 1,
        backgroundColor: '#efca66',
        width: 125,
        height: 40,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: 'gray'
    },

    format: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    background: {
        flex: 1,
        backgroundColor: '#afd8c9',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100,
        width: "100%",
        height: "100%"
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold'
      },

      heading: {
        fontSize: 24, 
        paddingBottom: 10,
        fontWeight: 'bold'
      }
});

