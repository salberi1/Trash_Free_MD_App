
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Modal } from 'react-native';
import { background, heading, format, submit_button, submit_button_text } from "../../Features/Design.js"
import { colors } from "../../Features/colors.js"
import { history_heading, text, box } from "../../Features/History_Design.js"
/* 
    This will hold the history of an individual's cleanup. It will have the date of the cleanup and when you press on the 
    date a popup will appear with the cleanups stats
*/ 

function History() {

    const [selectedCleanup, setSelectedCleanup] = useState(null);
    const cleanups = [
        {date: "1 / 2 / 3", 
        location: "Salisbury, MD", 
        duration: "2 hours", 
        organization: "none",
        policy_priority_items: [
            {item: "Bottle", number: 2},
            {item: "Styrofoam", number: 1}
        ],
        common_items: [
            { item: "item 1", number: 6},
            { item: "item 2", number : 4}
        ]},

        {date: "3 / 4 / 5", 
        location: "Casper High", 
        duration: "80 years", 
        organization: "none",
        policy_priority_items: [
            {item: "whatever", number: 2},
        ],
        common_items: [
            { item: "item 1", number: 6},
            { item: "item 2", number : 4},
            { item: "item 3", number: 11}
        ]},

        {date: "5 / 3 / 2024", 
        location: "TETC", 
        duration: "IDK", 
        organization: "none",
        policy_priority_items: [
            {item: "Bottle", number: 2},
            {item: "Styrofoam", number: 1},
            {item: "example", number: 5}
        ],
        common_items: [
            { item: "item 1", number: 6},
        ]}
    ];

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
                <Text>{cleanup.date}</Text>
            </TouchableOpacity>
        ));
    }
    

    return (
        <View style={background}>

                <View style={ box }>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {cleanup_info()}
                    </ScrollView>
                </View>
                <Modal
                visible={selectedCleanup !== null}
                animationType="slide"
                >
                <View style={styles.modalContainer}>
                    <Text style={ history_heading }>Date</Text>
                    <Text style={ text }>{selectedCleanup?.date}</Text>
                    <Text style={ history_heading }>Location</Text>
                    <Text style={ text }>{selectedCleanup?.location}</Text>
                    <Text style={ history_heading }>Duration</Text>
                    <Text style={ text }>{selectedCleanup?.duration}</Text>
                    <Text style={ history_heading }>Policy Priority Items</Text>
                    {selectedCleanup?.policy_priority_items.map((item, index) => (
                        <Text key={index} style={ text }> {item.item}: {item.number}</Text>
                    ))}
                    <Text style={ history_heading }>Common Items</Text>
                    {selectedCleanup?.common_items.map((item, index) => (
                        <Text key={index} style={ text }> {item.item}: {item.number}</Text>
                    ))}
                    <TouchableOpacity
                        style={[submit_button, {alignSelf: 'center'}]} 
                        onPress={() => setSelectedCleanup(null)}>
                        <View style={format}>
                            <Text style={ submit_button_text }>Close</Text>
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

});

export default History;