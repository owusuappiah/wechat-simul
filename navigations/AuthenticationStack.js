import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../css/DefaultsCss';

import { Navs } from '../models/Variables';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();
const c = Colors
const URI = Navs
function AuthenticationStack() {
    return (
        <Stack.Navigator
            headerMode="float"
            screenOptions={{
                headerBackTitleVisible: false,
                // headerTitleStyle: { ...HeaderStylesClassic, color: c.themeBlack },
            }}
        >
            <Stack.Screen
                name={URI.welcomeScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false

                }}
                component={WelcomeScreen}
            />
        </Stack.Navigator>
    );
}

export default AuthenticationStack;