import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { DateFormat } from './DateFormat'

export const DetailScreen = ( props ) => {

    const [amount, setAmount] = useState(props.route.params.amount)
    const [editing, setEditing] = useState(false)

    return (
        <View>
        <Text style={[ styles.amount, { display: editing ? 'none' : 'flex'} ]}>
            $ {amount}
        </Text>
        <TextInput 
            placeholder={ amount } 
            style={[ styles.amount, { display: editing ? 'flex' : 'none'} ]}
            onChangeText={ (amount) => { setAmount(amount) }}
        />
        <Button 
            title={ editing ? "Save" : "Edit" } 
            onPress={ () => { 
                if( editing ) {
                    setEditing(false)
                    let item = {
                        amount: amount,
                        note: props.route.params.note,
                        category: props.route.params.category,
                        id: props.route.params.id
                    }
                    props.update( item )
                } else {
                    setEditing(true)
                }
            }}
        />
        <DateFormat date={props.route.params.id} styling={styles.date} />
        <Text>category: {props.route.params.category}</Text>
        <Text>note: {props.route.params.note}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  amount: {
    textAlign: 'center',
    fontSize: 32,
    marginVertical: 15,
  },
  date: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '700',
  },
})