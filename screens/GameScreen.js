import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainCard from './../components/MainCard';
import HistoryCards from './../components/HistoryCards';

const GameScreen = (props) => {
    return (
        <View style={styles.container}>
            <MainCard />
            <HistoryCards />
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

export default GameScreen;