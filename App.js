import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { mauve } from './utils/colors'

const DeckNavigatorStack = createStackNavigator()

const DeckNavigatorStackScreen = () => (
  <DeckNavigatorStack.Navigator
    initialRouteName='DeckList'
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: mauve,
      }
    }}>
    <DeckNavigatorStack.Screen 
      name='DeckList' 
      component={DeckList}
      options={{ title: 'Decks' }} />
    <DeckNavigatorStack.Screen 
      name='Deck' 
      component={Deck}
      options={({ route }) => ({title: route.params.title})} />
      {/* options={({ route }) => ({title: route.params.date})} */}
  </DeckNavigatorStack.Navigator>
)

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: mauve, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={mauve} barStyle='light-content' />
          </View>
          <DeckNavigatorStackScreen />
        </View>
      </NavigationContainer>
    )
  }
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
