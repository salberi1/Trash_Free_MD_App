import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-btr'
import { MultipleSelectList} from 'react-native-dropdown-select-list'


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
        <View>
            <Text style={styles.heading}>
                What Policy Priority Item are You Collecting Data On?
            </Text>

            <Text style={styles.text}> 
                You may select more than one: 
            </Text>

            <Text style={styles.required}>
                *required
            </Text>

            <MultipleSelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
                onSelect={() => alert(selected)} 
                label="Policy Priority Items"
            />
            
            <TouchableOpacity 
            style={styles.container}
            onPress={() => alert(selected)}>
                <Text style={styles.button_text}>Start</Text>
            </TouchableOpacity>


        </View>
    );
};

export default Select_Policy_Ind;

const styles=StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },

    text: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Times New Roman',
        marginBottom: 10
    },

    container: {
        alignSelf: 'center',
        width: 150,
        height: 50,
        backgroundColor: '#efca66',
        borderWidth: '1',
        borderColor: 'gray',
        marginTop: 20
    },

    button_text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center',
    },

    required: {
        fontSize: 15,
        color: 'gray',
        marginTop: 20,
        marginBottom: 10
    },

    select: {
        backgroundColor: 'white',
        borderRadius: 10
    }

    
});

