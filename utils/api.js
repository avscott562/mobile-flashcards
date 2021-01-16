// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { FLASHCARD_STORAGE_KEY } from './_DATA'

// export function submitDeck ({ deck, key }) {
//     return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
//         [key]: deck
//     }))
// }

// export function removeDeck (key) {
//     return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
//       .then((results) => {
//           const data = JSON.parse(results)
//           data[key] = undefined
//           delete data[key]
//           AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data))
//       })
// }