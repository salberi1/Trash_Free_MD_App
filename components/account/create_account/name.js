import { StatusBar, Vibration } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { background, submit_button, format, submit_button_text, heading, text_box } from "../../Features/Design.js";

export default function Create_Account_Names({ navigation }) {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const validateInputs = () => {
        let isValid = true;

        // Validate first name
        if (!firstname.trim()) {
            setFirstNameError('First name is required');
            isValid = false;
        } else if (firstname.length < 2) {
            setFirstNameError('First name should be at least 2 characters');
            isValid = false;
        } else {
            setFirstNameError('');
        }

        // Validate last name
        if (!lastname.trim()) {
            setLastNameError('Last name is required');
            isValid = false;
        } else if (lastname.length < 2) {
            setLastNameError('Last name should be at least 2 characters');
            isValid = false;
        } else {
            setLastNameError('');
        }

        return isValid;
    };

    const onNext = () => {
        if (validateInputs()) {
            navigation.navigate("Contact Information", { firstname, lastname });
        } 
    };

    return (
        <View style={background}>
            <Text style={[heading, { marginBottom: '10%' }]}>Enter your name:</Text>
            <Text>*Required</Text>
            <TextInput
                style={[text_box, { marginBottom: '8%', borderColor: firstNameError ? 'red' : 'gray' }]}
                placeholder='First name...'
                onChangeText={(text) => setFirstName(text)}
            />
            {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}

            <Text>*Required</Text>
            <TextInput
                style={[text_box, { marginBottom: '8%', borderColor: lastNameError ? 'red' : 'gray' }]}
                placeholder='Last name...'
                onChangeText={(text) => setLastName(text)}
            />
            {lastNameError ? <Text style={styles.errorText}>{lastNameError}</Text> : null}

            <TouchableOpacity style={submit_button} onPress={onNext}>
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

