import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import Score from './Score'
import { mauve } from '../utils/colors'

class Quiz extends Component {
    state = {
        displayAnswer: false,
        correct: 0,
        incorrect: 0,
        quizComplete: false
    }

    toggleAnswer = () => {
        this.setState(() => ({
            displayAnswer: !this.state.displayAnswer
        }))
    }

    render() {
        const { displayAnswer, correct, incorrect, quizComplete } = this.state

        return (
            <View>
                <Text style={styles.header}> Quiz </Text>
                <View style={styles.container}>
                    {!displayAnswer
                    ? <View>
                        <Text style={styles.question}>What is the capitol of Louisiana?</Text>
                        <TouchableOpacity 
                          style={styles.button}
                          onPress={this.toggleAnswer}>
                            <Text style={styles.buttonText}>View Answer</Text>
                        </TouchableOpacity>
                      </View>
                    : <View>
                        <Text style={styles.answer}>Baton Rouge</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Incorrect</Text>
                        </TouchableOpacity>
                      </View>
                    }
                    
                    {quizComplete && 
                    <View>
                        <Text>3 of 5</Text>
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
    question: {
        color: mauve,
        fontSize: 20,
    },
    answer: {
        color: 'black',
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

export default connect()(Quiz)
