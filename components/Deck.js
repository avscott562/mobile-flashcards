import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { mauve } from '../utils/colors'

class Deck extends Component {
    state = {
        showAnswer: false,
        correct: 0,
        incorrect: 0
    }

    render() {
        const { deckId, deck, navigation } = this.props
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <Text style={styles.deckInfo}>{`${deck.questions.length} Cards`}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                      style={styles.submitBtn, {backgroundColor: '#a7c5eb'}} 
                      onPress={() => navigation.navigate(
                        'NewCard',
                        { deckId, title: deck.title }
                    )}>
                        <Text style={styles.submitBtnText}>Add New Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.submitBtn, {backgroundColor: '#83a95c'}}>
                        <Text style={styles.submitBtnText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4eeed',
        borderRadius: 5,
        borderColor: mauve,
        borderWidth: 5,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: '#33e67c',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    deckTitle: {
        color: mauve,
        fontSize: 25,
    },
    deckInfo: {
        fontSize: 18,
        color: mauve
    },
    buttonContainer: {
        padding: 30,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: '#33e67c',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    submitBtn: {
        padding: 10,
        paddingBottom: 30,
        marginTop: 30,
        borderRadius: 2,
        height: 45,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        fontSize: 22,
        textAlign: 'center'
    },
})

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