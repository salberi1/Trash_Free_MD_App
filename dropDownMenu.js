import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

let MyDropDownPicker = ({items, isOpen, setIsOpen, currentValue, setCurrentValue, navigation}) => {
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
  
    // Close the dropdown after navigating
    setIsOpen(false);
  };
        return(
        <DropDownPicker
          items={items}
          open={isOpen}
          setOpen={()=>setIsOpen(!isOpen)}
          value={currentValue}
          setValue={(val) => setCurrentValue(val)}
          maxHeight={200}
          autoScroll
          placeholder='Select'
          placeholderStyle={{color:'black', fontWeight: 'bold', fontSize:16}}
          //displays a tick next to selected option
          showTickIcon={true}
          //displays an arrow inside the selection box
          showArrowIcon={true}
          disableBorderRadius={true}
          max={1}
          onPress={() => handleNavigation(currentValue)}
          />
          
        
        //this indicates which direction the choices for the drop down will go
        //dropDownDirection='BOTTOM'

        //used to disable the drop down clicker
        //disabled
        
        );

}

export default MyDropDownPicker;

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD!!!!!THANK YOU SO MUCH FOR WORKING!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

