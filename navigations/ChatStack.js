import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../css/DefaultsCss';

import { Navs } from '../models/Variables';
import ChatsScreen from '../screens/ChatsScreen';
import SingleChatScreen from '../screens/chat/SingleChatScreen';
import TransferDetailScreen from '../screens/chat/TransferDetailScreen';

const Stack = createStackNavigator();
const c = Colors
const URI = Navs
function ChatStack() {
    return (
        <Stack.Navigator
            headerMode="float"
            screenOptions={{
                headerBackTitleVisible: false,
                headerShown: false,
                // headerTitleStyle: { ...HeaderStylesClassic, color: c.themeBlack },
            }}
        >
            <Stack.Screen
                name={URI.chatsScreen}
                component={ChatsScreen}
            />
           
        </Stack.Navigator>
    );
}

export default ChatStack;