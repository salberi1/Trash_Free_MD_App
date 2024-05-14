import { StatusBar, Vibration } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading, text_box } from "../../Features/Design.js";

export default function Create_Account_Username({navigation, route}){
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const validateUsername = async () => {
        try {
            const response = await fetch(`${process.env.API_URL}/checkUsername`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.exists) {
                    setUsernameError('This username is already taken.\nPlease choose another one.');
                } else {
                    setUsernameError('');
                    checkUsername();
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error checking username:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    const checkUsername = () => {
        if (!username.trim()) {
            setUsernameError('Username is required');
        } else if (username.length < 2) {
            setUsernameError('Username should be at least 2 characters');
        } else {
            setUsernameError('');
            navigation.navigate("Password", {
                firstname: route.params.firstname,
                lastname: route.params.lastname,
                email: route.params.email,
                phone_number: route.params.phone_number,
                username: username,
            });
        }
    };

    return(
        <View style={ background }>
            <Text style={[heading, {marginBottom: '10%'}]}>Enter a Username</Text>
            <Text>*Required</Text>
            <TextInput 
                style={[text_box, {marginBottom: '8%', borderColor: usernameError ? 'red' : 'gray'}]}
                placeholder='Enter username...'
                onChangeText={(text) => setUsername(text)}
            />
            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

            <TouchableOpacity style={ submit_button } onPress={validateUsername}>
                <View style={ format }>
                    <Text style={submit_button_text}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginBottom: 20,
        marginTop: -15, // Adjust this value as needed to bring the error text closer
    },
});
