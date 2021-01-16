import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import NewCard from './NewCard'

class Deck extends Component {
    render() {
        const { deckId, deck, navigation } = this.props
        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>{`${deck.questions.length} Cards`}</Text>
                <TouchableOpacity onPress={() => navigation.navigate(
                    'NewCard',
                    { deckId, title: deck.title }
                )}>
                    <Text>Add New Card</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

// const styles = StyleSheet.create({})

function mapStateToProps (state, { route, navigation }) {
    const { deckId } = route.params
    const deck = state[deckId]

    return {
        navigation,
        route,
        deck,
        deckId
    }
}

export default connect(mapStateToProps)(Deck)