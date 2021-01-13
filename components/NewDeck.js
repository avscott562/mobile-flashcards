import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

class NewDeck extends Component {
    state = {
        title: ''
    }

    handleChange = (title) => {
        this.setState(() => ({
            title
        }))
    }


    render() {
        const { title } = this.state
        return (
            <View>
                <Text> New Deck </Text>
                
                <TextInput 
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                  }}
                  placeholder="Please enter deck title."
                  onChange={entry => this.handleChange(entry)}
                  value={title}
                />
                <TouchableOpacity>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewDeck