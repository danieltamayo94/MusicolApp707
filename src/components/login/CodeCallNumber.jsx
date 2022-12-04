import React from 'react'
import {View, Text, StyleSheet, Image, TextInput, SafeAreaView} from 'react-native'
import Logo from '../../img/logoIsotipo.png'

const codeCallNumber = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerCallCode}>
            <Text style={styles.textPrimary}>Ingresa tu código:</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    placeholder="Código de 4 dígitos"
                    keyboardType="numeric"
                />
            </SafeAreaView>
            <Image source={Logo} style={styles.logo}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:35,
        flexDirection: 'row',
        paddingBottom:10,
        paddingLeft:10,
        alignContent:'center'
    },

    containerCallCode:{
        width:290,
        margin:'auto',
        backgroundColor:'#fff',
        height:180,
        marginTop:250,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowColor: "#000",
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        elevation: 17,

    },

    textPrimary:{
        color:'#FC8353',
        padding:5,
        margin:'auto',
        marginTop:20,
        textAlign: 'center',
        fontWeight:'500',
        fontSize:20
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

    logo:{
        width:50,
        height:100,
        resizeMode: 'contain',
        margin:'auto',
        justifyContent: 'center',
    }




})

export default codeCallNumber