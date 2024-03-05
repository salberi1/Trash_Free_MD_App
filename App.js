import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './main_forDropDown.js';
import Individual from './Individual.js';
import Org_menu from './org_menu.js';
import V_with_menu from './v_with_app.js'

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main Menu">
          <Stack.Screen name="Main Menu" component={MainMenu} />
          <Stack.Screen name="Individual/Volunteer with organization not using app" component={Individual} />
          <Stack.Screen name="Organization" component={Org_menu} />
          <Stack.Screen name="Volunteer with organization using app" component={V_with_menu} />
          {/* Other screens */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  