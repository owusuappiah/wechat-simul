import React, { useContext } from 'react'
import English from '../models/languages/English';
import { LanguageKeys } from "../models/Variables";
import { AppContext } from './Context';

const lk = LanguageKeys;



export const useLanguage = () => {
    const { language } = useContext(AppContext)

    switch (language) {
        case lk.eng:
            return English;
        default:
            return English;
    }
}
