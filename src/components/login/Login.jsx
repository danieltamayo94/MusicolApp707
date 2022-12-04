import {React} from 'react'
import {View, Text, StyleSheet, Image,  TouchableOpacity, Button} from 'react-native'
import LogoEvents from '../LogoEvents'
import {LinearGradient} from 'expo-linear-gradient'
import CountriesList from '../CountriesList'
import LogoWhatsapp from '../../img/LOGO-whatsapp.png'
import LogoWhatsappEnd from '../../img/BotonWhatsappEnd.png'

function Login({navigation}){

    return  <View style={styles.container}>
    <Text style={styles.textPrimary}>¡El mundo del Entretenimiento a tu alcance!</Text>
   
    <LogoEvents/>
    <TouchableOpacity >
    <LinearGradient colors={['#07B4F9', '#E62EB1', '#FC8353']} style={styles.linearGradient} start={{x:0, y:0}} end={{x:1, y:0}}>
        <Text style={styles.textButtonGradient}>Crea tu Cuenta</Text>
    </LinearGradient>
    </TouchableOpacity>

    <CountriesList/>

    <TouchableOpacity title={'Ingresar'} onPress={() => navigation.navigate('RegisterNumberContact')}>
        <View  style={styles.buttonWhatsapp}>
            <View style={styles.containerIconWhatsapp}>
                <Image source={LogoWhatsapp} style={styles.iconWhatsapp}></Image>
            </View>
            <Text style={styles.textWhatsapp}>Usa Whatsapp</Text>
            <Image source={LogoWhatsappEnd} style={styles.buttonWhatsappEnd}></Image>
        </View>
    </TouchableOpacity>
    <Text style={styles.textIHaveAccount}>¡Ya tengo cuenta!</Text>
    <View
        style={styles.horizontalLine}
    />

   

    <TouchableOpacity>
        <View  >
            <Text style={styles.textTermAndCondition}>Terminos & Condiciones</Text>
        </View>
    </TouchableOpacity>

    
</View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        flexDirection: 'column',
        paddingBottom:10,
        paddingLeft:10,
    },

    textPrimary: {
        marginTop:10,
        color:'#FC8353',
        fontSize:22,
        fontWeight:'400',
        textAlign: 'center',
    },

    linearGradient:{
        paddingLeft:15,
        paddingRight:15,
        borderRadius:5,
        marginTop:20,
        width:300,
        height:50,
        borderRadius:15
    },
    

    textButtonGradient:{
        color:'white',
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        fontSize:28,
        fontWeight:'bold',
        paddingTop:5
    },

    

    textIHaveAccount:{
        color:'#FC8353',
        fontSize:24,
        fontWeight:'bold',
        marginTop:60
    },

    containerIconWhatsapp:{
        width:40,
        height:40,
        backgroundColor:'#fff',
        borderRadius:100,
        margin:5
    },

    buttonWhatsapp:{
        backgroundColor:'#07B4F9',
        width:230,
        height:50,
        borderRadius:100,
        marginTop:10,
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:-25,
        elevation: -1,
    },

    iconWhatsapp:{
        width:27,
        height:27,
        margin:5,
        alignContent: 'flex-start',
        backgroundColor:'#fff',
        border:10,
        borderColor:'#fff'
    },

    textWhatsapp:{
        color:'white',
        fontSize:20,
        alignContent: 'center',
        textAlign: 'center',
        width:195,
    },

    buttonWhatsappEnd:{
        width:25,
        height:50,
        backgroundColor:'#fff',
        resizeMode: 'contain',
    },

    horizontalLine:{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:300,
        marginTop:40
    },

    textTermAndCondition:{
        color:'#07B4F9',
        fontWeight:'bold',
        textAlign: 'left',
        width:270
    },

   

})


export default Login