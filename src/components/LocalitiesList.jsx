import React, {useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image,  TouchableOpacity, Button} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

function LocalitiesList() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('ant');
    

    const [items, setItems] = useState([
        {label: 'Antonio Nariño', value: 'ant'  },
        {label: 'Bosa', value: 'bos' },
        {label: 'Engativá', value: 'eng' },
        {label: 'Fontibón', value: 'fon' },
        {label: 'Kennedy', value: 'ken' },
    ]);

  return (
    <View style={styles.container}>
        <DropDownPicker
                    open={open}
                    items = {items}
                    value={value}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.select}
                    dropDownStyle={{ backgroundColor:'#fff'}}
                    zIndex={3000} zIndexInverse={6000}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 70,
    },

    select:{
        margin:30,
        height:50,
        width:180,
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 15,
        fontSize:25,
        borderWidth: 2,
        borderColor:'#07B4F9',
        backgroundColor:'#ffffff',
    },

})

export default LocalitiesList