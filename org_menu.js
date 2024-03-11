import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list'
// This is the first screen that you are taken to upon selecting the option "organization" from the menu

let Org_menu = ({navigation}) => {

  //store the entered information
  const [orgName, setOrgName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = React.useState([]);
  
    const data = [
      {key:'1', value:'Location Option'},
      {key:'2', value:'Location Option 2'},
      {key:'3', value:'Location Option 3'},
      {key:'4', value:'Location Option 4'},
      {key:'5', value:'Location Option 5'},
      {key:'6', value:'Location Option 6'},
      {key:'7', value:'Other'}
    ]

  return (
    <View style={styles.background}>
      <Text style={{fontSize: 24, padding: 5, textAlign: 'center', fontWeight: 'bold'}}>Name of Organization:</Text>
      <TextInput
        style={styles.text_box}
        multiline={false}
        placeholder="Enter organization name..."
        onChangeText = {(text) => (setOrgName)}
      /> 
        <Text style={styles.heading}>Location of Start:</Text>
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          boxStyles={{backgroundColor:'white', width: 300}}
          dropdownStyles={{backgroundColor: 'white'}}
          placeholder="Select Location..."
          save="value"
        />
        <Text style={styles.heading}>Organization Email:</Text>
            <TextInput
                style={styles.text_box}
                multiline={false}
                placeholder="Enter organization's email address..."
                onChangeText = {(text) => (setEmail)}
        />                     
    <View>
    <Text style={styles.heading}>Will You (Organization User) Also Be Cleaning Up?</Text>
        <View>
         <View>
            <TouchableOpacity
              style={styles.yes}>
                <View style={styles.text}>
                  <Text>YES</Text>
                </View>   
            </TouchableOpacity>
        </View>
        </View>
        <View>
            <TouchableOpacity
              style={styles.no}>
                <View style={styles.text}>
                  <Text>NO</Text>
                </View>   
            </TouchableOpacity>
        </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Make Cleanup Live")}>
            <View style={styles.text}>
              <Text style={styles.text_design}>MAKE CLEANUP LIVE</Text>
            </View>
          </TouchableOpacity>
    </View> 
    </View>
  );
};
export default Org_menu;

const styles = StyleSheet.create({
  heading: { // the format for each heading
    fontSize: 24, 
    paddingTop: 20, 
    paddingBottom: 5, 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text_box: { // the format for each box under the headings
    backgroundColor: 'white', 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    padding: 5, 
    width: 300, 
    alignSelf: 'center', 
    textAlign: 'left', 
    borderRadius: 10
  },
  button: {
    width: 250, //lets the organization start the cleanup
    height: 50,
    alignSelf: 'center',
    borderColor: 'grey', 
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: '#efca66', 
    borderRadius: 10   
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  no: {
    width: 100,  // style for the "no" button
      height: 40, 
      alignSelf: 'center', 
      borderColor: 'gray', 
      borderWidth: 1, 
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 10
  },

  yes: {
    width: 100, 
    height: 40,  // style for the "yes" button
    alignSelf: 'center', 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },

  background: {
    flex: 1,
    backgroundColor: '#afd8c9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
    width: "100%",
    height: "100%"
  },
  
  text_design: {
    fontSize: 20,
  }
});




