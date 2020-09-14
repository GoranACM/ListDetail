import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import { Select } from './Select'
//import RNPickerSelect from 'react-native-picker-select'
// import Picker from '@react-native-community/picker'



export const HomeScreen = (props) => {

    selectItems = [
        {label: "Food", value: "food"},
        {label: "Transport", value: "transport"},
        {label: "Groceries", value: "groceries"},
        {label: "Bills", value: "bills"},
    ]

    const [category, setCategory] = useState(null)
    const [amount, setAmount] = useState(0)
    const [note, setNote] = useState(null)

    // Instantiate the navigation object
    const navigation = useNavigation()

    const renderList = ({ item }) => (
        <ListItem 
            id={ item.id } 
            category={ item.category } 
            amount={ item.amount } 
            clickHandler = { showDetail }
            item = { item }
        />
    )

    const showDetail = ( item ) => {
        navigation.navigate("Detail", item )
    }

    return(
        <View style={ styles.container }>
            <View>
                <TextInput placeholder="amount" style={styles.input} onChangeText={ (amount)=>setAmount(amount) }/>
                <Select items={ selectItems } onSelect={ setCategory }/>
                {/* <RNPickerSelect 
                    style={ styles.picker }
                    onValueChange={ (value) => setCategory(value) }
                    items = { selectItems }
                    useNativeAndroidPickerStyle={false}
                /> */}
                <TextInput placeholder="notes" style={styles.input} onChangeText={ (note)=>setNote(note) }/>
                {/* <Picker style={ {height: 30, width: 10} }>
                    <Picker.Item label="food" value="food" />
                    <Picker.Item label="bills" value="bills" />
                </Picker> */}
            </View>
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
        <TouchableOpacity onPress={ () => props.clickHandler( props.item ) }>
            <View style={ styles.listItem }>
                <Text>{ props.category }</Text>
                <Text>$ { props.amount }</Text>
            </View>
        </TouchableOpacity>       
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        justifyContent: 'center',
        paddingTop: 10,
    },
    input: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 10,
    },
    picker: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#ffffff',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 10,
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