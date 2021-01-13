import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

class Deck extends Component {
    render() {
        return (
            <View>
                <Text> Deck Title 2</Text>
                <Text> 3 Cards</Text>
                <TouchableOpacity>
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

export default Deck