import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Score from './Score'

class Quiz extends Component {
    state = {
        displayAnswer: false,
        correct: 0,
        incorrect: 0,
    }

    render() {
        return (
            <View>
                <Text> Quiz </Text>
                <Text>What is the capitol of Louisiana?</Text>
                <Text>3 of 5</Text>
                <Text>Baton Rouge</Text>
                <TouchableOpacity>
                    <Text>View Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
                <Score />
            </View>
        )
    }
}

export default Quiz
