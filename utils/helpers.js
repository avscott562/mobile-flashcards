import {
    _getDecks,
    _getDeck,
    _saveDeckTitle,
    _addCardToDeck
} from './_DATA'

export function getDecks () {
    return _getDecks().then((decks) => ({
        decks
    }))
}

export function getDeck (id) {
    return _getDeck(id)
}

export function saveDeckTitle (title) {
    return _saveDeckTitle(title)
}

export function addCardToDeck (title, card) {
    return _addCardToDeck(title, card)
}