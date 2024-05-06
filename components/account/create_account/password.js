import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading, text_box, make_cleanup_live_button } from "../../Features/Design.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Create_Account_Password({navigation, route}){

    const [password, setPassword] = useState('');
    const [confirm_password, set_confirm_password] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [criteriaMet, setCriteriaMet] = useState({
        length: false,
        number: false,
        lowercase: false,
        uppercase: false,
        specialChar: false
    });

    useEffect(() => {
        validatePassword(password);
    }, [password]);

    const validatePassword = (value) => {
        let errors = {
            length: value.length >= 8 && value.length <= 12,
            number: /\d/.test(value),
            lowercase: /[a-z]/.test(value),
            uppercase: /[A-Z]/.test(value),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value)
        };

        setCriteriaMet(errors);
    };

    const storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('token', token);
        } catch (error) {
            console.error('Error storing token:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    const confirmAccount = async () => {
        // Validate passwords match
        if (password !== confirm_password) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }

        // Validate all criteria met
        for (const key in criteriaMet) {
            if (!criteriaMet[key]) {
                setPasswordError(`Password does not meet ${key} criteria`);
                return;
            }
            else{
                // If all criteria are met, clear passwordError
                setPasswordError('');
            }
        }

        try {
            const userData = {
                username: route.params.username,
                password: password,
                email: route.params.email, 
                mobile: route.params.phone_number,
                first_name: route.params.firstname,
                last_name: route.params.lastname
            };

            const response = await fetch('http://10.0.0.79:3000/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // User created successfully
                const data = await response.json();
                await storeToken(data.token); // Store the token received from the server
                Alert.alert('Success', 'Account created successfully');
                navigation.navigate("Home Page");
            } else {
                const errorData = await response.json(); // Assuming server returns error details
                Alert.alert('Error', errorData.message || 'User already exists');
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    return(
        <View style={background}>
            <Text style={ [heading, {marginBottom: '10%'}] }> Enter Password: </Text>
            <Text>*Required</Text>
            <TextInput
                placeholder='Enter Password...'
                style={[text_box, {marginBottom: '5%', borderColor: passwordError ? 'red' : criteriaMet.length ? 'green' : 'gray'}]}
                secureTextEntry={true} // encrypts the password
                onChangeText={(text) => setPassword(text)}
            />
             {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}

            <Text>*Required</Text>
            <TextInput
                placeholder='Confirm Password...'
                style={[text_box, {marginBottom: '5%', borderColor: confirmPasswordError ? 'red' : 'gray'}]}
                secureTextEntry={true} // encrypts the password    
                onChangeText={(text) => set_confirm_password(text)}
            />
            {confirmPasswordError !== '' && <Text style={styles.errorText}>{confirmPasswordError}</Text>}
            <View>
                <Text style={{ color: criteriaMet.length ? 'green' : 'gray' }}>Password has 8 - 12 characters</Text>
                <Text style={{ color: criteriaMet.number ? 'green' : 'gray' }}>Password has at least 1 number</Text>
                <Text style={{ color: criteriaMet.lowercase ? 'green' : 'gray' }}>Password has at least 1 lowercase letter</Text>
                <Text style={{ color: criteriaMet.uppercase ? 'green' : 'gray' }}>Password has at least 1 capital letter</Text>
                <Text style={{ color: criteriaMet.specialChar ? 'green' : 'gray' }}>Password has at least 1 special character</Text>
            </View>

            <TouchableOpacity style={make_cleanup_live_button} onPress={confirmAccount}>
                <View style={format}>
                    <Text style={ submit_button_text }>Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginBottom: 20,
        marginTop: -15, // Adjust this value as needed to bring the error text closer
    },
});
