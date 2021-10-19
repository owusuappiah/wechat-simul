import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Dimensions } from 'react-native'
import { Keyboard } from 'react-native'
import { StyleSheet, Text, View, Modal, Animated } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { isNull } from '../controllers/Js'
import { Colors, DefaultCss, Sizes } from '../css/DefaultsCss'
import { SolidButton } from './Button'
import { IconCamera, IconClose, IconMoney, IconAlbum, IconDocument, IconContact } from './Icons'


const iconSize = 30
const HEIGHT = Dimensions.get("screen").height
const WIDTH = Dimensions.get("screen").width
// const WIDTH = 320
const c = Colors
const s = Sizes
const asSize = WIDTH < 370 ? 60 : 70

const viewableComponentHeight = HEIGHT / 2

const PinAuthComponent = ({ visible, onCancel, onSubmitPress }) => {

    const [pinValue, setPinValue] = useState('')
    const [message, setMessage] = useState()

    const onChangePinValue = (text) => {
        if(!(isNull(message))){
            setMessage(null)
        }
        setPinValue(text)
    }


    const transformAnim = React.useRef(new Animated.Value(-viewableComponentHeight)).current;
    const fadeAnim = React.useRef(new Animated.Value(viewableComponentHeight)).current;

    const slideIn = () => {
        console.log("Should slidin o")
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(transformAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",

        }).start();
    };

    const slideOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(transformAnim, {
            toValue: -(viewableComponentHeight),
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",
        }).start();
    };

    const fadeIn = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",
        }).start();
    };


    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",
        }).start();
    };


    const closeMenu = (callback) => {
        Keyboard.dismiss()
        slideOut()
        fadeOut()
        setTimeout(() => {
            callback()
        }, 320);
    }


    const onCloseForm = () => {
        onCancel()
    }

    const onConfirmButtonPress = () => {
        const currentPin = "123456"
        // check if pink = the current pin
        if(pinValue === currentPin){
            onSubmitPress()
            onCloseForm()
        }else{
            setMessage("Inavlid Passcode")
        }
    }



    useEffect(() => {
        if (visible) {
            fadeIn()
            slideIn()
        }
        return () => {
        }
    }, [visible])

    return (
        <React.Fragment>
            <Animated.View style={[DefaultCss.modal, styles.modal, { opacity: fadeAnim }]}>
                <SafeAreaView style={styles.safe}></SafeAreaView>
                <Animated.View
                    style={[
                        styles.actionSheet,
                        {
                            // opacity: fadeAnim, 
                            transform: [
                                {
                                    translateY: transformAnim
                                }
                            ]
                        },
                    ]}>
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={pinValue}
                                onChangeText={onChangePinValue}
                                placeholder="******"
                                keyboardType="numeric"
                                secureTextEntry={true}
                                style={styles.input}
                                maxLength={6}
                                autoFocus={true}
                            />
                        </View>
                        <View style={styles.messageBox}>
                            <Text numberOfLines={1} style={styles.message}>{message}</Text>
                        </View>
                        <View style={DefaultCss.submitButtonContainer}>
                            <SolidButton onPress={onConfirmButtonPress} buttonStyle={DefaultCss.submitButton} text="Done" />
                        </View>
                    </View>
                    <View style={styles.fancyButtonContainer}>
                        <TouchableOpacity onPress={closeMenu.bind(this, onCloseForm)} style={styles.fancyButton}>
                            <IconClose />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </Animated.View>
        </React.Fragment>
    )
}


export default PinAuthComponent




const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-start"
    },
    safe: {
        backgroundColor: c.white
    },
    actionSheet: {
        height: viewableComponentHeight,
        minHeight: 200,
        maxHeight: 200,
        // width: 370,
        maxWidth: 500,
        backgroundColor: c.white,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        // flexDirection: "row",
        // flexWrap: "wrap",
        // justifyContent: "center",
        paddingTop: s.paddingHorizontal,
        position: "relative",
        // paddingHorizontal: s.paddingHorizontal
        transform: [
            {
                translateY: 0
            }
        ]
    },


    fancyButtonContainer: {
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 0,
        marginBottom: -100,
        // marginTop: 100,
        alignItems: "center",
    },

    fancyButton: {
        backgroundColor: c.white,
        width: asSize,
        height: asSize,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },

    form: {
        marginTop: s.paddingHorizontal
    },

    inputContainer: {
        marginBottom: s.paddingHorizontal
    },
    input: {
        borderBottomColor: c.grey,
        fontSize: 40,
        borderBottomWidth: 1,
        paddingHorizontal: s.paddingHorizontal,
        textAlign: "center"
    },

    message: {
        color: c.danger,
        textAlign: "center"
    }

})
