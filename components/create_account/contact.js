import { NavigationHelpersContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading, text_box } from "../Features/Design.js";


export default function Create_Account_Contact({navigation}){

    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');

    return(
        <View style={ background }>
            <Text style={[ heading, {marginBottom: '10%'} ]}>Enter your contact information: </Text>
            <Text>*Required</Text>
            <TextInput 
                style={ [ text_box, {marginBottom : '10%'}]} 
                placeholder='Email...'   
                onChangeText={(text) => setEmail(text)}
            />
            <Text>*Optional</Text>
            <TextInput 
                style={ [text_box, {marginBottom: '10%'}]}
                placeholder='Phone-number...'
                onChangeText={(text) => setPhoneNumber(text)}
            />

            <TouchableOpacity style={submit_button} onPress={() => navigation.navigate("Username")}>
                <View style={format}>
                    <Text style={submit_button_text}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};