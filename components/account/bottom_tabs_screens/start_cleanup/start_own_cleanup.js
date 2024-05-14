import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list';
import { background, heading, format, make_cleanup_live_button, yes_no, submit_button, submit_button_text } from "../../../Features/Design.js";
import fetchProtectedData from './../../getData.js'; 



    export default function Start_Own_Cleanup({navigation}){
        const [addres, setAddress] = React.useState([]);
        const [time, setTime ] = useState('');
        const [selected, setSelected ] = React.useState([]);
        const [data, setData] = React.useState([]);
        const [userId, setUserId] = useState('');

        useEffect(() => {
            fetchData();
            fetchUserId(); // Fetch user ID when component mounts
        }, []);

        const fetchData = async () => {
            try {

                const response = await fetch(`${process.env.API_URL}/dropdownPriorityItems`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        
                if (response.ok) {
                    const results = await response.json();
                    setData(results);
                } else {
                    throw new Error('Error fetching policy priority item data');
                }
            } catch (error) {
                console.error('Error', 'Something went wrong. Please try again later.');
            }
        };

        // Fetch user data when component mounts
        const fetchUserId = async () => {
            try {
                const userData = await fetchProtectedData(); // Call the function to fetch user data
                setUserId(userData.user.userId); // Set the user's first name in state
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // Function to send data to the backend
        const sendDataToBackend = async () => {
            try {
                // Assuming there is an API endpoint to add data to the database
                const response = await fetch(`${process.env.API_URL}/insertPriorityItems`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_id: userId,
                        priority_items: selected
                    })
                });

                if (response.ok) {
                    const cleanupInfo = await response.json(); // Get the response from the server
                    navigation.navigate('Common Items', {cleanupInfo});
                } else {
                    throw new Error('Error adding data to the database');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        return(
        <View style= { background }>
            <Text style={ heading }> Start Your Own Cleanup: </Text>
            <View style={format}>
            <Text style={[ heading, {alignSelf: 'center', marginBottom: '5%'}]}> Policy Priority Items</Text>    
            <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                boxStyles={styles.list}
                dropdownStyles={{backgroundColor: 'white'}}
                save="value" 
                label="Policy Priority Items"
            />
            </View>

            <TouchableOpacity 
                style={[submit_button, {marginBottom: '20%'}]}
                onPress={sendDataToBackend}>
                <View style={format}>
                <Text style={submit_button_text}>NEXT</Text>
                </View>
            </TouchableOpacity>


        </View>
        );
        
    };

    const styles=StyleSheet.create({
    
        text: {
            fontSize: 22,
            textAlign: 'center',
            marginTop: 40,
            fontFamily: 'Times New Roman',
            marginBottom: 10
        },
        required: {
            fontSize: 15,
            color: 'gray',
            marginTop: 10,
            marginBottom: 10
        },
        list: {
            backgroundColor: 'white',
            width: 300
        },
    });
