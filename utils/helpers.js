import AsyncStorage from '@react-native-community/async-storage'
import { FLASHCARD_STORAGE_KEY, NOTIFICATION_STORAGE_KEY } from './_DATA'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'

export function getDecks () {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then((results) => JSON.parse(results))
}

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

export function clearLocalNotification() {
    AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
    return {
        title: 'Study hard!',
        body: `👋🏿 Don't forget to study today! 📖`,
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
              .then(({ status }) => {
                  if (status === 'granted') {
                      Notifications.cancelAllScheduledNotificationsAsync()

                      let tomorrow = new Date()
                      tomorrow.setDate(tomorrow.getDate() + 1)
                      tomorrow.setHours(18)
                      tomorrow.setMinutes(0)

                      Notifications.scheduleNotificationAsync(
                          createNotification(),
                          {
                              time: tomorrow,
                              repeat: 'day'
                          }
                      )

                      AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
                  }
              })
        }
    })
}