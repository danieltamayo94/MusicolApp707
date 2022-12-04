import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Logo from '../img/logoPrincipal2.png'

const LogoEvents = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo}/>
        <Text style={styles.events}>Events</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    logo:{
        marginTop:15,
        width:240,
        height:150,
        padding:20,
        margin:'auto',
        justifyContent: 'center',
        resizeMode: 'contain',
    },

    events:{
        color:'#07B4F9',
        fontSize:25,
        letterSpacing:5,
        width:240,
        alignContent: 'flex-end',
        margin:5,
        textAlign:'right',
        fontFamily:'moon-light'
    },

 
})

export default LogoEvents