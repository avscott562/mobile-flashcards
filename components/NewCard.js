import React, { Component } from 'react'
import { 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet,
    KeyboardAvoidingView 
} from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/helpers'
import { mauve } from '../utils/colors'

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

    onSubmit = () => {

        const { dispatch, deckId } = this.props

        const card = {
            question: this.state.question,
            answer: this.state.answer
        }

        console.log('this is frm new card onsubmit:   ', deckId, card)

        dispatch(addCard(deckId, card))

        addCardToDeck(deckId, card)

        this.setState(() => ({
            question: '',
            answer: ''
        }))

        this.toDeck(deckId)
    }

    toDeck = (deckId) => {
        this.props.navigation.dispatch(CommonActions.navigate({
            name: 'Deck',
            params: {
                deckId
            }
        }))
    }


    render() {
        const { question, answer } = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.inputHeader}> Create a New Flashcard </Text>
                
                <View style={styles.inputContainer}>
                    <Text> What's your question? </Text>
                    <TextInput 
                    multiline
                    style={styles.inputText}
                    placeholder="Please enter question."
                    onChangeText={val=> this.handleQuestionChange(val)}
                    value={question}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text> What's the answer? </Text>
                    <TextInput 
                    style={styles.inputText}
                    multiline
                    placeholder="Please enter answer."
                    onChangeText={val => this.handleAnswerChange(val)}
                    value={answer}
                    />
                </View>

                <TouchableOpacity
                disabled={(question === '') || (answer === '')}
                onPress={this.onSubmit}
                style={styles.submitBtn} >
                    <Text style={styles.submitBtnText}>SUBMIT</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efd9d1',
        borderRadius: 5,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: '#33e67c',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    inputHeader: {
        fontSize: 25,
        paddingBottom: 25
    },
    inputContainer: {
        fontSize: 20,
        paddingBottom: 20,
        alignSelf: 'flex-start',
        // alignItems: 'stretch'
    },
    inputText: {
        height: 'auto',
        width: 250,
        padding: 8,
        borderColor: '#70af85',
        borderWidth: 1
    },
    submitBtn: {
        backgroundColor: mauve,
        padding: 10,
        margin: 20,
        borderRadius: 2,
        height: 45,
        alignSelf: 'center'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    submitBtnDisabled: {
        backgroundColor: '#bbb',
        padding: 10,
        margin: 20,
        borderRadius: 2,
        height: 45,
        alignSelf: 'center'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    submitBtnText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center'
    },
})

function mapStateToProps(state, { route, navigation }) {
    const { deckId } = route.params
    console.log('frm new card', deckId)
    return {
        state,
        route,
        deckId,
        navigation
    }
}

export default connect(mapStateToProps)(NewCard)