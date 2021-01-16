// import {
//     getDecks,
//     getDeck,
//     saveDeckTitle,
//     addCardToDeck
// } from '../utils/helpers'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

// function handleReceiveDecks () {
//     return (dispatch) => {
//         // dispatch(showLoading())
//         return getDecks()
//           .then(({ decks }) => {
//               dispatch(receiveDecks(decks))
//             //   dispatch(hideLoading())
//           })
//     }
// }

export function receiveDeck (deck) {
    return {
        type: RECEIVE_DECK,
        deck
    }
}

// function handleReceiveDeck (id) {
//     return (dispatch) => {
//         // dispatch(showLoading())
//         return getDeck(id)
//           .then(({ deck }) => {
//               dispatch(receiveDeck(deck))
//             //   dispatch(hideLoading())
//           })
//     }
// }

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

// function handleAddDeck (title) {
//     return (dispatch) => {
//         // dispatch(showLoading())

//         return saveDeckTitle(title)
//           .then((deck) => dispatch(addDeck(deck)))
//         //   .then(() => dispatch(hideLoading()))
//     }
// }

export function addCard (title, card) {
    return {
        type: ADD_CARD,
        title,
        card
    }
}

// function handleAddCard (title, card) {
//     return (dispatch) => {
//         dispatch(addCard(title, card))

//         return addCardToDeck(title, card)
//           .catch((e) => {
//               console.warn('Error in handleAddCard: ', e)
//               dispatch(addCard(title, card))
//               alert('There was an error adding the card to the deck.  Please try again.')
//           })
//     }
// }