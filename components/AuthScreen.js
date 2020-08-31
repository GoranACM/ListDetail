import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { set } from 'react-native-reanimated'

export const AuthScreen = ( props ) => {
    // 2 items, second one used to change the state
    const [login, setLogin] = useState(false)
    
    // Hooks for validation
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    // Hooks for user credentials
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigation = useNavigation()

    const validateEmail = (email) => {
        if ( email.indexOf('@') > 0 && email.indexOf('.') > 0 ) {
            setValidEmail( true )
            setEmail( email )
        }
        else {
            setValidEmail( false )
        }
    }

    const validatePassword = (password) => {
        if( password.length >= 8 ) {
          setValidPassword( true )
          setPassword( password )
        }
        else {
          setValidPassword( false )
        }
      }

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
                <TouchableOpacity 
                    style={ styles.altButton } 
                    onPress={ () => { 
                        setLogin(true) 
                        navigation.setOptions({title: 'Register'})
                    }}               
                >
                    <Text style={ styles.altButtonText }>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return (
            // Register view
            <View style={ styles.container }>
                <Text style={ styles.title }>Register</Text>
                <TextInput 
                    placeholder="Enter email..." 
                    style={ styles.input }
                    onChangeText={ (email) => validateEmail(email) }
                />
                <TextInput 
                    placeholder="Enter password..." 
                    secureTextEntry={ true }
                    style={ styles.input }
                    onChangeText={ (password) => validatePassword(password) }
                />
                <TouchableOpacity 
                    style={ !validEmail || !validPassword ?  styles.buttonDisabled : styles.button }
                    disabled={ !validEmail || !validPassword ? true : false }
                    onPress={ () => props.signup(email, password) }
                >
                    <Text style={ styles.buttonText }>Register</Text>
                </TouchableOpacity>
                <Text style={ styles.altText }>Already have an account?</Text>
                <TouchableOpacity 
                    style={ styles.altButton } 
                    onPress={ () => { 
                        setLogin(false) 
                        navigation.setOptions({title: 'Sign In'})
                    }}               
                >
                    <Text style={ styles.altButtonText }>Sign in</Text>
                </TouchableOpacity>
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
    buttonDisabled: {
        padding: 10,
        backgroundColor: '#888888',
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