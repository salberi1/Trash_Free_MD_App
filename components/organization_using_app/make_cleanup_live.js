import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView, TextInput, Alert } from 'react-native';

let Make_Cleanup_Live_Org = ({navigation}) => {

    const volunteers = 20;//placeholder number
    return (
        <View style={styles.background}>
            <View style={styles.map}>
                <Text>map will go here</Text>
            </View>
            <TouchableOpacity 
                style={styles.volunteer_button} //this button will let you view how many volunteers have joined
                onPress={() => navigation.navigate("Volunteers Join")}
            >
                <View style={styles.format}>
                    <Text style={styles.button_text}>{volunteers} VOLUNTEER(S)</Text>
                </View>
            </TouchableOpacity>
            <Text>Remember to wait for volunteers before pressing start!</Text>
            <TouchableOpacity 
                style={styles.buttons} //this button will be linked to acutally starting the cleanup
            >
                <View style={styles.format}>
                    
                    <Text style={styles.button_text}>START</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttons} //this button will be linked to a seperate page
            >
                <View style={styles.format}>
                    <Text style={styles.button_text}>SHARE</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default Make_Cleanup_Live_Org;

const styles = StyleSheet.create({
    buttons: {
        height: 35,
        width: '40%',
        borderWidth: 1,
        backgroundColor: '#efca66',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10

    },
    format: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button_text: {
        fontSize: 20,
        fontWeight: 'bold',
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

      volunteer_button: {
        backgroundColor: '#9ab880',
        width: '60%',
        height: 40,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20
      },

      map: {
        width: '80%',
        height: '45%',
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 15
      }
    
});