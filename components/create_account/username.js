import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading, text_box } from "../Features/Design.js";

export default function Create_Account_Username({navigation}){
    const [username, setUsername] = useState('');

    const checkUsername = () => {
        if(username.length >= 2){
            navigation.navigate("Password");
        }else{
            Alert.alert('Username too short');
        }
    }
    return(
        <View style={ background }>
            <Text style={[heading, {marginBottom: '10%'}]}>Enter a Username</Text>
            <Text>*Required</Text>
            <TextInput 
                style={[text_box, {marginBottom: '10%'}]}
                placeholder='Enter username...'
                onChangeText={(text) => setUsername(text)}
            />

            <TouchableOpacity style={ submit_button } onPress={checkUsername}>
                <View style={ format }>
                    <Text style={submit_button_text}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};