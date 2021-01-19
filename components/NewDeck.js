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
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/helpers'
import {mauve} from '../utils/colors'

class NewDeck extends Component {
    state = {
        title: ''
    }

    handleChange = (title) => {
        this.setState(() => ({
            title
        }))
    }

    submitDeck = () => {
        const { dispatch } = this.props
        const { title } = this.state

        const deck = {
            title,
            questions: []
        }

        dispatch(addDeck(deck))

        saveDeckTitle(title)

        this.setState(() => ({
            title: ''
        }))

        this.toDeck(title)
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
        const { title } = this.state
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.inputHeader}> Create a new deck </Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name your deck</Text>
                    <TextInput 
                        style={styles.inputText}
                        placeholder="Please enter deck title."
                        onChangeText={val => this.handleChange(val)}
                        value={title}
                    />
                </View>
                <View>
                    <TouchableOpacity
                      disabled={title === ''}
                      style={styles.submitBtn}
                      onPress={this.submitDeck}>
                        <Text style={styles.submitBtnText}>CREATE DECK</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputHeader: {
        fontSize: 25,
        paddingBottom: 25
    },
    inputContainer: {
        fontSize: 20,
        paddingBottom: 20,
        alignSelf: 'center',
        alignItems: 'center'
    },
    inputLabel: {
        fontSize: 18,
        paddingBottom: 10
    },
    inputText: {
        height: 'auto',
        width: 260,
        padding: 8,
        borderColor: '#000',
        borderWidth: 1
    },
    submitBtn: {
        backgroundColor: mauve,
        padding: 10,
        margin: 20,
        borderRadius: 2,
        height: 45,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center'
    },
})

function mapStateToProps (state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(NewDeck)