import { NavigationHelpersContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading, text_box } from "../../Features/Design.js";


export default function Create_Account_Contact({ navigation, route }) {
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [emailError, setEmailError] = useState('');

    const checkEmail = async () => {
        if (!email.trim()) {
            setEmailError('Email is required');
        } else {
            try {
                const response = await fetch('http://10.0.0.79:3000/checkEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.exists) {
                        setEmailError('There\'s already an account registered\nwith this email. Please try signing in.');
                    } else {
                        setEmailError('');
                        navigation.navigate("Username", {
                            firstname: route.params.firstname,
                            lastname: route.params.lastname,
                            email: email,
                            phone_number: phone_number
                        });
                    }
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.error('Error checking email:', error);
                Alert.alert('Error', 'Something went wrong. Please try again.');
            }
        }
    };

    return (
        <View style={background}>
            <Text style={[heading, { marginBottom: '10%' }]}>Enter your contact information:</Text>
            <Text>*Required</Text>
            <TextInput
                style={[text_box, { marginBottom: '8%', borderColor: emailError ? 'red' : 'gray' }]}
                placeholder='Email...'
                onChangeText={(text) => setEmail(text)}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            <Text>*Optional</Text>
            <TextInput
                style={[text_box, { marginBottom: '10%' }]}
                placeholder='Phone-number...'
                onChangeText={(text) => setPhoneNumber(text)}
            />

            <TouchableOpacity style={submit_button} onPress={checkEmail}>
                <View style={format}>
                    <Text style={submit_button_text}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginBottom: 35,
        marginTop: -25, // Adjust this value as needed to bring the error text closer
    },
});
