import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleQuestionChange = (question) => {
        this.setState(() => ({
            question
        }))
    }

    handleAnswerChange = (answer) => {
        this.setState(() => ({
            answer
        }))
    }


    render() {
        const { question, answer } = this.state
        return (
            <View>
                <Text> New Card </Text>
                
                <Text> What's your question? </Text>
                <TextInput 
                  multiline
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                  }}
                  placeholder="Please enter question."
                  onChangeText={val=> this.handleQuestionChange(val)}
                  value={question}
                />

                <Text> What's the answer? </Text>
                <TextInput 
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                  }}
                  multiline
                  placeholder="Please enter answer."
                  onChangeText={val => this.handleAnswerChange(val)}
                  value={answer}
                />
                <TouchableOpacity>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewCard