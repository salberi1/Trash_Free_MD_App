import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list'
import { background, heading, format, make_cleanup_live_button, yes_no } from "../Features/Design.js"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabActions } from '@react-navigation/native';
import Account from './bottom_tabs_screens/accounts';
import Settings from './bottom_tabs_screens/settings';
import History from './bottom_tabs_screens/history.js';
import Join_Individual from './bottom_tabs_screens/join_cleanup.js';
import Start_Own_Cleanup from './bottom_tabs_screens/start_own_cleanup.js';


//this is going to hold the tabs of the home page for the first tier of accounts
//the tabs are at the bottom of the screen

const Tab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Join Cleanup" component={ Join_Individual }/>
            <Tab.Screen name="History" component= { History }/>
            <Tab.Screen name="Start Cleanup" component= { Start_Own_Cleanup} />
        </Tab.Navigator>
    );
    
}