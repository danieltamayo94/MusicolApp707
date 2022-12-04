import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import DepartmentsList from '../DepartmentsList'
import CityList from '../CityList'
import LocalitiesList from '../LocalitiesList'

const ItemsFormLocation = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textPrimary}>Departamento</Text>
        <DepartmentsList/>
        
        <Text style={styles.textPrimary}>Ciudad</Text>
        <CityList/>
        
        <Text style={styles.textPrimary}>Localidad</Text>
        <LocalitiesList/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    textPrimary: {
        color:'#FC8353',
        fontSize:22,
        fontWeight:'400',
        textAlign: 'left',
    },

  
})


export default ItemsFormLocation