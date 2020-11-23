import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainCard = (props) => {
    if (props.mainCardImage == null) {
        return null;
    }

    let icon = <Ionicons name="md-play" size={32} color="#fff" />;
    if (props.isPlaying) {
        icon = <Ionicons name="md-pause" size={32} color="#fff" />;
    }

    const imgRequire = props.mainCardImage['imgSrc'];
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={props.finished ? styles.disabledButton : styles.button}
                activeOpacity={0.6}
                onPress={props.handleOnPause}
                disabled={props.finished}
            >
                <Text style={styles.buttonText}>{icon}</Text>
            </TouchableOpacity>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={imgRequire}
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
        width: 80,
        padding: 10,
        paddingVertical: 12,
        borderRadius: 10,
    },
    disabledButton: {
        alignItems: 'center',
        backgroundColor: '#9575cd',
        width: 80,
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