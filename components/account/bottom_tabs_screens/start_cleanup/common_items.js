import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list';
import { background, heading, format, submit_button, submit_button_text } from "../../../Features/Design.js";


    export default function Common_Items({navigation, route }){
        const [data, setData] = useState([]);
        const [selected, setSelected] = useState([]);

        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.API_URL}/dropdownCommonItems`, {
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

        const handleNextPress = () => {
            navigation.navigate("Map Count", { priority: route.params.selected, common: selected });
        };

        return (
            <View style={background}>
                <View style={format}>
                    <Text style={[heading, { alignSelf: 'center', marginBottom: '5%' }]}> Common Items</Text>
                    <MultipleSelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        boxStyles={styles.list}
                        dropdownStyles={{ backgroundColor: 'white' }}
                        save="value"
                        label="Common Items"
                    />
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