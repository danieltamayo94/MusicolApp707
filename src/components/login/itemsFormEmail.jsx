import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';

const itemsFormEmail = () => {
  return (
    <View>
        <Text style={styles.textPrimary}>Agregar tu Correo Electronico</Text>
        <SafeAreaView>
            <TextInput
                style={styles.input}
                placeholder="correo@correo.com"
                keyboardType="text"
            />
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

    textPrimary: {
        color:'#FC8353',
        fontSize:22,
        fontWeight:'400',
        textAlign: 'center',
    },

    input:{
        margin:'auto',
        borderColor:'#07B4F9',
        alignItems: 'center',
        height: 40,
        margin: 12,
        borderBottomWidth: 3,
        padding: 5,
        width:250,
        fontSize:24
    },


})



export default itemsFormEmail