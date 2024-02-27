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
        <View>
            <Text 
            style={{fontSize: 24, paddingBottom: 10}}>CREATE ACCOUNT</Text>
            <Text>Choose Username: </Text>
            <TextInput 
                style={styles.text_box}
                placeholder="username..."
                multiline={true}
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
                multiline={true}
                onChangeText={(text) => setEmail(text)}
                />
            <Text>Enter Phone-Number: </Text>
            <TextInput 
                style={styles.text_box}
                placeholder="phone-number..."
                multiline={true}
                onChangeText={(text) => setPhoneNumber(text)}
            />

            <Text>Enter First-Name: </Text>
            <TextInput 
                style={styles.text_box}
                placeholder="first-name..."
                multiline={true}
                onChangeText={(text) => setFirstName(text)}
            />

            <Text>Enter Last-Name: </Text>
            <TextInput 
                style={styles.text_box}
                placeholder="last-name..."
                multiline={true}
                onChangeText={(text) => setLastName(text)}
            />

            <TouchableOpacity style={styles.container} onPress={confirmAccount}>
                <Text style={styles.text}>Submit</Text>
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
        marginBottom: 10
    },
    container: {
        borderWidth: 1,
        backgroundColor: '#9ab880',
        width: 100,
        height: 35,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 6
    }

});

