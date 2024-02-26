import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';

let Org_menu = () => {
  return (
    <View>
      <Text style={{fontSize: 24, padding: 5, textAlign: 'center'}}>Name of Organization:</Text>
      <TextInput
        style={styles.text_box}
        multiline={true}
        placeholder="Enter organization name..."
        /> 
        <Text style={styles.heading}>Location of Start:</Text>
            <TextInput
                style={styles.text_box}
                multiline={true}
                placeholder="Enter Location..."
            /> 
        <Text style={styles.heading}>Organization Email:</Text>
            <TextInput
                style={styles.text_box}
                multiline={true}
                placeholder="Enter organization's email address..."
        />                     
    <View>
    <Text style={styles.heading}>Will You (Organization User) Also Be Cleaning Up?</Text>
        <View style={{width: 100, 
                    height: 40, 
                    alignSelf: 'center', 
                    borderColor: 'gray', 
                    borderWidth: 1, 
                    marginBottom: 10,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 10
                    }}>
            <Button title="Yes" color="black"></Button>
        </View>
        <View style={{width: 100, 
                    height: 40, 
                    alignSelf: 'center', 
                    borderColor: 'gray', 
                    borderWidth: 1, 
                    marginBottom: 20,
                    backgroundColor: 'white',
                    borderRadius: 10
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

const styles = StyleSheet.create({
  heading: {
    fontSize: 24, 
    paddingTop: 20, 
    paddingBottom: 5, 
    textAlign: 'center'
  },
  text_box: {
    backgroundColor: 'white', 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    padding: 5, 
    width: 300, 
    alignSelf: 'center', 
    textAlign: 'left', 
    borderRadius: 10
  }

})




