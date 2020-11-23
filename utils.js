export const generateRandomNumber = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
}

export const generateRandomNumberNoRepeat = (min, max, used) => {
    let index = null;
    let cont = 0;
    while (index == null && cont <= 54) {
        cont++;
        index = Math.round(min + Math.random() * (max - min));
        if (used.includes(index)) {
            index = null;
        }
    }
    return index;
}

export const findNewCard = (min, max, used) => {
    let card = null;
    let cont = 0;
    while (card == null && cont <= 54) {
        cont++;
        const id = generateRandomNumberNoRepeat(min, max, used);
        card = allCards.find((element) => element['id'] == id);
    }
    return card;
};

export const allCards = [
    {
        id: 1,
        name: 'gallo',
        imgType: 'png',
        volume: 0.8,
        imgSrc: require('./assets/images/gallo.png'),
        soundSrc: require('./assets/sounds/gallo.mp3'),
    },
    {
        id: 2,
        name: 'diablo',
        imgType: 'jpg',
        volume: 0.8,
        imgSrc: require('./assets/images/diablo.jpg'),
        soundSrc: require('./assets/sounds/diablo.mp3'),
    },
    {
        id: 3,
        name: 'dama',
        imgType: 'jpg',
        volume: 0.8,
        imgSrc: require('./assets/images/dama.jpg'),
        soundSrc: require('./assets/sounds/dama.mp3'),
    },
    {
        id: 4,
        name: 'catrin',
        imgType: 'jpg',
        volume: 0.8,
        imgSrc: require('./assets/images/catrin.jpg'),
        soundSrc: require('./assets/sounds/catrin.mp3'),
    },
    {
        id: 5,
        name: 'paraguas',
        imgType: 'jpg',
        volume: 0.8,
        imgSrc: require('./assets/images/paraguas.jpg'),
        soundSrc: require('./assets/sounds/paraguas.mp3'),
    },
    {
        id: 6,
        name: 'sirena',
        imgType: 'jpg',
        volume: 0.8,
        imgSrc: require('./assets/images/sirena.jpg'),
        soundSrc: require('./assets/sounds/sirena.mp3'),
    },
    {
        id: 9,
        name: 'barril',
        imgType: 'jpg',
        volume: 0.8,
        imgSrc: require('./assets/images/barril.jpg'),
        soundSrc: require('./assets/sounds/barril.mp3'),
    },
    {
        id: 28,
        name: 'sandia',
        imgType: 'png',
        volume: 0.8,
        imgSrc: require('./assets/images/sandia.png'),
        soundSrc: require('./assets/sounds/sandia.mp3'),
    },
    {
        id: 30,
        name: 'camaron',
        imgType: 'jpg',
        volume: 0.8,
        imgSrc: require('./assets/images/camaron.jpg'),
        soundSrc: require('./assets/sounds/camaron.mp3'),
    },
];