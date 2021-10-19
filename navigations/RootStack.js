import React from 'react';
import MainAppTabBar from './MainAppTabBar';
import AuthenticationStack from './AuthenticationStack';

function RootStack({ userToken }) {
    return (
        userToken ?
        <MainAppTabBar /> : <AuthenticationStack />
    );
}


export default RootStack;