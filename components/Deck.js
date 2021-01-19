import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TabBarIOS } from 'react-native'
import { connect } from 'react-redux'
import { mauve } from '../utils/colors'

class Deck extends Component {
    state = {
        hasCards: false,
    }

    componentDidMount() {
        this.checkForCards()
    }

    checkForCards = () => {
        const { deck, route } = this.props

        if ((deck.questions.length > 0) || (route.params.hasCards === true)) {
            this.setState(() => ({
                hasCards: true
            }))
        }
    }

    toQuiz = async () => {
        const { navigation, deckId, deck:{title} } = this.props

        await this.checkForCards()
        
        if (this.state.hasCards === false) {
            alert('Please add flashcards to the deck to begin quiz.')
        } else {
            navigation.navigate(
                'Quiz',
                { deckId, title }
            )
        }
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
                      style={styles.submitBtn} 
                      onPress={() => navigation.navigate(
                        'NewCard',
                        { deckId, title: deck.title }
                    )}>
                        <Text style={styles.submitBtnText}>Add New Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.submitBtn}
                      onPress={this.toQuiz}>
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
        backgroundColor: mauve,
        padding: 10,
        margin: 20,
        borderRadius: 2,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center'
    },
})

function mapStateToProps (state, { route, navigation }) {
    const { deckId } = route.params
    const deck = state[deckId]
    console.log('from deck m2s: ', route.params)
    return {
        navigation,
        route,
        deck,
        deckId
    }
}

export default connect(mapStateToProps)(Deck)