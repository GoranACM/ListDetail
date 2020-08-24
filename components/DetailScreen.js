import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const DetailScreen = (props) => {
    return(
        <View style={styles.container}>
            <Text>Detail Screen</Text>
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