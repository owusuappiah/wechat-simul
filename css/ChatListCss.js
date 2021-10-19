import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontBold, FontRegular, Sizes } from './DefaultsCss'


const c = Colors
const s = Sizes

const buttonSize = 35

const ChatListCss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: c.white
    },

    fakeSearchContainer: {
    },
    fakeSearchBar: {
        height: 36,
        backgroundColor: c.grey,
        borderRadius: 18,
        marginHorizontal: s.paddingHorizontal,
        marginTop: s.paddingHorizontal - 8,
        marginBottom: s.paddingHorizontal,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: s.paddingHorizontal,
    },
    fakeSearchBarIcon: {
        marginRight: s.paddingHorizontal - 5
    },
    fakeSearchBarText: {
        color: c.lightColor,
        fontSize: s.fontSize
    },
    chatList: {
        height: 80
    },
    chatListTitle: {
        fontSize: s.fontSize,
        fontFamily: FontBold
    },
    chatListSubTitle: {
        fontSize: s.fontSize - 3,
        fontFamily: FontRegular,
        color: c.lightColor
    },
    chatListRightTextContent: {
        paddingBottom: 3
    },
    chatListRightText: {
        fontSize: s.fontSize - 3,
        color: c.lightColor
    },
    chatListRightContent: {
        flexDirection: "row",
        justifyContent: "flex-end"
    }
})


export const ChatSearchCss = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:c.white
    },

    inputContainerStyle: {
        backgroundColor: c.white,
        height: 38
    },

    searchStyle: {
        backgroundColor: c.grey,
        height: 38,
        borderRadius: 18
    }
})


export const AddNewChatCss = StyleSheet.create({
    ...ChatSearchCss,

  
    searchHeaderContainer: {
        // paddingTop: s.paddingHorizontal - 8,
        height: s.headerSize + 10
    },

    contactList: {
        height: 60
    }
})


export default ChatListCss
