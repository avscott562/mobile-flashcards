import AsyncStorage from '@react-native-community/async-storage'

let decks = {
    birds: {
        title: 'Birds',
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
        title: 'Food',
        questions: []
    },
    songs: {
        title: 'Songs',
        questions: [
            {
                question: 'What is the most sung song in the world?',
                answer: 'The Happy Birthday Song'
            },
        ]
    },
}

export const FLASHCARD_STORAGE_KEY = 'UdaciFlashcards:flashcards'
export const NOTIFICATION_STORAGE_KEY = 'UdaciFlashcards:notifications'

AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks))