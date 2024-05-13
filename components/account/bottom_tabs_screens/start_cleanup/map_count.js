import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState, useRef } from 'react';
import { background } from '../../../Features/Design';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors } from '../../../Features/colors';
import StopwatchTimer, {
    StopwatchTimerMethods,
  } from 'react-native-animated-stopwatch-timer';
import { color } from '../../../Features/colors.js';
import { stopwatchContainer, mapContainer, map, button, stopwatchControls } from '../../../Features/Map_Count_Design';




export default function Map_Count(){

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

    const stopwatchTimerRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);

    function handlePlayPause() {
        if (isRunning) {
            stopwatchTimerRef.current?.pause();
        } else {
            stopwatchTimerRef.current?.play();
        }
        setIsRunning(!isRunning);
    }

    function handleReset() {
        stopwatchTimerRef.current?.reset();
        setIsRunning(false);
    }  

    return(
    <View style={ background }>
         <View style={{ zIndex: 999, top: '1.5%', width: '89.2%', alignSelf: 'center', position: 'absolute', backgroundColor: 'white', borderRadius: 10 }}>
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
            <View style={ mapContainer }>
                <MapView style={ map } 
                    //provider={PROVIDER_GOOGLE}
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
            <Text style={{marginBottom: '10%'}}>Policy Priority Items: </Text>

            <View style={ stopwatchContainer }>
                <StopwatchTimer 
                    ref={stopwatchTimerRef} 
                    containerStyle={{ backgroundColor: 'white', height: '30%', width: '60%', borderRadius: 10, justifyContent: 'center', 
                    alignItems: 'center'}}
                    digitStyle={{fontSize: '20', alignSelf: 'center'}}
                />
                <View style={ stopwatchControls }>
                    <TouchableOpacity style={ button } onPress={handlePlayPause}>
                        <Text>{isRunning ? 'Pause Cleanup' : 'Start Cleanup'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ button } onPress={handleReset}>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
    );
}