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
        <View style={styles.background}>
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
                boxStyles={styles.list}
                dropdownStyles={{backgroundColor: 'white'}}
                save="value"
                onSelect={() => alert(selected)} 
                label="Policy Priority Items"
            />
            
            <TouchableOpacity 
            style={styles.container}
            onPress={() => alert(selected)}>
                <View style={styles.format}>
                <Text style={styles.button_text}>START</Text>
                </View>
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
        padding: 20,
        marginTop: 50
    },

    text: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 40,
        fontFamily: 'Times New Roman',
        marginBottom: 10
    },

    format: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        alignSelf: 'center',
        width: '40%',
        height: 50,
        backgroundColor: '#efca66',
        borderWidth: '1',
        borderColor: 'gray',
        marginTop: 20,
        borderRadius: 10
    },

    button_text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    required: {
        fontSize: 15,
        color: 'gray',
        marginTop: 10,
        marginBottom: 10
    },

    select: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    background: {
        flex: 1,
        backgroundColor: '#afd8c9',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100,
        width: "100%",
        height: "100%"
      },
    list: {
        backgroundColor: 'white',
        width: 300
    }  
});

