import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, DefaultCss, FontBold, FontRegular, Sizes } from './DefaultsCss'


const c = Colors
const s = Sizes
const WIDTH = Dimensions.get("screen").width
const HEIGHT = Dimensions.get("screen").height

const buttonSize = 35

const MediaCss = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: c.blue,
    },

    imageContainer: {

        ...StyleSheet.absoluteFill,
        // ...DefaultCss.modal,
        // backgroundColor: 'black',

    },

    cover: {
        position: "absolute",
        // flex: 1,
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0)",
        // backgroundColor: c.green,
        justifyContent: "space-between"
    },

    header: {
        // position: "absolute",
        right: 0,
        left: 0,
        backgroundColor: c.white,
        height: 44,
        zIndex: 100,
    },

    safe: {
        backgroundColor: c.white
    },

    media: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center"
    },
    image: {
        width: WIDTH,
        height: 70,
        maxHeight: HEIGHT,
    },
    actionBar: {
        backgroundColor: c.white,
        height: 44,
        // position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection:  "row",
        justifyContent:  "space-between",
        alignItems:"center"
    },
    actionButton:  {
        paddingHorizontal: s.paddingHorizontal,
        paddingVertical: s.paddingHorizontal - 5,
    },
    head: {
        justifyContent: "center",
        alignItems:  "center"
    },
    headTitle: {
        fontFamily: FontBold,
        fontSize: s.fontSize - 3
    },
    headSubTitle: {
        fontSize: s.fontSize - 3,
        fontFamily: FontRegular,
        color: c.lightColor,
    }
})

export const MediaEditorCss = StyleSheet.create({
    safe: {
        // backgroundColor: null
    },
    actionBarTwo: {
        height: 190,
        backgroundColor: "rgba(0,0,0,0)",
        position:"absolute",
        paddingHorizontal: s.paddingHorizontal
    },
    fancyButton: {
        backgroundColor: c.black,
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MediaCss
