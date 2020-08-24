import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = (props) => {

    // Instantiate the navigation object
    const navigation = useNavigation()

    const renderList = ({ item }) => (
        <ListItem id={ item.id } category={ item.category } amount={ item.amount } />
    )

    const showDetail = ( item ) => {
        
    }

    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>{ props.text }</Text>
            <FlatList 
                data = { props.data }
                renderItem = { renderList }
                keyExtractor = { item => item.id }
            />
            {/* <Button title={"Go to detail"} onPress={ () => { navigation.navigate("Detail") } }/> */}
        </View>
    )
}

const ListItem = (props) => {
    return (
        <View style={ styles.listItem }>
            <Text>{ props.category }</Text>
            <Text>$ { props.amount }</Text>
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
    },
    listItem: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  });