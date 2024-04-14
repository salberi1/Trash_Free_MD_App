import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading, text_box } from "../Features/Design.js";


export default function Create_Account_Names({navigation}){
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const nameLength = ()=>{
        if ( firstname.length < 2 && lastname.length < 2){
            Alert.alert('First and last names are too short, make sure they are at least 2 characters!')
        }else if ( lastname.length < 2 && firstname.length >= 2){
            Alert.alert('Last name too short, make sure it is at least 2 characters!')
        }else if ( firstname.length < 2 && lastname.length >= 2){
            Alert.alert('First name is too short, make sure it is at least 2 characters!')
        }else{
            navigation.navigate("Contact Information");
        }
    }

    return(
        <View style={ background }>
            <Text style={ [heading, {marginBottom: '10%'}]}> Enter your name: </Text>
            <Text>*Required</Text>
            <TextInput
                style={[text_box, {marginBottom: '5%'}]}
                placeholder='first name...'
                onChangeText={(text) => setFirstName(text)}
            />
            <Text>*Required</Text>
            <TextInput
                style={[text_box, {marginBottom: '10%'}]}
                placeholder='last name...'
                onChangeText={(text) => setLastName(text)}
            />
            <TouchableOpacity style={submit_button} onPress={nameLength}>
                <View style={format}>
                <Text style={submit_button_text}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
