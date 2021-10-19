import React, { useState, useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack';
import { Colors, FontRegular } from '../css/DefaultsCss';

import { IconAccount, IconAccountActive, IconChat, IconChatActive, IconHome, IconHomeActive, IconNotifications, IconNotificationsActive } from '../components/Icons';
import { Navs } from '../models/Variables';
import NotificationScreen from '../screens/NotificationScreen';
import AccountStack from './AccountStack';
import { useLanguage } from '../controllers/Language';
import ChatStack from './ChatStack';
import SingleChatScreen from '../screens/chat/SingleChatScreen';
import ChatSearchScreen from '../screens/chat/ChatSearchScreen';
import { Animated } from 'react-native';
import TransferToChatContactScreen from '../screens/chat/TransferToChatContactScreen';
import TransferDetailScreen from '../screens/chat/TransferDetailScreen';




const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const iconSize = 22;
const URI = Navs;
const { blue, lightGray, backgroundColor } = Colors;

const mainTabOptions = {
    activeTintColor: blue,
    labelStyle: {
        fontSize: 12,
        fontFamily: FontRegular
    },
    style: {
        backgroundColor: backgroundColor,
        // backgroundColor: lightGray,
    },
    // showLabel: false
}


const AppTabBar = () => {

    const lang = useLanguage()

    return (
        <Tab.Navigator
            initialRouteName={URI.chatsScreen}
            tabBarOptions={mainTabOptions}
        >
            <Tab.Screen
                name={URI.chatsScreen}
                component={ChatStack}

                options={{
                    tabBarBadge: 8,
                    tabBarLabel: lang.home,
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <IconChatActive size={iconSize} color={color} />
                            :
                            <IconChat size={iconSize} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={URI.notificationScreen}
                component={NotificationScreen}
                options={{
                    tabBarLabel: lang.notifications,
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <IconNotificationsActive size={iconSize} color={color} />
                            :
                            <IconNotifications size={iconSize} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={URI.accountScreen}
                component={AccountStack}
                options={{
                    tabBarLabel: lang.account,
                    tabBarIcon: ({ color, size, focused }) => (
                        focused ?
                            <IconAccountActive size={iconSize} color={color} />
                            :
                            <IconAccount size={iconSize} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

function MainAppTabBar(props) {



    const lang = useLanguage()


    const forFade = ({ current }) => {
        return ({
            cardStyle: {
                opacity: current.progress,
            },
        });
    }


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
                component={AppTabBar}
            />
            <Stack.Screen
                name={URI.singleChatScreen}
                component={SingleChatScreen}
            />
            <Stack.Screen
                name={URI.transferDetailScreen}
                component={TransferDetailScreen}
            />
            <Stack.Screen
                name={URI.chatSearchScreen}
                component={ChatSearchScreen}
                options={{
                    // animationEnabled: false,
                    cardStyleInterpolator: forFade
                }}
            />
        </Stack.Navigator>
    )
}



export default MainAppTabBar;