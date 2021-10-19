import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../css/DefaultsCss';

import { Navs } from '../models/Variables';
import PhotosHomeScreen from '../screens/PhotosHomeScreen';

const Stack = createStackNavigator();
const c = Colors
const URI = Navs
function PhotosStack() {
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
                name={URI.photosHomeScreen}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }}
                component={PhotosHomeScreen}
            />
        </Stack.Navigator>
    );
}

export default PhotosStack;