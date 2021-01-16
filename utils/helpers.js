import AsyncStorage from '@react-native-community/async-storage'
import {
    _getDecks,
    _getDeck,
    _saveDeckTitle,
    _addCardToDeck,
    FLASHCARD_STORAGE_KEY
} from './_DATA'

export function getDecks () {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then((results) => JSON.parse(results))
}

// export function getDeck (id) {
//     const card = {
//         title: 'nothing',
//         questions: [1,2,3]
//     }
//     return typeof id === 'undefined'
//         ? card
//         : card[id]
// }

export function getDeck (id) {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then((results) => JSON.parse(result))
        .then((decks) => decks[id])
}

export function saveDeckTitle (title) {
    const deck = {
        title,
        questions: []
    };

    return AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
        [title]: deck
    }))
}

export function addCardToDeck (title, card) {
    return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
        [title]: card
    }))
}