import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

function CityList() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('bog');
    

    const [items, setItems] = useState([
        {label: 'Medellín', value: 'med'  },
        {label: 'Bello', value: 'be' },
        {label: 'Bogotá', value: 'bog' },
        {label: 'Cali', value: 'cal' },
        {label: 'Manizales', value: 'man' },
        {label: 'Cartagena', value: 'car' },
        {label: 'Santa Marta', value: 'san' }
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
                    zIndex={4000} zIndexInverse={6000}
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

export default CityList