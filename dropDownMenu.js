import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

export default function MyDropDownPicker({ items, isOpen, setIsOpen, currentValue, setCurrentValue }){
        return(
        <DropDownPicker
          items={items}
          open={isOpen}
          setOpen={()=>setIsOpen(!isOpen)}
          value={currentValue}
          setValue={(val)=>setCurrentValue(val)}
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
          />
          
        
        //this indicates which direction the choices for the drop down will go
        //dropDownDirection='BOTTOM'

        //used to disable the drop down clicker
        //disabled
        
        );

}


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

