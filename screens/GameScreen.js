import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MainCard from './../components/MainCard';
import HistoryCards from './../components/HistoryCards';
import { findNewCard } from './../utils';
import { Audio } from 'expo-av';

const GameScreen = (props) => {
    const totalCards = 54;

    const [mainCardImage, setMainCardImage] = useState(null);
    const [historyImages, setHistoryImages] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [finished, setFinished] = useState(false);

    const playSound = async (card) => {
        const soundObject = new Audio.Sound();
        console.log('Playing ' + card['name'])
        try {
            const soundRequire = card['soundSrc'];
            if (soundRequire == null) {
                return;
            }

            const onPlaybackStatusUpdate = (playbackStatus) => {
                if (playbackStatus.isLoaded && playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                    soundObject.unloadAsync();
                }
            };

            soundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
            await soundObject.loadAsync(soundRequire);
            await soundObject.setVolumeAsync(card['volume']);
            await soundObject.playAsync();
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        let intervalObj = null;
        if (isPlaying) {
            intervalObj = setInterval(() => {
                if (historyImages.length == totalCards - 1) {
                    clearInterval(intervalObj);
                    setIsPlaying(false);
                    setFinished(true);
                }

                const used = [];
                for (const historyImage of historyImages) {
                    used.push(historyImage['id']);
                }

                const card = findNewCard(1, totalCards, used);
                if (card == null) {
                    clearInterval(intervalObj);
                    setIsPlaying(false);
                    setFinished(true);
                    return;
                }

                setMainCardImage(card);
                playSound(card);

                setHistoryImages((historyImages) => {
                    console.log('Cards played: ', historyImages.length)
                    return [...historyImages, card];
                });
            }, 2000);
        }

        return () => {
            if (intervalObj != null) {
                clearInterval(intervalObj);
            }
        };
    }, [historyImages, isPlaying]);

    useEffect(() => {
        const firstCard = findNewCard(1, totalCards, []);
        setMainCardImage(firstCard);
        setHistoryImages([firstCard]);
        playSound(firstCard);
    }, []);

    const handleOnPause = () => {
        if (!finished) {
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <View style={styles.container}>
            <MainCard
                mainCardImage={mainCardImage}
                isPlaying={isPlaying}
                finished={finished}
                handleOnPause={handleOnPause}
            />
            <HistoryCards
                historyImages={historyImages}
                setHistoryImages={setHistoryImages}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default GameScreen;