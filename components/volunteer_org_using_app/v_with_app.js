import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';
import { background } from "../Features/Design.js"



let V_with_menu = () => {
    return(
    <View style={styles.background}>
        <TextInput // search bar
            style={{
                marginTop: 20,
                borderWidth: 1,
                width: 300,
                height: 40,
                paddingLeft: 30,
                backgroundColor: 'white',
                borderRadius: 60,
                alignSelf: 'center'
            }}
            placeholder="Search for Organization"
        /> 
        <View style={styles.container}>
            {[...Array(8)].map((_, index) => (
                <TouchableOpacity key={index} style={styles.box} onPress={() => handlePress(index + 1)}>
                    <Text style={styles.text}>Organization {index + 1}</Text>
                </TouchableOpacity>
            ))}
        </View>

        <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 20
            }}>
            More...</Text>
    </View>
    );
};
export default V_with_menu;

const handlePress = (organizationNumber) => {
    console.log(`Temporary`);
  };

const styles = StyleSheet.create({
    container: { // sets the boxes with the organizations to be evently spaced
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 200,
      justifyContent: 'space-evenly', 
    },
    box: {
        borderWidth: 1, //designs the boxes holding the organizations
        height: 40,
        width: 130,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#efca66',
        margin: 5,
    },
    text: {
        textAlign: 'center' // used for the "more" text
    },

    background: {
        flex: 1,
        backgroundColor: '#afd8c9',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100,
        width: "100%",
        height: "100%"
      }

});