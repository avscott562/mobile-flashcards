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
    return _getDeck(id)
}

export function saveDeckTitle (title) {
    return _saveDeckTitle(title)
}

export function addCardToDeck (title, card) {
    return _addCardToDeck(title, card)
}