import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainCard = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
            >
                <Text style={styles.buttonText}><Ionicons name="md-pause" size={32} color="#fff" /></Text>
            </TouchableOpacity>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={require('./../assets/images/sandia.png')}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    card: {
        padding: 15,
        backgroundColor: '#fff',
        elevation: 3,
        width: 400,
        maxWidth: '90%',
        marginTop: 15,
        alignItems: 'center',
        height: 400,
        maxHeight: '80%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#673ab7',
        width: 60,
        padding: 10,
        paddingVertical: 12,
        borderRadius: 10,
    },
    buttonText: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default MainCard;