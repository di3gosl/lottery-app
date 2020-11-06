import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Start = (props) => {
    const playClickHandler = () => {
        props.navigation.navigate('Play');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={playClickHandler}
                activeOpacity={0.6}
            >
                <Text style={styles.buttonText}>Iniciar Juego</Text>
                <Text style={styles.icon}><Ionicons name="md-play" size={30} color="#fff" /></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: 220,
        maxWidth: '85%',
        height: 200,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#673ab7',
        padding: 10,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    },
});

export default Start;