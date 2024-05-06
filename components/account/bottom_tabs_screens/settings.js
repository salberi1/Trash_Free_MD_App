import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list'
import { background, heading, format, make_cleanup_live_button, yes_no } from "../../Features/Design.js"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


//this is going to hold the tabs of the home page for the first tier of accounts



function Settings(){
    return(
        <View style={background}>
            <Text style={heading}>Settings: </Text>
        </View>
    )   
}

export default Settings;