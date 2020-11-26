import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
    const startHeaderOptions = {
        title: 'Lotería Mexicana by Mateo',
        headerStyle: {
            backgroundColor: '#673ab7',
        },
        headerTintColor: '#fff',
    };
    const gametHeaderOptions = ({ navigation }) => {
        return {
            title: 'Lotería Mexicana by Mateo',
            headerStyle: {
                backgroundColor: '#673ab7',
            },
            headerTintColor: '#fff',
            // headerRight: (props) => (
            //     <TouchableOpacity
            //         style={styles.button}
            //         activeOpacity={0.6}
            //         onPress={() => navigation.replace('Play')}
            //     >
            //         <Text style={styles.buttonText}>Nuevo Juego</Text>
            //         <Text style={styles.buttonText}><Ionicons name="ios-arrow-forward" size={18} color="#fff" /></Text>
            //     </TouchableOpacity>
            // ),
        }
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} options={startHeaderOptions} />
                <Stack.Screen name="Play" component={GameScreen} options={gametHeaderOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 115,
        paddingRight: 15,
    },
    buttonText: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
