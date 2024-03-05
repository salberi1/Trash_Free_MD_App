import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MyDropDownPicker from './dropDownMenu';

 let MainMenu = ({navigation}) =>{
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const items = [
    { label: 'Individual', value: 'Individual' },
    { label: 'Organization', value: 'Organization' },
    { label: 'Volunteer with organization using app', value: 'Volunteer with organization using app' },
    { label: 'Volunteer with organization not using app', value: 'Volunteer with organization not using app' },
  ];

  const handleNavigation = (selectedValue) => {
    // Perform navigation based on the selected label
    switch (selectedValue) {
      case 'Individual':
        navigation.navigate('Individual/Volunteer with organization not using app');
        break;
      case 'Organization':
        navigation.navigate('Organization');
        break;
      case 'Volunteer with organization using app':
        navigation.navigate('Volunteer with organization using app');
        break;
      case 'Volunteer with organization not using app':
        navigation.navigate('Individual/Volunteer with organization not using app');
        break;
      default:
        break;
    }

  }

  return ( 
      <View  style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.boldText}>Who is doing a cleanup?</Text>
        </View>
      <MyDropDownPicker
        items={items} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        currentValue={currentValue}
        setCurrentValue={(val) => {
          setCurrentValue(val);
          handleNavigation(val);
        }}
        navigation={navigation}
        />
    </View>
    
  );
}


export default MainMenu;


import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afd8c9',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    

  },

  header:{
    //paddingBottom:200,
    
  },

  boldText:
  {
    fontWeight:'bold',
    fontSize: 18
  }
});


