import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Firebase config
import { firebaseConfig } from './config/firebase';
// Firebase library
import * as firebase from 'firebase';
// Initialize application
if (!firebase.apps.length) {
  firebase.initializeApp( firebaseConfig );
}


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './components/HomeScreen';
import { DetailScreen } from './components/DetailScreen';
import { AuthScreen } from './components/AuthScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Data = []
  // {  
  //   "amount": 50,  
  //   "category": "food",  
  //   "id": "1598241633",  
  //   "note": "buying lunch"
  // },
  // {  
  //   "amount": 20,  
  //   "category": "transport", 
  //   "id": "1598241768",  "note": 
  //   "catching train"
  // },
  // {  
  //   "amount": 80, 
  //   "category": "groceries", 
  //   "id": "1598241782", 
  //   "note": "shopping at Coles"
  // },
  // {  
  //   "amount": 13,  
  //   "category": "food",  
  //   "id": "1598241795",  
  //   "note": "snack time"
  // },
  // {  
  //   "amount": 35,  
  //   "category": "entertainment",  
  //   "id": "1598241806",  
  //   "note": "buying Untitled Goose"
  // },
  // {  
  //   "amount": 350,  
  //   "category": "rent",  
  //   "id": "1598241817",  
  //   "note": "weeks rent"
  // },
  // {  
  //   "amount": 60,  
  //   "category": "transport",  
  //   "id": "1598241827",  
  //   "note": "topping up Myki card"
  // },
  // {  
  //   "amount": 30,  
  //   "category": "food",  
  //   "id": "1598241841",  
  //   "note": "buying dinner"
  // }


const Stack = createStackNavigator();

export default function App() {

  const listData = Data

  const [auth, setAuth] = useState(false)
  const [dataRef, setDataRef] = useState(false)

  const register = (intent, email, password) => {
    if (intent == 'register') {
      firebase.auth().createUserWithEmailAndPassword( email, password )
    .catch( error => console.log(error) )
    }
    else if (intent == 'login') {
      firebase.auth().signInWithEmailAndPassword( email, password )
    .catch( error => console.log(error) )
    }
    
  }

  // Write data to Firebase
  const addData = (item) => {
    if ( !dataRef ) {
      return;
    }
    const dataObj = { 
      amount: item.amount,
      note: item.note,
      category: item.category
    }
    firebase.database().ref(`${dataRef}/items/${item/id}`).set(dataObj)
  }

  firebase.auth().onAuthStateChanged( (user) => {
    if ( user ) {
      // Go to home screen once signed in
      setAuth(true)
      setDataRef(`users/${user.uid}`)
      //console.log('User loged in')
    }
    else {
      // Go back to Auth page
      setAuth(false)
      setDataRef(null)
      //console.log('User NOT logged in')
    }
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register">
          { (props) => <AuthScreen {...props} signup={ register } loggedIn={ auth } /> }
        </Stack.Screen>
        <Stack.Screen 
          name="Home"
          options={ ({navigation, route}) => ({
            headerTitle: "Expenses",
            headerRight: () => (
              <TouchableOpacity
                style={ styles.signOut }
                onPress={ () => {
                  firebase.auth().signOut().then( () => {
                    setAuth(false)
                    navigation.reset({ index: 0, routes: [{name: "Register"}] })
                  })                
                }}
              >
                <Text style={ styles.signOutText }>Sign out</Text>
              </TouchableOpacity>
            )
          }) }  
        >
          { (props) => <HomeScreen {...props} 
                        text="Hello Home Screen" 
                        data={ listData }
                        add={ addData }
                        /> 
          }
        </Stack.Screen>
        <Stack.Screen name="Detail" component={ DetailScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOut: {
    marginRight: 10,
    padding: 5,
    backgroundColor: '#777777',
    borderRadius: 5,
  },
  signOutText: {
    color: '#eeeeee'
  },
});
