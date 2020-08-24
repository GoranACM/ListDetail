import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = (props) => {

    // Instantiate the navigation object
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Text>{ props.text }</Text>
            <Button title={"Go to detail"} onPress={ () => { navigation.navigate("Detail") } }/>
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