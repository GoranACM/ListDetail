import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const AuthScreen = ( props ) => {
    // 2 items, second one used to change the state
    const [login, setLogin] = useState(false)

    if (!login) {
        return(
            //Login view
            <View style={ styles.container }>
                <Text style={ styles.title }>Sign In</Text>
                <TextInput 
                    placeholder="Enter email..." 
                    style={ styles.input }
                />
                <TextInput 
                    placeholder="Enter password..." 
                    secureTextEntry={ true }
                    style={ styles.input }
                />
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.buttonText }>Sign In</Text>
                </TouchableOpacity>
                <Text style={ styles.altText }>You don't have an account?</Text>
                <TouchableOpacity style={ styles.altButton }>
                    <Text style={ styles.altButtonText }>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return (
            // Register view
            <View>

            </View>
        )
    }
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#444444',
        marginVertical: 20,
    },
    button: {
        padding: 10,
        backgroundColor: '#444444',
    },
    buttonText: {
        color: '#eeeeee',
        textAlign: 'center',
    },
    altText: {
        textAlign: 'center',
        marginTop: 20
    },
    altButton: {
        marginTop: 10,
        padding: 10,
    },
    altButtonText: {
        color: 'blue',
        textAlign: 'center',
    }
});