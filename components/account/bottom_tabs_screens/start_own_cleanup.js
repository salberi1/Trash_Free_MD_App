import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list';
import { background, heading, format, make_cleanup_live_button, yes_no } from "../../Features/Design.js";
import { CountDown } from 'react-native-countdown-component';
import renderNode from 'react-native-elements/dist/helpers/renderNode.js';


    export default function Start_Own_Cleanup(){
        const [addres, setAddress] = React.useState([]);
        const [time, setTime ] = useState('');
        const [selected, setSelected ] = React.useState([]);

        return(
        <View style= { background }>
            <Text> Start Your Own Cleanup </Text>
            <Text> Address </Text>
            <Text> Time </Text>
            <TextInput 
            label="Enter Time"
            onChangeText ={(text) => setTime(text)}/>
            <Text> Policy Priority Items</Text>    
            <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                boxStyles={styles.list}
                dropdownStyles={{backgroundColor: 'white'}}
                save="value" 
                label="Policy Priority Items"
            />

        </View>
        );
        
    };
