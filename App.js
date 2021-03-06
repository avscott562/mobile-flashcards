import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Animated } from 'react-native-reanimated'
import reducer from './reducers'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { mauve } from './utils/colors'
import { setLocalNotification } from './utils/helpers'




const DeckNavigatorStack = createStackNavigator()
const HomeTab = createMaterialTopTabNavigator()

const HomeTabScreen = () => (
    <HomeTab.Navigator
      initialRouteName="DeckList"
      backBehavior='history'
      tabBarOptions={{
        activeTintColor: '#654062'
      }}>
        <HomeTab.Screen 
          name='DeckList' 
          component={DeckList}
          options={{
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => (
              <MaterialCommunityIcons name={focused ? "cards" : 'cards-outline'} color={tintColor} size={30} />
            ),
          }}/>
          <HomeTab.Screen 
          name='NewDeck' 
          component={NewDeck}
          options={{
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => (
              <FontAwesome name={ focuesed ? "plus-square" : 'plus-square-o'} color={tintColor} size={30} />
            ),
          }}/>
    </HomeTab.Navigator>
)

const DeckNavigatorStackScreen = () => (
  <DeckNavigatorStack.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: mauve,
      }
    }}>
    <DeckNavigatorStack.Screen 
      name='Home' 
      component={HomeTabScreen}
      options={{ title: 'Decks' }} />
    <DeckNavigatorStack.Screen 
      name='Deck' 
      component={Deck}
      options={({ route }) => ({title: route.params.title})} />
      <DeckNavigatorStack.Screen 
      name='NewCard' 
      component={NewCard}
      options={({ route }) => ({title: route.params.title})} />
      <DeckNavigatorStack.Screen 
      name='Quiz' 
      component={Quiz}
      options={({ route }) => ({title: route.params.title})} />
  </DeckNavigatorStack.Navigator>
)

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={createStore(reducer)}>
          <View style={{flex: 1}}>
            <View style={{backgroundColor: mauve, height: Constants.statusBarHeight}}>
              <StatusBar translucent backgroundColor={mauve} barStyle='light-content' />
            </View>
            <DeckNavigatorStackScreen />
          </View>
        </Provider>
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
