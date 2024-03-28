import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list'
import { background, heading, format, make_cleanup_live_button, yes_no } from "../../Features/Design.js"


export default function Join_Individual(){
    const [selection, setSelected] = useState('');
    const data = [
        {key:'1', value:'Location Option'},
        {key:'2', value:'Location Option 2'},
        {key:'3', value:'Location Option 3'},
        {key:'4', value:'Location Option 4'},
        {key:'5', value:'Location Option 5'},
        {key:'6', value:'Location Option 6'},
        {key:'7', value:'Other'}
      ]
    return(
        <View style={background}>
            <Text style={heading}>Welcome, !</Text>

            <View style={{marginBottom: '5%'}}>
                <Text style={heading}>Select Your Location</Text>
            </View>

            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                boxStyles={{backgroundColor:'white', width: 300}}
                dropdownStyles={{backgroundColor: 'white'}}
                placeholder="Select Location..."
                save="value"
            />
            <Text style={styles.text}>Cleanups Scheduled in {selection}</Text>
            <View style={styles.box}>
                <Text style={{marginTop: '2%'}}>       Organization Name     Date     Time</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text : {
        fontSize: 20,
        marginTop: '5%',
        marginBottom: '5%',
        fontWeight: 'bold'    
    },
    box: {
        backgroundColor: 'white',
        width: '80%',
        height: '55%',
        borderWidth: 1,
        borderRadius: 10
    }
});