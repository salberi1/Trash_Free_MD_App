import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './components/menu/main_forDropDown.js';
import Individual from './components/individual/Individual.js';
import Org_menu from './components/organization_using_app/org_menu.js';
import V_with_menu from './components/volunteer_org_using_app/v_with_app.js'
import Select_Policy_Ind from './components/individual/select_policy.js';
import Signin from './components/account/SignIn.js';
import Create_Account from './components/account/create_account.js';
import Make_Cleanup_Live_Org from './components/organization_using_app/make_cleanup_live.js';
import Volunteers_Join from './components/organization_using_app/volunteers_join.js';



const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sign In">
          <Stack.Screen name="Sign In" component={Signin} />
          <Stack.Screen name="Create Account" component={Create_Account} />
          <Stack.Screen name="Main Menu" component={MainMenu} />
          <Stack.Screen name="Individual/Volunteer with organization not using app" component={Individual} />
          <Stack.Screen name="Organization" component={Org_menu} />
          <Stack.Screen name="Volunteer with organization using app" component={V_with_menu} />
          <Stack.Screen name="Policy Priority item selection" component={Select_Policy_Ind} />
          <Stack.Screen name="Make Cleanup Live" component={Make_Cleanup_Live_Org} />
          <Stack.Screen name="Volunteers Join" component={Volunteers_Join} />
          {/* Other screens */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
