import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Alert, Button, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list';
import { background, heading, format, submit_button_text, item_text_box, submit_button } from "../../../Features/Design.js";
import DatePicker from 'react-native-modern-datepicker';

export default function Submit_Cleanup({navigation, route}){
    const [common_items, setCommon_items] = React.useState([]);
    const [priority_items, setPriority_items] = React.useState([]);

    const [commonItemValues, setCommonItemValues] = useState(Array(common_items.length).fill(''));
    const [priorityItemValues, setPriorityItemValues] = useState(Array(priority_items.length).fill(''));


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.API_URL}/selectedItems?cleanupId=${route.params.cleanupInfo}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                const { common, priority } = await response.json();
                const commonValues = {};
                const priorityValues = {};

                // Initialize values for text inputs
                common.forEach((item) => (commonValues[item] = ''));
                priority.forEach((item) => (priorityValues[item] = ''));

                setCommon_items(common);
                setPriority_items(priority);
                setCommonItemValues(commonValues);
                setPriorityItemValues(priorityValues);
            } else {
                throw new Error('Error fetching items');
            }
        } catch (error) {
            console.error('Error', 'Something went wrong. Please try again later.');
        }
    };


    const handlePriorityItemChange = (text, item) => {
        setPriorityItemValues((prevValues) => ({ ...prevValues, [item]: text }));
    };

    const handleCommonItemChange = (text, item) => {
        setCommonItemValues((prevValues) => ({ ...prevValues, [item]: text }));
    };


    const [selectedDate, setSelectedDate] = useState('');
    const currentDate = new Date();     // Holds information of curent date
    
     const handleSubmit = async () => {
        try {

            const formattedTime = formatMilliseconds(route.params.duration);

            const response = await fetch(`${process.env.API_URL}/updateAllItems`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cleanup_id: route.params.cleanupInfo,
                    priority_Items: priorityItemValues,
                    common_Items: commonItemValues,
                    location: route.params.location,
                    time_duration: formattedTime,
                    date: currentDate
                })
            });

            if (response.ok) {
                // Handle success, maybe navigate to another screen
                console.log('Items updated successfully');
                Alert.alert('Congrats!', "You have completed a cleanup! To see information about your cleanup, click 'History' and select your desired date", [
                    {
                      text: 'Maybe Later',
                      onPress: () => navigation.navigate("Start Own Cleanup"),
                      style: 'cancel',
                    },
                    {text: 'History', onPress: () => navigation.navigate("History")},
                  ]);
              
            } else {
                throw new Error('Error updating items');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };


    function formatMilliseconds(milliseconds) {
        // Convert milliseconds to seconds
        var totalSeconds = Math.floor(milliseconds / 1000);
    
        // Calculate hours, minutes, and remaining seconds
        var hours = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;
    
        // Format hours, minutes, and seconds to have leading zeros if necessary
        var formattedHours = String(hours).padStart(2, '0');
        var formattedMinutes = String(minutes).padStart(2, '0');
        var formattedSeconds = String(seconds).padStart(2, '0');
    
        // Construct the formatted time string
        var formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    
        return formattedTime;
    }

    return(
        <View style={ background }>
            <ScrollView style={styles.scrollView}>

            <Text style={ heading }>Policy Items</Text>
            <View style={styles.container}>              
            {priority_items.map((item, index) => (
                    <View key={index} style={styles.text_container}>
                        <Text style={styles.text}>{item}</Text>
                        <TextInput
                            style={item_text_box}
                            value={priorityItemValues[index]}
                            onChangeText={(text) => handlePriorityItemChange(text, item)}
                        />
                    </View>
                ))}

            </View>

            <Text style={ heading }>Common Items</Text>
            <View style={styles.container}>
            {common_items.map((item, index) => (
                    <View key={index} style={styles.text_container}>
                        <Text style={styles.text}>{item}</Text>
                        <TextInput
                            style={item_text_box}
                            value={commonItemValues[index]}
                            onChangeText={(text) => handleCommonItemChange(text, item)}
                        />
                    </View>
                ))}
            </View>
            <Text style={[ heading, {marginBottom: '15%'} ]}>Select Date</Text>
            <DatePicker
                onSelectedDate={ date => setSelectedDate(date)}
            />
            <TouchableOpacity style={[submit_button, {marginBottom: '30%', alignSelf: 'center'}]} onPress={handleSubmit}>
            <View style={format}>
                <Text style={submit_button_text}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: '5%'
    },

    text_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    text: {
        width: '40%', 

    },

    scrollView: {
        width: '80%',
  
    }

})