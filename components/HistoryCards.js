import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

const HistoryCards = (props) => {
    const renderImages = () => {
        const reversedImages = [...props.historyImages];
        reversedImages.reverse();
        return reversedImages.map((image, index) => {
            const imgRequire = image['imgSrc'];
            return (
                <Image
                    key={index}
                    style={styles.image}
                    source={imgRequire}
                    resizeMode="contain"
                    fadeDuration={0}
                />
            );
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
            >
                {renderImages()}
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