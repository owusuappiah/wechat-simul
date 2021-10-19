import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, DefaultCss, FontBold, FontRegular, Sizes } from './DefaultsCss'


const c = Colors
const s = Sizes

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height

const buttonSize = 35

const TransferToChatContactCss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: c.lightGrey,

        ...StyleSheet.absoluteFill
    },

    safe:   {
        backgroundColor:  c.white,
    },

    transferContactCard: {
        backgroundColor:  c.white,
        // height: 160,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderColor: c.grey,
        borderWidth: 1,
        borderTopWidth: 0,
        alignItems: "center",
        paddingVertical:  s.paddingHorizontal
    },

    transferContactAvatar:  {
        // marginTop: s.paddingHorizontal
    },

    transferContactTitleContainer: {
        marginTop: s.paddingHorizontal - 8,
        paddingHorizontal: s.paddingHorizontal
    },

    transferContactTitle: {
        fontSize: s.fontSize,
        fontFamily: FontBold,
        textTransform: "uppercase",
        textAlign: "center"
    },

    transferForm: {
        flexDirection: "row",
        // backgroundColor: c.blue,
        // width: "100%",
        marginBottom: s.paddingHorizontal * 2,
        alignItems: "center",
        width: "100%"
    },
    transferFormIcon: {
        paddingHorizontal: s.paddingHorizontal
    },
    transferInputContainer: {
        width: WIDTH - (68),
    },
    transferInput:  {
        // height: 40,
        // backgroundColor: c.blue,
        fontSize: 50,
        fontFamily: FontBold,
        // paddingRight: s.paddingHorizontal,
        // t,extAlign: "center"
    },

    transferNoteForm: {
        width: "100%",
        marginBottom:s.paddingHorizontal
    },
    transferNoteInput: {
        color: c.lightColor,
        fontSize: s.fontSize,
        // backgroundColor: c.blue,
        padding: s.paddingHorizontal,
        borderBottomColor: c.grey,
        borderBottomWidth: 1
    },

    transferButtonContainer: {
        alignItems: "center",
        marginTop:  s.paddingHorizontal
    },

    transferButton:  {
        paddingHorizontal: s.paddingHorizontal * 4,
        paddingVertical: s.paddingHorizontal
    }
 
})

export default TransferToChatContactCss
