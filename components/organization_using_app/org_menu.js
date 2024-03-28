import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MultipleSelectList, SelectList} from 'react-native-dropdown-select-list'
import { background, heading, format, make_cleanup_live_button, yes_no } from "../Features/Design.js"
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
    <View style={background}>
      <View style={{marginTop: '15%'}}>
        <Text style={heading}>Name of Organization:</Text>
      </View>
      <TextInput
        style={styles.text_box}
        multiline={false}
        placeholder="Enter organization name..."
        onChangeText = {(text) => (setOrgName)}
      /> 
        <Text style={heading}>Location of Start:</Text>
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          boxStyles={{backgroundColor:'white', width: 300}}
          dropdownStyles={{backgroundColor: 'white'}}
          placeholder="Select Location..."
          save="value"
        />
        <Text style={heading}>Organization Email:</Text>
            <TextInput
                style={styles.text_box}
                multiline={false}
                placeholder="Enter organization's email address..."
                onChangeText = {(text) => (setEmail)}
        />                     
      <View> 
        <Text style={heading}>Will You (Organization User) Also Be Cleaning Up?</Text>
        <View>
          <View>
            <TouchableOpacity
              style={yes_no}>
                <View style={format}>
                  <Text>YES</Text>
                </View>   
            </TouchableOpacity>
          </View>
        </View>
        <View>
            <TouchableOpacity
              style={yes_no}>
                <View style={format}>
                  <Text>NO</Text>
                </View>   
            </TouchableOpacity>
        </View>
          <TouchableOpacity
            style={make_cleanup_live_button}
            onPress={() => navigation.navigate("Make Cleanup Live")}>
            <View style={format}>
              <Text style={styles.text_design}>MAKE CLEANUP LIVE</Text>
            </View>
          </TouchableOpacity>
    </View> 
    </View>
  );
};
export default Org_menu;

const styles = StyleSheet.create({
  
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

  text_design: {
    fontSize: 20,
  }
});




