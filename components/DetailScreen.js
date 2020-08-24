import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const DetailScreen = ( props ) => {
    return(
        <View style={styles.container}>
            <Text style={ styles.title }>Detail Screen</Text>
            <Text>id: { props.route.params.id }</Text>
            <Text>amount: { props.route.params.amount }</Text>
            <Text>category: { props.route.params.category }</Text>
            <Text>note: { props.route.params.note }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      title: {
          textAlign: 'center',
          fontSize: 20,
          justifyContent: 'center',
          paddingTop: 10,
      },
  });