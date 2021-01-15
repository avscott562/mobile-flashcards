import {
    getDecks,
    getDeck,
    saveDeckTitle,
    addCardToDeck
} from '../utils/helpers'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function handleReceiveDecks () {
    return (dispatch) => {
        // dispatch(showLoading())
        return getDecks()
          .then(({ decks }) => {
              dispatch(receiveDecks(decks))
            //   dispatch(hideLoading())
          })
    }
}

function receiveDeck (deck) {
    return {
        type: RECEIVE_DECK,
        deck
    }
}

export function handleReceiveDeck (id) {
    return (dispatch) => {
        // dispatch(showLoading())
        return getDeck(id)
          .then(({ deck }) => {
              dispatch(receiveDeck(deck))
            //   dispatch(hideLoading())
          })
    }
}

function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleAddDeck (title) {
    return (dispatch) => {
        // dispatch(showLoading())

        return saveDeckTitle(title)
          .then((deck) => dispatch(addDeck(deck)))
        //   .then(() => dispatch(hideLoading()))
    }
}

function addCard (title, card) {
    return {
        type: ADD_CARD,
        title,
        card
    }
}

export function handleAddCard (title, card) {
    return (dispatch) => {
        dispatch(addCard(title, card))

        return addCardToDeck(title, card)
          .catch((e) => {
              console.warn('Error in handleAddCard: ', e)
              dispatch(addCard(title, card))
              alert('There was an error adding the card to the deck.  Please try again.')
          })
    }
}