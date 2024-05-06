import React from 'react';
import { Button } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './bottom_tabs_screens/accounts';
import Tabs from './tabs.js';
import Settings from './bottom_tabs_screens/settings';
import { CommonActions } from '@react-navigation/native';
import App from '../../App.js'



const DrawerNavigator = createDrawerNavigator();

export default function CustomDrawer({navigation}) {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Home" component={Tabs} />
            <DrawerNavigator.Screen name="Settings" component= {Settings} />
            <DrawerNavigator.Screen name="Sign Out" component={App} options={{ headerShown: false }}/>
        </DrawerNavigator.Navigator>

    );
}