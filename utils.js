export const generateRandomNumber = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
}

export const generateRandomNumberNoRepeat = (min, max, used) => {
    let index = null;
    let cont = 0;
    while (index == null && cont <= 54) {
        cont++;
        index = Math.floor(min + Math.random() * (max + 1 - min));
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
        volume: 0.8,
        imgSrc: require('./assets/images/gallo.png'),
        soundSrc: require('./assets/sounds/gallo.mp3'),
    },
    {
        id: 2,
        name: 'diablo',
        volume: 0.8,
        imgSrc: require('./assets/images/diablo.jpg'),
        soundSrc: require('./assets/sounds/diablo.mp3'),
    },
    {
        id: 3,
        name: 'dama',
        volume: 0.8,
        imgSrc: require('./assets/images/dama.jpg'),
        soundSrc: require('./assets/sounds/dama.mp3'),
    },
    {
        id: 4,
        name: 'catrin',
        volume: 0.8,
        imgSrc: require('./assets/images/catrin.jpg'),
        soundSrc: require('./assets/sounds/catrin.mp3'),
    },
    {
        id: 5,
        name: 'paraguas',
        volume: 0.8,
        imgSrc: require('./assets/images/paraguas.jpg'),
        soundSrc: require('./assets/sounds/paraguas.mp3'),
    },
    {
        id: 6,
        name: 'sirena',
        volume: 0.8,
        imgSrc: require('./assets/images/sirena.jpg'),
        soundSrc: require('./assets/sounds/sirena.mp3'),
    },
    {
        id: 7,
        name: 'escalera',
        volume: 0.8,
        imgSrc: require('./assets/images/escalera.jpg'),
        soundSrc: require('./assets/sounds/escalera.mp3'),
    },
    {
        id: 8,
        name: 'botella',
        volume: 0.8,
        imgSrc: require('./assets/images/botella.jpg'),
        soundSrc: require('./assets/sounds/botella.mp3'),
    },
    {
        id: 9,
        name: 'barril',
        volume: 0.8,
        imgSrc: require('./assets/images/barril.jpg'),
        soundSrc: require('./assets/sounds/barril.mp3'),
    },
    {
        id: 10,
        name: 'arbol',
        volume: 0.8,
        imgSrc: require('./assets/images/arbol.jpg'),
        soundSrc: require('./assets/sounds/arbol.mp3'),
    },
    {
        id: 11,
        name: 'melon',
        volume: 0.8,
        imgSrc: require('./assets/images/melon.jpg'),
        soundSrc: require('./assets/sounds/melon.mp3'),
    },
    {
        id: 12,
        name: 'valiente',
        volume: 0.8,
        imgSrc: require('./assets/images/valiente.jpg'),
        soundSrc: require('./assets/sounds/valiente.mp3'),
    },
    {
        id: 13,
        name: 'gorrito',
        volume: 0.8,
        imgSrc: require('./assets/images/gorrito.jpg'),
        soundSrc: require('./assets/sounds/gorrito.mp3'),
    },
    {
        id: 14,
        name: 'muerte',
        volume: 0.8,
        imgSrc: require('./assets/images/muerte.jpg'),
        soundSrc: require('./assets/sounds/muerte.mp3'),
    },
    {
        id: 15,
        name: 'pera',
        volume: 0.8,
        imgSrc: require('./assets/images/pera.jpg'),
        soundSrc: require('./assets/sounds/pera.mp3'),
    },
    {
        id: 16,
        name: 'bandera',
        volume: 0.8,
        imgSrc: require('./assets/images/bandera.jpg'),
        soundSrc: require('./assets/sounds/bandera.mp3'),
    },
    {
        id: 17,
        name: 'bandolon',
        volume: 0.8,
        imgSrc: require('./assets/images/bandolon.jpg'),
        soundSrc: require('./assets/sounds/bandolon.mp3'),
    },
    {
        id: 18,
        name: 'violoncello',
        volume: 0.8,
        imgSrc: require('./assets/images/violoncello.jpg'),
        soundSrc: require('./assets/sounds/violoncello.mp3'),
    },
    {
        id: 19,
        name: 'garza',
        volume: 0.8,
        imgSrc: require('./assets/images/garza.jpg'),
        soundSrc: require('./assets/sounds/garza.mp3'),
    },
    {
        id: 20,
        name: 'pajaro',
        volume: 0.8,
        imgSrc: require('./assets/images/pajaro.jpg'),
        soundSrc: require('./assets/sounds/pajaro.mp3'),
    },
    {
        id: 21,
        name: 'mano',
        volume: 0.8,
        imgSrc: require('./assets/images/mano.jpg'),
        soundSrc: require('./assets/sounds/mano.mp3'),
    },
    {
        id: 22,
        name: 'bota',
        volume: 0.8,
        imgSrc: require('./assets/images/bota.png'),
        soundSrc: require('./assets/sounds/bota.mp3'),
    },
    {
        id: 23,
        name: 'luna',
        volume: 0.8,
        imgSrc: require('./assets/images/luna.jpg'),
        soundSrc: require('./assets/sounds/luna.mp3'),
    },
    {
        id: 24,
        name: 'cotorro',
        volume: 0.8,
        imgSrc: require('./assets/images/cotorro.jpg'),
        soundSrc: require('./assets/sounds/cotorro.mp3'),
    },
    {
        id: 25,
        name: 'borracho',
        volume: 0.8,
        imgSrc: require('./assets/images/borracho.jpg'),
        soundSrc: require('./assets/sounds/borracho.mp3'),
    },
    {
        id: 26,
        name: 'negrito',
        volume: 0.8,
        imgSrc: require('./assets/images/negrito.jpg'),
        soundSrc: require('./assets/sounds/negrito.mp3'),
    },
    {
        id: 27,
        name: 'corazon',
        volume: 0.8,
        imgSrc: require('./assets/images/corazon.jpg'),
        soundSrc: require('./assets/sounds/corazon.mp3'),
    },
    {
        id: 28,
        name: 'sandia',
        volume: 0.8,
        imgSrc: require('./assets/images/sandia.png'),
        soundSrc: require('./assets/sounds/sandia.mp3'),
    },
    {
        id: 29,
        name: 'tambor',
        volume: 0.8,
        imgSrc: require('./assets/images/tambor.jpg'),
        soundSrc: require('./assets/sounds/tambor.mp3'),
    },
    {
        id: 30,
        name: 'camaron',
        volume: 0.8,
        imgSrc: require('./assets/images/camaron.jpg'),
        soundSrc: require('./assets/sounds/camaron.mp3'),
    },
    {
        id: 31,
        name: 'jaras',
        volume: 0.8,
        imgSrc: require('./assets/images/jaras.jpg'),
        soundSrc: require('./assets/sounds/jaras.mp3'),
    },
    {
        id: 32,
        name: 'musico',
        volume: 0.8,
        imgSrc: require('./assets/images/musico.jpg'),
        soundSrc: require('./assets/sounds/musico.mp3'),
    },
    {
        id: 33,
        name: 'arana',
        volume: 0.8,
        imgSrc: require('./assets/images/arana.jpg'),
        soundSrc: require('./assets/sounds/arana.mp3'),
    },
    {
        id: 34,
        name: 'soldado',
        volume: 0.8,
        imgSrc: require('./assets/images/soldado.jpg'),
        soundSrc: require('./assets/sounds/soldado.mp3'),
    },
    {
        id: 35,
        name: 'estrella',
        volume: 0.8,
        imgSrc: require('./assets/images/estrella.png'),
        soundSrc: require('./assets/sounds/estrella.mp3'),
    },
    {
        id: 36,
        name: 'cazo',
        volume: 0.8,
        imgSrc: require('./assets/images/cazo.jpg'),
        soundSrc: require('./assets/sounds/cazo.mp3'),
    },
    {
        id: 37,
        name: 'mundo',
        volume: 0.8,
        imgSrc: require('./assets/images/mundo.jpg'),
        soundSrc: require('./assets/sounds/mundo.mp3'),
    },
    {
        id: 38,
        name: 'apache',
        volume: 0.8,
        imgSrc: require('./assets/images/apache.jpg'),
        soundSrc: require('./assets/sounds/apache.mp3'),
    },
    {
        id: 39,
        name: 'nopal',
        volume: 0.8,
        imgSrc: require('./assets/images/nopal.jpg'),
        soundSrc: require('./assets/sounds/nopal.mp3'),
    },
    {
        id: 40,
        name: 'alacran',
        volume: 0.8,
        imgSrc: require('./assets/images/alacran.jpg'),
        soundSrc: require('./assets/sounds/alacran.mp3'),
    },
    {
        id: 41,
        name: 'rosa',
        volume: 0.8,
        imgSrc: require('./assets/images/rosa.jpg'),
        soundSrc: require('./assets/sounds/rosa.mp3'),
    },
    {
        id: 42,
        name: 'calavera',
        volume: 0.8,
        imgSrc: require('./assets/images/calavera.jpg'),
        soundSrc: require('./assets/sounds/calavera.mp3'),
    },
    {
        id: 43,
        name: 'campana',
        volume: 0.8,
        imgSrc: require('./assets/images/campana.jpg'),
        soundSrc: require('./assets/sounds/campana.mp3'),
    },
    {
        id: 44,
        name: 'cantarito',
        volume: 0.8,
        imgSrc: require('./assets/images/cantarito.jpg'),
        soundSrc: require('./assets/sounds/cantarito.mp3'),
    },
    {
        id: 45,
        name: 'venado',
        volume: 0.8,
        imgSrc: require('./assets/images/venado.jpg'),
        soundSrc: require('./assets/sounds/venado.mp3'),
    },
    {
        id: 46,
        name: 'sol',
        volume: 0.8,
        imgSrc: require('./assets/images/sol.jpg'),
        soundSrc: require('./assets/sounds/sol.mp3'),
    },
    {
        id: 47,
        name: 'corona',
        volume: 0.8,
        imgSrc: require('./assets/images/corona.jpg'),
        soundSrc: require('./assets/sounds/corona.mp3'),
    },
    {
        id: 48,
        name: 'chalupa',
        volume: 0.8,
        imgSrc: require('./assets/images/chalupa.jpg'),
        soundSrc: require('./assets/sounds/chalupa.mp3'),
    },
    {
        id: 49,
        name: 'pino',
        volume: 0.8,
        imgSrc: require('./assets/images/pino.jpg'),
        soundSrc: require('./assets/sounds/pino.mp3'),
    },
    {
        id: 50,
        name: 'pescado',
        volume: 0.8,
        imgSrc: require('./assets/images/pescado.jpg'),
        soundSrc: require('./assets/sounds/pescado.mp3'),
    },
    {
        id: 51,
        name: 'palma',
        volume: 0.8,
        imgSrc: require('./assets/images/palma.jpg'),
        soundSrc: require('./assets/sounds/palma.mp3'),
    },
    {
        id: 52,
        name: 'maceta',
        volume: 0.8,
        imgSrc: require('./assets/images/maceta.jpg'),
        soundSrc: require('./assets/sounds/maceta.mp3'),
    },
    {
        id: 53,
        name: 'arpa',
        volume: 0.8,
        imgSrc: require('./assets/images/arpa.jpg'),
        soundSrc: require('./assets/sounds/arpa.mp3'),
    },
    {
        id: 54,
        name: 'rana',
        volume: 0.8,
        imgSrc: require('./assets/images/rana.jpg'),
        soundSrc: require('./assets/sounds/rana.mp3'),
    },
];