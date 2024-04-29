import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list';
import { background, heading, format, make_cleanup_live_button, yes_no, submit_button, submit_button_text } from "../../../Features/Design.js";



    export default function Start_Own_Cleanup({navigation}){
        const [addres, setAddress] = React.useState([]);
        const [time, setTime ] = useState('');
        const [selected, setSelected ] = React.useState([]);
        const data = [
            {key:'1', value:'Plastic Grocery Bags'},
            {key:'2', value:'Plastic Bottles'},
            {key:'3', value:'Styrofoam Cups'},
            {key:'4', value:'Glass Fragments'},
            {key:'5', value:'Metal Cans'},
          ]

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
                onPress={() => navigation.navigate("Common Items")}>
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
