import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Modal, ActivityIndicator } from 'react-native';
import { background, heading, format, submit_button, submit_button_text, history_heading } from "../../Features/Design.js";
import { colors } from "../../Features/colors.js";
import fetchProtectedData from './../getData.js'; 
import { useFocusEffect } from '@react-navigation/native';

function History() {
    const [selectedCleanup, setSelectedCleanup] = useState(null);
    const [cleanups, setCleanups] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    // Fetch user data when component mounts
    // Fetch user data when component mounts
    const fetchUserId = async () => {
        try {
            const userData = await fetchProtectedData(); // Call the function to fetch user data
            // Fetch cleanups after setting the user ID
            
            fetchCleanups(userData.user.userId);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    // Fetch cleanups when the component is focused
    useFocusEffect(
        React.useCallback(() => {
            fetchUserId();
        }, [])
    );

    const fetchCleanups = async (user_id) => {
        try {
            const response = await fetch(`${process.env.API_URL}/getCleanupInfo/${user_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                setCleanups(data);
            } else {
                throw new Error('Error fetching cleanup history');
            }
        } catch (error) {
            console.error('Error fetching cleanups:', error);
        } finally {
            setLoading(false); // Set loading to false after cleanup data is fetched or in case of error
        }
    };

    const handleCleanupSelection = (cleanup) => {
        setSelectedCleanup(cleanup);
    };

    const cleanup_info = () => {
        return cleanups.map((cleanup, index) => (
            <TouchableOpacity
                key={index}
                style={[styles.cleanups]}
                onPress={() => handleCleanupSelection(cleanup)}
            >
                <Text>{cleanup[0]}</Text>
            </TouchableOpacity>
        ));
    }

    if (loading) {
        // If loading is true, display ActivityIndicator
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={background}>
            <Text style={ heading }> PAST CLEANUPS </Text>
            <View style={styles.box}>
            <Text style={ heading }> Select a Date: </Text>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {cleanup_info()}
                </ScrollView>
            </View>
            <Modal
                visible={selectedCleanup !== null}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
        {selectedCleanup && (
            <>
                <Text style={history_heading}>Date</Text>
                <Text style={styles.text}>{selectedCleanup[0]}</Text>
                <Text style={history_heading}>Location</Text>
                <Text style={styles.text}>{selectedCleanup[2]}</Text>
                <Text style={history_heading}>Duration</Text>
                <Text style={styles.text}>{selectedCleanup[1]}</Text>
                <Text style={history_heading}>Common Items</Text>
                <Text style={styles.text}>
                    {selectedCleanup[3].map((item, index) => (
                        <React.Fragment key={index}>
                            <Text>{item}</Text>
                            {index !== selectedCleanup[3].length - 1 && <Text>{"\n"}</Text>}
                        </React.Fragment>
                    ))}
                </Text>
                <Text style={history_heading}>Priority Items</Text>
                <Text style={styles.text}>
                    {selectedCleanup[4].map((item, index) => (
                        <React.Fragment key={index}>
                            <Text>{item}</Text>
                            {index !== selectedCleanup[4].length - 1 && <Text>{"\n"}</Text>}
                        </React.Fragment>
                    ))}
                </Text>
                <Text style={history_heading}>Total Items</Text>
                <Text style={styles.text}>{selectedCleanup[5]}</Text>
                {/* Add other cleanup details as needed */}
            </>
        )}
                    <TouchableOpacity
                        style={[submit_button, { alignSelf: 'center' }]}
                        onPress={() => setSelectedCleanup(null)}>
                        <View style={format}>
                            <Text style={submit_button_text}>Close</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    box: {
        backgroundColor: 'white',
        width: '80%',
        height: '70%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '20%',
    },
    cleanups: {
        backgroundColor: colors.colors.Moss_Green,
        height: '10%',
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    modalContainer: {
        flex: 1,
        backgroundColor: colors.colors.Chesapeake_Teal,
        maxHeight: '100%',
        width: '80%',
        marginHorizontal: '10%',
        marginVertical: '10%',
        marginTop: '20%'
    },

    text: {
        marginLeft: '10%',
        marginTop: '5%'
    }
});

export default History;