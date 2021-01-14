import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#944e6c', height: Constants.statusBarHeight}}>
        <StatusBar translucent backgroundColor='#944e6c' barStyle='light-content' />
      </View>
      <View style={styles.mainContent}>
        <Quiz />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    paddingTop: 30,
    fontSize: 25
  }
});
