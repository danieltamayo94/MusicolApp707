import React, {useState } from 'react';
import {View, StyleSheet, Image} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import BanderaColombia from '../img/colombia.png'
import BanderaChile from '../img/chile.png'
import BanderaBrasil from '../img/brasil.png'
import { Platform } from 'react-native';
import Constants from 'expo-constants';


function CountriesList() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('col');
    

    const [items, setItems] = useState([
        {label: 'Colombia', value: 'col', icon: () => (<Image source ={BanderaColombia} style={styles.iconBandera} /> ), },
        {label: 'Chile', value: 'chi', icon: () => (<Image source ={BanderaChile} style={styles.iconBandera} /> ), },
        {label: 'Brasil', value: 'bra', icon: () => (<Image source ={BanderaBrasil} style={styles.iconBandera} /> ), }
    ]);

  return (
    <View style={styles.containerCountries}>
        <DropDownPicker
                    open={open}
                    items = {items}
                    value={value}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.selectCountries}
                    dropDownStyle={{ backgroundColor:'#fff'}}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    containerCountries:{
        ...(Platform.OS !== 'android' && {
            zIndex: 10
          }),
          paddingHorizontal:70
    
    },

    iconBandera:{
        width:30,
        height:30
    },

    selectCountries:{
        
        margin:30,
        height:50,
        width:180,
        marginHorizontal: 10,
        marginBottom: 15,
        fontSize:25,
        borderWidth: 0,
        borderColor:'#fff',
    },

})

export default CountriesList