import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading } from "../Features/Design.js"


let Create_Account = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [confirm_password, set_confirm_password] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const confirmAccount = async () => {
        try {
            if (password === confirm_password) {
                const userData = {
                    username: username,
                    password: password,
                    email: email, 
                    mobile: phone_number,
                    first_name: firstname,
                    last_name: lastname
                };

                const response = await fetch('http://172.20.10.3:3000/createUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {
                    // User created successfully
                    Alert.alert('Success', 'Account created successfully');
                    navigation.navigate("Home Page");
                } else {
                    // Error creating user
                    Alert.alert('User already exists', 'Try signing in');
                }
            } else {
                // Passwords do not match
                Alert.alert('Error', 'Passwords do not match');
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };
    
    return(
        <View style={background}>
            <View style={{marginVertical: '10%'}}>
            <Text 
            style={heading}>CREATE ACCOUNT</Text>
            </View>
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
            <Text>Enter Phone-Number (optional): </Text>
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

            <TouchableOpacity style={submit_button} onPress={confirmAccount}>
                <View style={format}>
                <Text style={submit_button_text}>SUBMIT</Text>
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
});

