import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../css/DefaultsCss';

import { Navs } from '../models/Variables';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();
const c = Colors
const URI = Navs
function AccountStack() {
    return (
        <Stack.Navigator
            headerMode="float"
            screenOptions={{
                headerBackTitleVisible: false,
                headerShown: false,
                animationEnabled: false
                // headerTitleStyle: { ...HeaderStylesClassic, color: c.themeBlack },
            }}
        >
            <Stack.Screen
                name={URI.accountScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }}
                component={AccountScreen}
            />
        </Stack.Navigator>
    );
}

export default AccountStack;