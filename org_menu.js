import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';

let Org_menu = () => {
  return (
    <View>
      <Text style={{fontSize: 24, padding: 5, textAlign: 'center'}}>Name of Organization:</Text>
      <TextInput
        style={{ backgroundColor: 'white', height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, textAlign: 'left', width: 300, alignSelf: 'center'}}
        multiline={true}
        placeholder="Enter organization name..."
        /> 
        <Text style={{fontSize: 24, paddingTop: 20, paddingBottom: 5, textAlign: 'center'}}>Location of Start:</Text>
            <TextInput
                style={{ backgroundColor: 'white', height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, width: 300, alignSelf: 'center', textAlign: 'left' }}
                multiline={true}
                placeholder="Enter Location..."
            /> 
        <Text style={{fontSize: 24, paddingTop: 20, paddingBottom: 5, textAlign: 'center'}}>Organization Email:</Text>
            <TextInput
                style={{ backgroundColor: 'white', height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, textAlign: 'left', width: 300, alignSelf: 'center'}}
                multiline={true}
                placeholder="Enter organization's email address..."
        />                     
    <View>
    <Text style={{fontSize: 24, paddingTop: 20, paddingBottom: 5, textAlign: 'center'}}>Will You (Organization User) Also Be Cleaning Up?</Text>
        <View style={{width: 100, 
                    height: 40, 
                    alignSelf: 'center', 
                    borderColor: 'gray', 
                    borderWidth: 1, 
                    marginBottom: 10,
                    marginTop: 10,
                    backgroundColor: 'white'
                    }}>
            <Button title="Yes" color="black"></Button>
        </View>
        <View style={{width: 100, 
                    height: 40, 
                    alignSelf: 'center', 
                    borderColor: 'gray', 
                    borderWidth: 1, 
                    marginBottom: 20,
                    backgroundColor: 'white'
                    }}>
            <Button title="No" color="black"></Button>
        </View>
        <View style={{
                    width: 200,
                    height: 40,
                    alignSelf: 'center',
                    borderColor: 'grey',
                    borderWidth: 1,
                    marginTop: 20,
                    backgroundColor: 'forestgreen',
        }}>
          <Button title="Make Cleanup Live" color="black"/>
        </View>
    </View> 
    </View>
  );
};
export default Org_menu;




