import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Modal } from 'react-native';
import { background, heading, format, submit_button, submit_button_text, history_heading } from "../../Features/Design.js"
import { colors } from "../../Features/colors.js"

function History() {
    const [selectedCleanup, setSelectedCleanup] = useState(null);
    const [cleanups, setCleanups] = useState([]);

    useEffect(() => {
        // Fetch cleanups when component mounts
        fetchCleanups();
    }, []);

    const fetchCleanups = async () => {
        try {
            const response = await fetch(`${process.env.API_URL}/getCleanupInfo/20`, {
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
                <Text>Date: {cleanup[0]}</Text>
                <Text>{cleanup.date}</Text>
            </TouchableOpacity>
        ));
    }

    return (
        <View style={background}>
            <View style={styles.box}>
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
                <Text style={styles.text}>{selectedCleanup[1]}</Text>
                <Text style={history_heading}>Duration</Text>
                <Text style={styles.text}>{selectedCleanup[2]}</Text>
                <Text style={history_heading}>Common Items</Text>
                <Text style={styles.text}>{selectedCleanup[3]}</Text>
                <Text style={history_heading}>Priority Items</Text>
                <Text style={styles.text}>{selectedCleanup[4]}</Text>
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
