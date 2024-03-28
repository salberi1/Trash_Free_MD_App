import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';
import { background, format } from "../Features/Design.js"



let V_with_menu = () => {
    return(
    <View style={background}>
        <TextInput // search bar
            style={styles.temp_search_bar}
            placeholder="Search for Organization"
        /> 
        <View style={styles.container}>
            {[...Array(8)].map((_, index) => (
                <TouchableOpacity key={index} style={styles.box} onPress={() => handlePress(index + 1)}>
                    <View style={format}>
                        <Text>Organization {index + 1}</Text>
                    </View>
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
      marginTop: '40%',
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

    temp_search_bar: {
        marginTop: '25%',
        borderWidth: 1,
        width: 300,
        height: 40,
        paddingLeft: 30,
        backgroundColor: 'white',
        borderRadius: 60,
        alignSelf: 'center'
    }
});