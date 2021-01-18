import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import Score from './Score'
import { mauve } from '../utils/colors'

class Quiz extends Component {
    state = {
        displayAnswer: false,
        cardIndex: 0,
        totalCards: 1,
        correct: 0,
        incorrect: 0,
        quizComplete: false
    }

    componentDidMount() {
        const { deck } = this.props

        this.setState(() => ({
            totalCards: deck.questions.length
        }))
    }

    toggleAnswer = () => {
        this.setState(() => ({
            displayAnswer: !this.state.displayAnswer
        }))
    }

    incrementScore = () => {
        this.setState(() => ({
            correct: this.state.correct + 1
        }))

        console.log('correct', this.state.correct)
        console.log('wrong', this.state.incorrect)
    }

    decrementScore = () => {
        this.setState(() => ({
            incorrect: this.state.incorrect + 1
        }))

        console.log('correct', this.state.correct)
        console.log('wrong', this.state.incorrect)
    }

    handleResult = () => {
        const { correct, incorrect, totalCards } = this.state

        let answered = correct + incorrect

        if (answered < totalCards) {
            this.setState(() => ({
                displayAnswer: false,
                cardIndex: this.state.cardIndex + 1
            }))
        } else {
            this.setState(() => ({
                quizComplete: true
            }))
        }
    }

    render() {
        const { 
            displayAnswer, 
            cardIndex,
            totalCards, 
            correct, 
            quizComplete } = this.state
        const { deck } = this.props

        return (
            <View>
                <Text style={styles.header}> Quiz </Text>
                <Text>{correct} / {totalCards}</Text>
                <View style={styles.container}>
                    {!displayAnswer
                    ? <View>
                        <Text style={styles.mainText}>{deck.questions[cardIndex].question}</Text>
                        <TouchableOpacity 
                          style={styles.button}
                          onPress={this.toggleAnswer}>
                            <Text style={styles.buttonText}>View Answer</Text>
                        </TouchableOpacity>
                      </View>
                    : <View>
                        <Text style={styles.mainText}>{deck.questions[cardIndex].answer}</Text>
                        <TouchableOpacity 
                          style={styles.button}
                          onPress={this.incrementScore}>
                            <Text style={styles.buttonText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={styles.button}
                          onPress={this.decrementScore}>
                            <Text style={styles.buttonText}>Incorrect</Text>
                        </TouchableOpacity>
                      </View>
                    }
                    
                    {quizComplete && 
                    <View>
                        <Text>quiz completed? {quizComplete}</Text>
                        <Score />
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
    button: {
        padding: 10,
        paddingBottom: 30,
        marginTop: 30,
        borderRadius: 2,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
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