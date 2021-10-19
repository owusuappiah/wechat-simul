import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Modal, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors, DefaultCss, Sizes } from '../css/DefaultsCss'
import { IconCamera, IconClose, IconMoney, IconAlbum, IconDocument, IconContact, IconVideo, IconLocation } from './Icons'


const iconSize = 30
const HEIGHT = Dimensions.get("screen").height
const WIDTH = Dimensions.get("screen").width
// const WIDTH = 320
const c = Colors
const s = Sizes
const asSize = WIDTH < 370 ? 60 : 70


const ActionSheetComponent = ({ visible, onCancel, onAlbumPress, onCameraPress, 
    onDocumentPress, onContactPress, onTranferPress,
    onVideoUpload
}) => {


    const transformAnim = React.useRef(new Animated.Value(HEIGHT / 2)).current;
    const fadeAnim = React.useRef(new Animated.Value(HEIGHT / 2)).current;

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
            toValue: HEIGHT / 2,
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
        slideOut()
        fadeOut()
        setTimeout(() => {
            onCancel()
            callback()
        }, 320);
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
        // <Modal style={{ flex: 1 }} visible={modalVisible} transparent={true} animationType="fade">

        // visible ?
            <React.Fragment>
                <Animated.View style={[DefaultCss.modal, styles.modal, { opacity: fadeAnim }]}>
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
                        <View style={styles.fancyButtonContainer}>
                            <TouchableOpacity onPress={closeMenu.bind(this, onCancel)} style={styles.fancyButton}>
                                <IconClose />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionLists}>
                            <ASList onPress={closeMenu.bind(this, onAlbumPress)} icon={<IconAlbum size={iconSize} />} text="Photo" />
                            <ASList onPress={closeMenu.bind(this, onCameraPress)} icon={<IconCamera size={iconSize} />} text="Camera" />
                            {/* <ASList onPress={closeMenu.bind(this, onDocumentPress)} icon={<IconDocument size={iconSize} />} text="Document" /> */}
                            <ASList onPress={closeMenu.bind(this, onVideoUpload)} icon={<IconVideo size={iconSize} />} text="Video" />
                            {/* <ASList onPress={closeMenu.bind(this, onContactPress)} icon={<IconContact size={iconSize} />} text="Contact" /> */}
                        </View>
                        <View style={styles.actionLists}>
                            <ASList special={true} colSpan={2} onPress={onTranferPress} icon={<IconMoney size={iconSize * 1.5} />} text="Transfer" />
                            {/* <ASList onPress={closeMenu.bind(this, onContactPress)} icon={<IconLocation size={iconSize} />} text="Location" /> */}
                        </View>
                    </Animated.View>
                    <SafeAreaView style={styles.safe}></SafeAreaView>
                </Animated.View>
            </React.Fragment>
            // : null

        // </Modal>
    )
}

const ASList = ({ icon, text, colSpan = 1, onPress, special }) => {

    colSpan = colSpan / 1.5

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={[styles.asList]}>
            <View style={[styles.asListContent, special ? styles.special  :  null, colSpan > 1 ? { width: colSpan * asSize, height: colSpan * asSize, } : null]}>
                <View style={styles.asListIcon}>{icon}</View>
            </View>
            <View style={styles.asListTextContent}>
                <Text numberOfLines={1} style={styles.asListText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ActionSheetComponent




const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end"
    },
    safe: {
        backgroundColor: c.white
    },
    actionSheet: {
        height: HEIGHT / 2,
        minHeight: 250,
        maxHeight: 280,
        // width: 370,
        maxWidth: 500,
        backgroundColor: c.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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

    actionLists: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },

    fancyButtonContainer: {
        position: "absolute",
        right: 0,
        left: 0,
        marginTop: -100,
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

    asList: {
        // width: asSize,
        height: asSize + 20,
        borderRadius: 16,
        // backgroundColor: c.blue,
        margin: s.paddingHorizontal - 5,
        alignItems: "center",
        
    },
    asListContent: {
        width: asSize,
        height: asSize,
        borderRadius: 16,
        backgroundColor: c.grey,
        shadowColor: "rgba(0,0,0,0.16)",
    },
    asListIcon: {
        justifyContent: 'center',
        alignItems: "center",
        height: "100%"
    },
    asListTextContent: {
        marginTop: 5
    },
    asListText: {
        fontSize: s.fontSize,
        color: c.lightColor,
        textAlign: "center"
    },

    special: {
        // borderWidth: 2,
        borderColor: c.blue,
        shadowColor: "rgba(0,0,0,0.46)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1
    }
})
