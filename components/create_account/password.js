import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading, text_box, make_cleanup_live_button } from "../Features/Design.js";


export default function Create_Account_Password(navigate){

    const [password, setPassword] = useState('');
    const [confirm_password, set_confirm_password] = useState('');

    const confirmAccount = () => {
        if (password === confirm_password){
            Alert.alert('Account successfully created');
        }else{
            Alert.alert('Error', 'Passwords Do Not Match');
        }
    };

    return(
        <View style={background}>
            <Text style={ [heading, {marginBottom: '10%'}] }> Enter Password: </Text>
            <Text>*Required</Text>
            <TextInput
                placeholder='Enter Password...'
                style={[text_box, {marginBottom: '5%'}]}
                onChangeText={(text) => setPassword(text)}
            />
            <Text>*Required</Text>
            <TextInput
                placeholder='Confirm Password...'
                style={[text_box, {marginBottom: '10%'}]}    
                onChangeText={(text) => set_confirm_password(text)}
            />
            <View>
                <Text>Password has 8 - 12 characters</Text>
                <Text>Password has at least 1 number</Text>
                <Text>Password has at least 1 lowercase letter</Text>
                <Text>Passowrd has at least 1 capital letter</Text>
                <Text>Password has at least 1 special character</Text>
            </View>

            <TouchableOpacity style={make_cleanup_live_button} onPress={confirmAccount}>
                <View style={format}>
                    <Text style={ submit_button_text }>Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}