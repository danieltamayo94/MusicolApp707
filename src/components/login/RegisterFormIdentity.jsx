import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import ItemsFormIdentity from './ItemsFormIdentity'
import HorizontalLogo from '../HorizontalLogo'


function RegisterFormIdentity({navigation}){
  return (
        <LinearGradient colors={['#07B4F9', '#E62EB1', '#FC8353']} style={styles.linearGradient} start={{x:0, y:0}} end={{x:0, y:1}}>
                <View style={styles.containerCard}>
                    <HorizontalLogo/>
                    <ItemsFormIdentity/>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('RegisterFormLocation')}>
                        <Image source={require('../../img/buttonRight.png')} style={styles.buttonRight}/>
                    </TouchableOpacity>
                </View>
        </LinearGradient>
  )
}

const styles = StyleSheet.create({
    containerCard: {
        marginTop:50,
        backgroundColor:'#fff',
        width:320,
        height:550,
        opacity:0.8,
        borderRadius:20,
        alignItems: 'center',
    },


    logo:{
        width:170,
        height:80,
        margin:'auto',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginBottom:20
    },

    linearGradient:{
        width:355,
        height:900,
        alignItems: 'center',
    },


    buttonBack:{
        Top:100
    },

    buttonBackImage:{
        marginTop:70,
        marginLeft:-150,
        width:50,
        height:25,
        transform: [{ rotate: '90deg' }]
    },
   
    buttonRight:{
        width:50,
        height:70,
        resizeMode:'contain',
        marginTop:15,
        marginLeft:180
    }

})


export default RegisterFormIdentity