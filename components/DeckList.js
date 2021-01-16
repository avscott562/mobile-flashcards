import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks, receiveDeck, addDeck, addCard } from '../actions'
import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from '../utils/helpers'
import { mauve } from '../utils/colors'
import Deck from './Deck'


export class DeckList extends Component {
    state = {
        ready: false
    }

    componentDidMount() {
        const { dispatch } = this.props

        getDecks()
          .then((decks) => dispatch(receiveDecks(decks)))
          .then(() => this.setState(() => ({
              ready: true
          })))
    }

    render() {
        const { decks } = this.props

        return (
            <View>
                <Text>Decks</Text>
                {Object.keys(decks).map((deck) => {
                    const deckInfo = decks[deck]
                    // const check = getDeck('birds')
                    // console.log(check)
                    return(
                        <TouchableOpacity 
                        key={deck}
                        style={styles.container}
                        onPress={() => this.props.navigation.navigate(
                            'Deck',
                            { 
                                title: deckInfo.title,
                                deckId: deck
                            }
                        )}>
                            <Text style={styles.deckTitle}>{deckInfo.title}</Text>
                            <Text style={{color: '#fff'}}>{`${deckInfo.questions.length} Cards`}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: mauve,
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
    deckTitle: {
        color: '#fff',
        fontSize: 20,
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)
