import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-btr'
import { MultipleSelectList} from 'react-native-dropdown-select-list'
import { background, heading, submit_button, format, submit_button_text } from "../Features/Design.js"


let Select_Policy_Ind = () => {

    const [selected, setSelected] = React.useState([]);
  
    const data = [
      {key:'1', value:'Plastic Grocery Bags'},
      {key:'2', value:'Plastic Bottles'},
      {key:'3', value:'Styrofoam Cups'},
      {key:'4', value:'Glass Fragments'},
      {key:'5', value:'Metal Cans'},
      {key:'6', value:'Other'}
    ]


    return(
        <View style={background}>
            <View style={{marginTop: 150}}>
                <Text style={heading}>
                    What Policy Priority Item are You Collecting Data On?
                </Text>
            </View>

            <Text style={styles.text}> 
                You may select more than one: 
            </Text>

            <Text style={styles.required}>
                *required
            </Text>

            <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                boxStyles={styles.list}
                dropdownStyles={{backgroundColor: 'white'}}
                save="value"
                onSelect={() => alert(selected)} 
                label="Policy Priority Items"
            />
            
            <TouchableOpacity 
            style={submit_button}
            onPress={() => alert(selected)}>
                <View style={format}>
                <Text style={submit_button_text}>START</Text>
                </View>
            </TouchableOpacity>


        </View>
    );
};

export default Select_Policy_Ind;

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
    }  
});

