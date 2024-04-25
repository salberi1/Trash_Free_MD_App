import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list'
import { background, heading, format, make_cleanup_live_button, yes_no, submit_button, submit_button_text } from "../../Features/Design.js"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


/* 
    This will hold the history of an individual's cleanup. It will start with either the name of the organization 
*/ 



function History(){
    return(
        <View style={background}>
            <View style={{marginTop: '30%'}}>
                <TouchableOpacity style={make_cleanup_live_button}>
                    <View style={format}>
                        <Text style={submit_button_text}>Past Cleanups</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: '20%'}}>
                <TouchableOpacity style={make_cleanup_live_button}>
                    <View style={format}>
                        <Text style={submit_button_text}>Location Data</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: '20%'}}>
                <TouchableOpacity style={make_cleanup_live_button}>
                    <View style={format}>
                        <Text style={submit_button_text}>Item Data</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
    
}

export default History;

