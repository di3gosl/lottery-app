import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

const HistoryCards = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
            >
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
                <Image
                    style={styles.image} 
                    source={require('./../assets/images/camaron.jpg')} 
                    resizeMode="contain"
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        alignItems: 'center',
        height: 150,
        backgroundColor: '#fff',
    },
    image: {
        width: 110,
        height: '100%',
    },
});

export default HistoryCards;