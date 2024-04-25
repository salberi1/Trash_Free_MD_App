import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './tabs.js';
import Account from './bottom_tabs_screens/accounts';
import Settings from './bottom_tabs_screens/settings';
import CustomDrawer from './drawer.js';
import Signin from './SignIn.js'


//this is going to hold the tabs of the home page for the first tier of accounts


export default function IndividualAccount({navigation}){
    return(
            <NavigationContainer independent={true}>
                <CustomDrawer />
            </NavigationContainer>

    )
    
}

