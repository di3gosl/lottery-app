import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';

export default function App() {
    return (
        <View style={styles.container}>
            <Header title="Lotería Mexicana" />
            <StartScreen />
            {/* <GameScreen /> */}
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3e5f5',

        // paddingTop: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
});
