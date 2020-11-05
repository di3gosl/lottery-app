import React from 'react';
import { View, StyleSheet } from 'react-native';
import Start from './../components/Start';

const StartScreen = (props) => {
    return (
        <View style={styles.container}>
            <Start />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
});

export default StartScreen;