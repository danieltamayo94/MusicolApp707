import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/login/Login'
import RegisterNumberContact from './src/components/login/RegisterNumberContact'
import CodeCallNumber from './src/components/login/CodeCallNumber'
import RegisterFormIdentity from './src/components/login/RegisterFormIdentity'
import RegisterFormLocation from './src/components/login/RegisterFormLocation'
import RegisterFormEmail from './src/components/login/RegisterFormEmail'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: '#07B4F9'}}}
        >
          <Stack.Screen name="Login"  options={{ title: 'Registrarse' }} component={Login} />
          <Stack.Screen name="RegisterNumberContact"  options={{ title: 'Registra Celular' }} component={RegisterNumberContact} />
          <Stack.Screen name="RegisterFormIdentity"  options={{ title: 'Registra tus Datos' }} component={RegisterFormIdentity} />
          <Stack.Screen name="RegisterFormLocation"  options={{ title: 'Registra tu ubicación' }} component={RegisterFormLocation} />
          <Stack.Screen name="RegisterFormEmail"  options={{ title: 'Registra tu Correo' }} component={RegisterFormEmail} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color:'black',
    marginTop:20
  },
  linearGradient:{
    paddingLeft:15,
    paddingRight:15,
    borderRadius:5,
    marginTop:16,
    width:350,
    height:50
  }
});
