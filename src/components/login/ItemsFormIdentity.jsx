import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';

const ItemsFormIdentity = () => {
  return (
    <View>
        <Text style={styles.textPrimary}>Primer nombre*</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    placeholder="Pedro"
                    keyboardType="text"
                />
            </SafeAreaView>
            <Text style={styles.textPrimary}>Segundo nombre*</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    placeholder="Luis"
                    keyboardType="text"
                />
            </SafeAreaView>
            <Text style={styles.textPrimary}>Segundo nombre*</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    placeholder="Perez Mesa"
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
        textAlign: 'left',
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

export default ItemsFormIdentity