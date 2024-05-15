import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list';
import { background, heading, format, make_cleanup_live_button, yes_no, submit_button, submit_button_text } from "../../../Features/Design.js";


    export default function Start_Own_Cleanup({navigation}){
        const [data, setData] = useState([]);
        const [selected, setSelected] = useState([]);
        const [error, setError] = useState('');

        useEffect(() => {
            fetchData();
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

        const validateForm = () => {
            if (selected.length === 0) {
                setError('Must select at least one Priority Policy Item');
                return false;
            }
            setError('');
            return true;
        };

        const handleNextPress = () => {
            if (validateForm()) {
                navigation.navigate('Common Items', { selected });
            }
        };

        return (
            <View style={background}>
                <Text style={heading}> Start Your Own Cleanup: </Text>
                <View style={format}>
                    <Text style={[heading, { alignSelf: 'center', marginBottom: '5%' }]}> Policy Priority Items</Text>
                    <MultipleSelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        boxStyles={styles.list}
                        dropdownStyles={{ backgroundColor: 'white' }}
                        save="value"
                        label="Policy Priority Items"
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>
                <TouchableOpacity
                    style={[submit_button, { marginBottom: '20%' }]}
                    onPress={handleNextPress}>
                    <View style={format}>
                        <Text style={submit_button_text}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    const styles = StyleSheet.create({
        errorText: {
            color: 'red',
            textAlign: 'center',
            marginTop: 5,
        },
        list: {
            backgroundColor: 'white',
            width: 300,
        },
    });