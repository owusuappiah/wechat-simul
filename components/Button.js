import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors, DefaultCss, FontBold, Sizes } from '../css/DefaultsCss'

const c = Colors
const s = Sizes

const Button = ({ component }) => {
    return (
        <TouchableOpacity>
            {component}
            <Text>Hello</Text>
        </TouchableOpacity>
    )
}

export const BorderedButton = ({ onPress, disabled, text, buttonStyle, caps }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.button, styles.borderedButton, disabled ? styles.disabled : styles.opa, buttonStyle]}>
            <Text style={[styles.borderedButtonText, caps ? styles.caps : null]}>{text}</Text>
        </TouchableOpacity>
    )
}

export const SolidButton = ({ onPress, disabled, text, buttonStyle, caps }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} disabled={disabled} style={[styles.button, styles.solidButton, disabled ? styles.disabled : styles.opa, buttonStyle]}>
            <Text style={[styles.solidButtonText, caps ? styles.caps : null]}>{text}</Text>
        </TouchableOpacity>
    )
}

export const LinkButton = ({ onPress, disabled, text, buttonStyle, caps }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.button, styles.linkButton, disabled ? styles.disabled : styles.opa, buttonStyle]}>
            <Text style={[styles.linkButtonText, caps ? styles.caps : null]}>{text}</Text>
        </TouchableOpacity>
    )
}

export const ActionButton = ({ component, onPress, disabled, text, style }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.actionButton, disabled ? styles.disabled : styles.opa, style]}>
            {text}
            {component}
        </TouchableOpacity>
    )
}



export const SubmitButton= ({ onPress, disabled, text, buttonStyle, caps })=> {
    return (
        <View style={DefaultCss.submitButtonContainer}>
            <SolidButton buttonStyle={[DefaultCss.submitButton, buttonStyle]} onPress={onPress} disabled={disabled} text={text} caps={caps} />
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    disabled: {
        opacity: 0.3
    },
    opa:  {opacity: 1},
    button: {
        alignSelf: "flex-start"
    },
    actionButton: {
        padding: 10,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "green",

    },
    solidButton: {
        backgroundColor: c.blue,
        paddingHorizontal: s.paddingHorizontal * 2,
        paddingVertical: s.paddingHorizontal - 6,
        borderRadius: s.rounded
    },
    solidButtonText: {
        color: c.white,
        fontFamily: FontBold,
        fontSize: s.fontSize
    },
    borderedButton: {
        backgroundColor: c.white,
        paddingHorizontal: s.paddingHorizontal * 2,
        paddingVertical: s.paddingHorizontal - 6,
        borderRadius: s.rounded,
        borderWidth: 4,
        borderColor: c.blue
    },
    borderedButtonText: {
        color: c.blue,
        fontFamily: FontBold,
        fontSize: s.fontSize
    },
    linkButtonText: {
        color: c.blue,
        fontFamily: FontBold,
        fontSize: s.fontSize
    },
    caps: {
        textTransform: "uppercase"
    }
})
