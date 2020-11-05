import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

const MainCard = (props) => {
    return (
        <View style={styles.container}>
            <Button style={styles.button} title="Pause" />
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
        // elevation: 5,
        width: 400,
        maxWidth: '90%',
        marginTop: 10,
        alignItems: 'center',
        height: 400,
        maxHeight: '80%',
    },
    button: {
        width: 100,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default MainCard;