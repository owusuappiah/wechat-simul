import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontBold, FontRegular, Sizes } from './DefaultsCss'


const c = Colors
const s = Sizes
const WIDTH = Dimensions.get("screen").width

const buttonSize = 35

const ChatCss = StyleSheet.create({
    editorContainer: {
        width: "100%",
        backgroundColor: c.lightGrey,
    },
    editor: {
        backgroundColor: c.lightGrey,
        minHeight: 45,
        maxHeight: 80,
        flexDirection: "row",
        alignItems: "flex-end",
        paddingVertical: s.paddingHorizontal - 10,
        borderTopColor: c.gray,
        borderTopWidth: 0.5
    },

    edRightSide: {
        flexDirection: "row",
        marginLeft: s.paddingHorizontal,
        alignItems: "center",
        justifyContent: "center"
    },
    editorButton: {

        alignItems: "center",
        justifyContent: "center",
        height: buttonSize,
        width: buttonSize + 5,
        padding: 0,
        // backgroundColor: c.blue,
        // borderRadius: 100,
        marginRight: 0
    },
    edSolidButton: {
        backgroundColor: c.blue,
        borderRadius: 100,
        width: buttonSize
    },
    textAreaContainer: {
        width: WIDTH - (((buttonSize + 5) * 3) + s.paddingHorizontal),
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: c.white,
        minHeight: 32,
        justifyContent: "center",
        paddingVertical: 5,
        marginBottom: 1.5,
        borderColor: c.gray,
        borderWidth: 0.5

    },
    textAreaContainerExpand: {
        width: WIDTH - (((buttonSize) * 2) + s.paddingHorizontal + 15),
    },
    textArea: {
        // width:   "100%",
        // backgroundColor:  c.blue,
        // height: "100%",
        fontSize: 18,
        padding: 0,
        paddingTop: -4,
        paddingHorizontal: s.paddingHorizontal - 5,
    },
    sendButton: {
        marginRight: 10
    },

    thread: {
        marginTop: s.paddingHorizontal
    },

    threadContent: {
        paddingHorizontal: s.paddingHorizontal,
        paddingVertical: s.paddingHorizontal - 7,
        padding: 5,
        borderRadius: 10,
        maxWidth: WIDTH - (WIDTH / 3),
        // flexDirection: "row",
    },

    // one sending or sent the message 
    authorThreadContent: {
        alignSelf: "flex-end",
        marginRight: s.paddingHorizontal,
        backgroundColor: '#00296b',
    },

    //  one receiving message
    receiverThreadContent: {
        alignSelf: "flex-start",
        marginLeft: s.paddingHorizontal,
        backgroundColor: '#4a4e69',
    },


    threadText: {
        fontSize: 17,
        position: "relative",
        color: c.white,
    },
    authorThreadText: {
        color: c.white,
    },

    headerCardContainer: {
        width: 200,
        padding: 0
    },
    headerCardTitle: {
        fontFamily: 'sans-bold',
    },

    headerCardSubTitle: {
        fontFamily: 'sans',
        color: c.lightColor,
        fontSize: 14
    },
    chatInfoMini: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    chatTime: {
        fontSize: 11,
        // opacity:0.6,
        color: '#f7f7ff'
    },

    chatSectionDate: {
        // backgroundColor: c.blue
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },
    chatSectionDateContent: {
        backgroundColor: c.blue,
        padding: 3,
        paddingHorizontal: 7,
        borderRadius: 8
    },
    chatSectionDateText: {
        textAlign: "center",

    },
    transferThreadBox: {
        width: 200
    },
    transferBoxContent: {
        flexDirection: "row",
        width: "100%",
    },
    transferThreadContent: {
        backgroundColor: '#3c096c'
    },

    transferThreadIcon: {
        marginRight: s.paddingHorizontal - 5,
        borderRadius: 100,
        width: 30,
        height: 30,
        borderColor: c.white,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    transferThreadIconText: {
        fontSize: s.fontSize + 10,
        color: c.white,
        fontFamily: FontBold
    },
    transferAmount: {
        flexDirection: "row",
        alignItems: "center"
    },
    transferAmountText: {
        fontSize: s.fontSize + 10,
        color: c.white,
        fontFamily: FontBold,
    },
    transferCurrency: {
        fontSize: s.fontSize,
        color: c.white,
        fontFamily: FontBold,
        marginRight: 5
    },
    transferBrand: {
        // paddingVertical: s.paddingHorizontal - 7,
    },
    transferNoteText: {
        color: c.lowColor,
        paddingLeft: 30 + (s.paddingHorizontal - 5)
    },
    transferBrandText: {
        color: c.lowColor,
        opacity: 0.8
    },
    forBranding: {
        marginTop: s.paddingHorizontal,
        justifyContent: "space-between"
    },

    mediaThread: {
    },

    mediaThreadContent: {
        width: WIDTH - (WIDTH / 4),
    },
    mediaOverwrite: {
        backgroundColor: null
    },
    media: {
        height: 200,
        backgroundColor: '#00296b',
        padding: 5,
        borderRadius: 6,
        borderBottomRightRadius: 0
    },

    mediaTChatInfo: {
        backgroundColor: '#00296b',
        flex: 1,
        alignSelf: "flex-end",
        paddingVertical: 5,
        paddingHorizontal: s.paddingHorizontal,
        borderRadius: 12,
        borderTopRightRadius: 0
    },

    image: {
        width: "100%",
        height: "100%",
        borderRadius: 6,
    },

    micFeedbackContainer: {
        position: "absolute",
        width: "100%",
        // height: "100%",
        top: 0,
        bottom: 0,
        backgroundColor: c.white,
        justifyContent: "center"
    },


    micActions: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        justifyContent: "space-between"
    },
    micRecordingAnimCompo: {
        position: "absolute",
        top: -90,
        left: (WIDTH / 2) - 35
    },
    micRecordingAnim: {
        width: 70,
        height: 70
    },

    micTimer: {
        marginLeft: s.paddingHorizontal - 5,
    },

    micTimerText: {
        fontSize: s.fontSize + 3,
    },

    audioThreadContent: {
        width: "100%",
        height: 38,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    videoShg: {
        backgroundColor: c.blue,
    }

})

export default ChatCss
