import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
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
            <View>
                <Text> New Deck </Text>
                
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1
                        }}
                        placeholder="Please enter deck title."
                        onChangeText={val => this.handleChange(val)}
                        value={title}
                    />
                </View>
                <View>
                    <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={this.submitDeck}>
                        <Text style={styles.submitBtnText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputHeader: {
        fontSize: 35,
        paddingBottom: 25
    },
    inputContainer: {
        fontSize: 20,
        paddingBottom: 20
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