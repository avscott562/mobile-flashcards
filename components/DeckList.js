import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

export class DeckList extends Component {
    state = {
        loading: false
    }

    render() {
        return (
            <View>
                <Text>Decks</Text>
                <View>
                    <Text> Deck Title 1 </Text>
                    <Text> 2 Cards </Text>
                </View>
                <View>
                    <Text> Deck Title 2 </Text>
                    <Text> 3 Cards </Text>
                </View>
                <View>
                    <Text> Deck Title 3 </Text>
                    <Text> 0 Cards </Text>
                </View>
                <View>
                    <Text> Deck Title 4 </Text>
                    <Text> 6 Cards </Text>
                </View>
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
