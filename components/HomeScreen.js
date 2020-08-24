import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const HomeScreen = (props) => {
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });