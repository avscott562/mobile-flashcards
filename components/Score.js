import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Score() {
    return (
        <View>
            <Text>60%</Text>
            <Text>You did great!</Text>
            <TouchableOpacity>
                <Text>Go To Decks</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Restart Quiz</Text>
            </TouchableOpacity>
        </View>
    )
}
