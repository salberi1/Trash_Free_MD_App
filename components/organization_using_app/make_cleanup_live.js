import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { background, format, submit_button_text } from "../Features/Design.js";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors } from "../Features/colors.js";

/*This page will allow organizations to set the location and radius for the cleanup*/


let Make_Cleanup_Live_Org = ({navigation}) => {

    const volunteers = 20; //placeholder number

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });
    const handleLocationSelect = (data, details) => {
        
        const {geometry} = details;
        const {location} = geometry;

        setRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        });


    };
    return (
        <View style={background}>

            <View style={{ zIndex: 999, top: '1.3%', width: '89.2%', alignSelf: 'center', position: 'absolute', backgroundColor: 'white', borderRadius: 10 }}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        handleLocationSelect(data, details);
                        }}         
                    query={{
                        key: 'AIzaSyBjOvFTHAV1-ZDMkh0YXzU-mvD32zqUiBs',
                        language: 'en'
                    }}
                    style={{
                        flex: 1,
                        zIndex: 1,
                        backgroundColor: 'white',
                    }}
                    listViewDisplayed='auto'
                    listStyle={{flex: 1, backgroundColor: 'white'}}
                />   
            </View>

            <View style={styles.mapContainer}>
                <MapView style={styles.map} 
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    region={region}
                >
                    <Marker
                        coordinate={{latitude: region.latitude, longitude: region.longitude}}
                        title={"Marker Title"}
                        description={"Marker Description"}
                    />  
                    <Circle
                        center={{latitude: region.latitude, longitude: region.longitude}}
                        radius={1000}
                        fillColor={`${colors.colors.City_Blue}80`}

                    />
                </MapView>
            </View>

            <TouchableOpacity 
                style={[styles.buttons, styles.volunteer_button]}
                onPress={() => navigation.navigate("Volunteers Join")}
            >
                <View style={format}>
                    <Text style={submit_button_text}>{volunteers} VOLUNTEER(S)</Text>
                </View>
            </TouchableOpacity>
            

            
            <TouchableOpacity 
                style={styles.buttons}
            >
                <View style={format}>
                    <Text style={submit_button_text}>START</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttons}
            >
                <View style={format}>
                    <Text style={submit_button_text}>SHARE</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default Make_Cleanup_Live_Org;

const styles = StyleSheet.create({
    buttons: {
        height: 35,
        width: '40%',
        borderWidth: 1,
        backgroundColor: '#efca66',
        alignSelf: 'center',
        marginTop: 0,
        marginBottom: '10%',
        borderRadius: 10
    },
    volunteer_button: {
        backgroundColor: '#9ab880',
        width: '60%',
        height: 40,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: '5%',
    },
    mapContainer: {
        flex: 1,
        height: '50%', 
        marginTop: '1.1%', 
        marginBottom: '20%', 
        width: '89.7%',
        borderRadius: 5,
        borderWidth: 1,
        zIndex: 1,
    },
    map: {
        flex: 1
    }
});
