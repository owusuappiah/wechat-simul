import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontBold, FontRegular, Sizes } from './DefaultsCss'


const c = Colors
const s = Sizes

const PhotoFeedCss = StyleSheet.create({
    card: {
        marginBottom: s.paddingHorizontal * 2,
        elevation: 1,
        shadowColor: 'rgba(0,0, 0,0.3)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        backgroundColor: c.backgroundColor,
        borderBottomRightRadius: s.rounded - 10,
        borderBottomLeftRadius: s.rounded - 10,
    },
    cardHeader: {
        marginBottom: s.paddingHorizontal - 5,
        paddingTop: s.paddingHorizontal - 5,
    },
    cardUserDetailContainer: {
        flexDirection: "row",
        paddingHorizontal: s.paddingHorizontal - 5,
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardUserDetailContent: {
        flexDirection: "row",
    },
    cardAvatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: c.lightGrey,
        marginRight: s.paddingLeft - 5
    },
    cardUserInfo: {
        flexDirection: "row",
        alignItems: "center"
    },

    cardName: {
        fontFamily: FontBold,
        paddingRight: s.paddingRight - 10,
        fontSize: s.fontSize
    },

    cardVerified: {
        marginRight: 5
    },

    cardSmall: {
        color: c.lightColor,
        fontSize: s.fontSize - 3,
        fontFamily: FontRegular,
    },

    cardMedia: {
        width: s.screenWidth - (s.paddingHorizontal),
        alignSelf: "center",
        height: 300,
        backgroundColor: c.lightGrey,
        borderRadius: s.rounded - 10,
        overflow: "hidden"
    },

    cardImageSize: {
        width: "100%",
        height: "100%"
    },
    cardDescription: {

    },
    descriptionText: {
        fontFamily: FontRegular,
        fontSize: s.fontSize,
        paddingHorizontal: s.paddingHorizontal,
        paddingBottom: 10
    },

    cardActions: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: s.paddingHorizontal,
        borderTopColor:c.lightGrey,
        borderTopWidth:0.5
    },
    cardActionsButtons: {
        flexDirection: "row",
        alignItems: "center"
    },
    tipButton: {
        flexDirection: "row",
        alignItems: 'center',
        marginRight: 0
    },
    tipText: {
        fontWeight: "800",
        textTransform: "uppercase",
        paddingRight: 5,
        color:c.blue
    },
    cardStats:{
        flexDirection:   "row",
        alignItems: "center",
        paddingHorizontal: s.paddingHorizontal + 10,
        paddingVertical: s.paddingHorizontal - 5
    },
    cardStatsView: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: s.paddingHorizontal
    },
    statsText: {
        fontSize: s.fontSize - 3,
        color: c.lightColor,
        paddingLeft: 6
    }
})

export default PhotoFeedCss
