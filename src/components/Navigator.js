import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './login/Login'
import RegisterNumberContact from './login/RegisterNumberContact'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='RegisterNumberContact'
                component={RegisterNumberContact}
            />
        </Stack.Navigator>
    )
}