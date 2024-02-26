import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';


let V_with_menu = () => {
    return(
    <View>
        <TextInput
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
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 200,
      justifyContent: 'space-evenly', // Adjust as needed
    },
    box: {
        borderWidth: 1,
        height: 40,
        width: 130,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'gold',
        margin: 5,
    },
    text: {
        textAlign: 'center'
    }

});