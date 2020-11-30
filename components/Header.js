import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#7b1fa2',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        height: 65,
    },
    title: {
        color: '#ffffff',
    }
});

export default Header;