import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

const HorizontalLogo = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../img/logoHorizontal.png')} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
    },

    logo:{
        width:170,
        height:80,
        margin:'auto',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginBottom:30
    },
})

export default HorizontalLogo