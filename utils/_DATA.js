let decks = {
    birds: {
        title: 'birds',
        questions: [
            {
                question: 'What kind of bird talks?',
                answer: 'Parakeet'
            },
            {
                question: 'What bird is pink and shares its name with a Las Vegas hotel?',
                answer: 'Flamingo'
            }
        ]
    },
    food: {
        title: 'food',
        questions: []
    },
    songs: {
        title: 'songs',
        questions: [
            {
                question: 'What is the most sung song in the world?',
                answer: 'The Happy Birthday Song'
            },
        ]
    },
}

export function _getDecks () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...decks}), 1000)
    })
  }

  function formatDeck ({ title }) {
    return {
      title,
      questions: []
    }
  }

  export function _getDeck (id) {
    return new Promise((res, rej) => {
        const deck = decks[id]
      setTimeout(() => res(deck), 1000)
    })
  }

  function formatDeck ({ title }) {
    return {
      title,
      questions: []
    }
  }

  export function _saveDeckTitle (title) {
    return new Promise((res, rej) => {
      const deck = {
          title,
          questions: []
      };
  
      setTimeout(() => {
        decks = {
          ...decks,
          [title]: deck
        }
  
        res(deck)
      }, 1000)
    })
  }

  export function _addCardToDeck ({ deckId, card }) {
    return new Promise((res, rej) => {
      setTimeout(() => {

        decks = {
          ...decks,
          [deckId]: {
            ...decks[deckId],
            questions: decks[deckId].questions.concat([card])
          }
        }
  
        res()
      }, 500)
    })
  }