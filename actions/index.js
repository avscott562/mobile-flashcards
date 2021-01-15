export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

function addCard (deckId, card) {
    return {
        type: ADD_CARD,
        deckId,
        card
    }
}