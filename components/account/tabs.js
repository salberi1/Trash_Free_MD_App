import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Account from './bottom_tabs_screens/accounts';
import Settings from './bottom_tabs_screens/settings';
import History from './bottom_tabs_screens/history.js';
import Join_Individual from './bottom_tabs_screens/join_cleanup.js';
import Start_Own_Cleanup from './bottom_tabs_screens/start_cleanup/start_own_cleanup.js';
import Map_Count from './bottom_tabs_screens/start_cleanup/map_count.js';
import Common_Items from './bottom_tabs_screens/start_cleanup/common_items';
import Submit_Cleanup from './bottom_tabs_screens/start_cleanup/submit_cleanup';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StartCleanupStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Start Own Cleanup" component={Start_Own_Cleanup} options={{headerShown: false, title: 'Policy Priority Items'}}/>
            <Stack.Screen name="Common Items" component={Common_Items} options={{title: ''}}/>
            <Stack.Screen name="Map Count" component={Map_Count} options={{title: ''}}/>
            <Stack.Screen name="Submit Cleanup" component={Submit_Cleanup} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Join Cleanup" component={Join_Individual} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Start Cleanup" component={StartCleanupStack} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <MainTabs />
        </NavigationContainer>
    );
}