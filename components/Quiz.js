import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import { mauve, green, red, gray } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
    state = {
        screen: 'question',
        cardIndex: 0,
        totalCards: 1,
        correct: 0,
        incorrect: 0,
    }

    componentDidMount() {
        const { deck } = this.props

        this.setState(() => ({
            totalCards: deck.questions.length
        }))
    }

    toggleAnswer = () => {
        this.setState(() => ({
            screen: 'answer'
        }))
    }

    incrementScore = () => {
        this.setState(() => ({
            correct: this.state.correct + 1
        }))

        this.handleResult()
    }

    decrementScore = () => {
        this.setState(() => ({
            incorrect: this.state.incorrect + 1
        }))

        this.handleResult()
    }

    handleResult = () => {
        const { cardIndex, totalCards } = this.state

        let answered = cardIndex + 1

        if (answered < totalCards) {
            this.setState(() => ({
                screen: 'question',
                cardIndex: answered
            }))
        } else {
            this.setState(() => ({
                screen: 'score'
            }))

            clearLocalNotification().then(setLocalNotification)
        }
    }

    reset = () => {
        const { deckId, navigation } = this.props
        
        this.setState(() => ({
            screen: 'question',
            cardIndex: 0,
            correct: 0,
            incorrect: 0,
        }))

        navigation.dispatch(CommonActions.navigate({
            name: 'Quiz',
            params: {
                deckId
            }
        }))
    }

    render() {
        const { 
            screen,
            cardIndex,
            totalCards, 
            correct } = this.state

        const { deck, navigation } = this.props

        const percentage = (correct / totalCards) * 100
        const card = cardIndex + 1

        return (
            <View>
                <Text style={styles.header}> Quiz </Text>
                <Text style={styles.countText}>{card} / {totalCards}</Text>
                <View style={styles.container}>
                    {screen === 'question' && 
                        <View>
                            <Text style={styles.mainText}>{deck.questions[cardIndex].question}</Text>
                            <TouchableOpacity 
                            style={styles.quizBtn}
                            onPress={this.toggleAnswer}>
                                <Text style={styles.buttonText}>View Answer</Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {screen === 'answer' &&
                        <View>
                            <Text style={styles.mainText}>{deck.questions[cardIndex].answer}</Text>
                            <TouchableOpacity 
                                style={styles.greenBtn}
                                onPress={this.incrementScore}>
                                <Text style={styles.buttonText}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.incorrectBtn}
                                onPress={this.decrementScore}>
                                <Text style={styles.buttonText}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    
                    {screen === 'score' && 
                      <View>
                          <View style={styles.scoreText}>
                            <Text style={styles.mainText}>{`${percentage}%`}</Text>
                            <Text style={styles.mainText}>{`You got ${correct} correct.`}</Text>
                          </View>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('DeckList')}>
                              <Text style={styles.buttonText}>Go To Decks</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.greenBtn}
                            onPress={this.reset}>
                              <Text style={styles.buttonText}>Restart Quiz</Text>
                          </TouchableOpacity>
                      </View>
                    }
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: mauve,
        borderWidth: 5,
        borderRadius: 5,
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
    header: {
        fontSize: 35,
        alignSelf: 'center'
    },
    mainText: {
        color: mauve,
        fontSize: 20,
    },
    countText: {
        fontSize: 20
    },
    scoreText: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    quizBtn: {
        backgroundColor: mauve,
        padding: 10,
        margin: 20,
        borderRadius: 2,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    greenBtn: {
        backgroundColor: green,
        padding: 10,
        margin: 20,
        borderRadius: 2,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    incorrectBtn: {
        backgroundColor: red,
        padding: 10,
        margin: 20,
        borderRadius: 2,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: mauve,
        padding: 5,
        paddingBottom: 30,
        marginTop: 30,
        borderRadius: 2,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center'
    },
})

function mapStateToProps (state, { route, navigation }) {
    const { deckId } = route.params
    const deck = state[deckId]
    console.log('from quiz: ', deck)
    return {
        navigation,
        route,
        deck,
        deckId
    }
}

export default connect(mapStateToProps)(Quiz)