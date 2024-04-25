import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Alert, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list';
import { background, heading, format, submit_button_text, item_text_box, submit_button } from "../../../Features/Design.js";
import DatePicker from 'react-native-modern-datepicker';

export default function Submit_Cleanup({navigation}){
    const common_item_numbers = 2;
    const common_items = ["common item 1", "common item 2"];
    const priority_items_numbers = 3;
    const priority_items = ["Priority item 1", "priority item 2", "priority item 3"];

    const [commonItemValues, setCommonItemValues] = useState(Array(common_items.length).fill(''));
    const [priorityItemValues, setPriorityItemValues] = useState(Array(priority_items.length).fill(''));


    const handlePriorityItemChange = (text, index) => {
        const newValues = [priorityItemValues];
        newValues[index] = text;
        setPriorityItemValues(newValues);
    }

    const handleCommonItemChange = (text, index) => {
        const newValues = [commonItemValues];
        newValues[index] = text;
        setCommonItemValues(newValues);
    }


    const [selectedDate, setSelectedDate] = useState('');
    

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
                            onChangeText={(text) => handlePriorityItemChange(text, index)}
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
                            onChangeText={(text) => handleCommonItemChange(text, index)}
                        />
                    </View>
                ))}
            </View>
            <Text style={[ heading, {marginBottom: '15%'} ]}>Select Date</Text>
            <DatePicker>
                onSelectedDate={ date => setSelectedDate(date)}
            </DatePicker>
            <TouchableOpacity style={[submit_button, {marginBottom: '30%', alignSelf: 'center'}]}>
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