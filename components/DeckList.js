import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'


export class DeckList extends Component {
    state = {
        loading: false
    }

    render() {
        return (
            <View>
                <Text>Decks</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(
                  'Deck',
                  { title: 'Geography Wizards' }
              )}>
                    <Text> Deck Title 1 </Text>
                    <Text> 2 Cards </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(
                  'Deck',
                  { title: 'Math Champs' }
              )}>
                    <Text> Deck Title 2 </Text>
                    <Text> 3 Cards </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(
                  'Deck',
                  { title: 'Music Stans' }
              )}>
                    <Text> Deck Title 3 </Text>
                    <Text> 0 Cards </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(
                  'Deck',
                  { title: 'A Night at the Movies' }
              )}>
                    <Text> Deck Title 4 </Text>
                    <Text> 6 Cards </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
export default DeckList
