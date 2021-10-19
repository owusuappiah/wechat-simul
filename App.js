import React, { useState, useEffect, useMemo } from 'react';
import RootStack from './navigations/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import { Keys, LanguageKeys } from './models/Variables';
import { StatusBar } from 'expo-status-bar';
import Store from './controllers/Store';
import { AppContext } from './controllers/Context';
import * as Font from 'expo-font';



export default function App() {

  const [tokenState, settokenState] = useState(true)
  const [fontLoaded, setFontLoaded] = useState(false)
  const [languageValue, setLanguageValue] = useState('')
  const [userToken, setUserToken] = useState(null)


  const loadFont = async () => {
    await Font.loadAsync({
      'sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    setFontLoaded(true)
  }

  const getLanguage = () => {
    (async () => {
      const store = new Store();
      const val = await store.getSingleDataAsync(LanguageKeys.languageKey)
      setLanguageValue(val)
    })()
  }

  useEffect(() => {
    loadFont()
    return () => {
    }
  }, [])

  useEffect(() => {
    getLanguage()
    return () => {
    }
  }, [languageValue])


  const gettoken = async () => {
    console.log("is running")
    const store = new Store();
    const response = await store.getSingleDataAsync(Keys.token);
    const tk = await response;
    settokenState(false)
    setUserToken('tk')
  }

  const authenticationContext = useMemo(() => {
    return {
      goHome: (token) => {
        setUserToken(token)
      },
      logOut: () => {
        setUserToken(null)
      }
    }
  }, [])

  const setLanguage = useMemo(() => {
    return {
      setLanguage: (languageKey) => {
        (async () => {
          const store = new Store();
          const save = await store.storeSingleDataAsyc(LanguageKeys.languageKey, languageKey)
          setLanguageValue(languageKey)
        })()
      }
    }
  }, [])





  const appContext = {
    authenticationContext: authenticationContext,
    darkTheme: { background: "black" },
    language: languageValue,
    setLanguage: setLanguage
  }


  useEffect(() => {
    gettoken();
    return () => {
    }
  }, [tokenState, fontLoaded])

  return (
    tokenState ? null :
      fontLoaded ?
        <AppContext.Provider value={appContext}>
          <NavigationContainer>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <RootStack userToken={userToken} />
          </NavigationContainer>
        </AppContext.Provider>
        : null
  );
}
