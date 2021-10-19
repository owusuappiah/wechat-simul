import React from 'react'
import { Platform } from 'react-native';
import { Animated, StyleSheet, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import { HeaderConflict } from './Header';
import { Sizes, Colors, FontBold } from '../css/DefaultsCss';
import { Text } from 'react-native';

const { headerMaxHeight, headerMinHeight, headerTitleLargeSize, headerTitleSmallSize,
    paddingHorizontal, paddingLeft, smallHeight, smallWidth } = Sizes;
const c = Colors;

export const isSmallerScreenSize = () => {
    return Dimensions.get("window").width < smallWidth
}
export const isSmallerScreenSizeHeight = () => {
    return Dimensions.get("window").height < smallHeight
}

/**
 * 
 * @param {*} scrollY: Animated Value (eg: Animated.value(2))
 * @param {String} headerTitleText: Header title text
 */
export const AnimateHeader = (scrollY = new Animated.Value(0)) => {
    const headerInputRange = [1, headerMaxHeight - 60, 60];
    /**
     * @description Fade in the Header View on Scroll
     */
    const HeaderOpacity = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [0, 0, 1],
        extrapolate: "clamp"
    })

    /**
     * @description Fade in the Header Title on Scroll
     */
    const HeaderTitleOpacity = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [0, 0, 1],
        extrapolate: "clamp"
    })


    const HeaderLineColor = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [c.white, c.white, c.lightGrey],
        extrapolate: "clamp"
    })

    return {
        headerOpacity: HeaderOpacity,
        headerTitleOpacity: HeaderTitleOpacity,
        headerLineColor: HeaderLineColor,
        callAnimation: Animated.event([
            {
                nativeEvent: { contentOffset: { y: scrollY } }
            }
        ], {
            useNativeDriver: false
        })
    }

}

export const FlexView = ({ component, style }) => {
    return (
        <View style={[styles.collapsable, style]}>
            {component}
        </View>
    )
}

export const AnimatedHeaderTitle = ({ title, headerTitleBoldStyle, isSmallerSize }) => {
    return (
        !(isSmallerSize) ?
            <Animated.View style={[styles.collapse, styles.h]}>
                <Animated.Text allowFontScaling={true} style={[styles.largeTitle, headerTitleBoldStyle]}>{title}</Animated.Text>
            </Animated.View>
            : null
    )
}
export const NavButton = ({ text, component, onPress, buttonStyle, disabled, isSmallerSize }) => {
    return (
        !(isSmallerSize) ?
            <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.navButton, buttonStyle]}>
                {text ? null : component}
                {text ? <Text style={styles.navButtonText}>{text}</Text> : null}
            </TouchableOpacity>
            : null
    )
}

export const Header = ({ isSmallerSize, titleOpacity, headerLineColor,
    headerOpacity, headerStyle, headerTitleStyle, headerTitle, headerLeft,
    headerRight, headerRightStyle, headerLeftStyle, onBackButtonPressed
}) => {

    return (
        !(isSmallerSize) ?
            <View style={styles.container}>
                <SafeAreaView style={{ backgroundColor: c.white }}></SafeAreaView>
                {/* <Animated.View style={[styles.header, { opacity: headerOpacity }, headerStyle]}> */}
                <Animated.View style={[styles.header, { borderBottomColor: headerLineColor }, headerStyle]}>
                    <Animated.View style={styles.navView}>
                        <Animated.View style={[styles.abs, styles.left, headerLeftStyle]}>
                            {headerLeft}
                        </Animated.View>
                        <Animated.Text style={[styles.title, { opacity: headerOpacity }, headerTitleStyle]}>
                            {headerTitle}
                        </Animated.Text>
                        <Animated.View style={[styles.abs, styles.right, headerRightStyle]}>
                            {headerRight}
                        </Animated.View>
                    </Animated.View>
                </Animated.View>
            </View>
            :
            <HeaderConflict
                headerTitle={headerTitle}
                headerRight={headerRight}
                headerStyle={headerStyle}
            />
    )
}



const styles = StyleSheet.create({
    container: {
        // backgroundColor: c.white,
        // height: headerMaxHeight,

    },
    header: {
        // position: "absolute",
        // width: "100%",
        height: 44,
        backgroundColor: c.white,
        paddingHorizontal: paddingHorizontal,
        // shadowColor: c.shadowColor,
        // shadowOffset: { width: 0, height: 10 },
        // shadowOpacity: 1,
        // zIndex: 1000,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: c.lightGrey,
        borderBottomWidth: 1,
    },
    collapse: {
        paddingHorizontal: paddingHorizontal,
        // height: 60,
        flexDirection: "row",
        alignItems: "center",
    },
    h: {
        // flexWrap: "wrap",
        // height: "auto"
    },
    largeTitle: {
        fontSize: isSmallerScreenSize() || isSmallerScreenSizeHeight() ? 28 : Platform.OS === "ios" ? headerTitleLargeSize : (headerTitleLargeSize - 4),
        fontWeight: "800",
        color: c.themeBlack,
        width: Dimensions.get("window").width - 100,
        fontFamily: "sans-bold",
    },
    navView: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: c.green,
        flexDirection: "row",
        position: "relative",
    },
    abs: {
        position: "absolute",
        height: "100%",
        bottom: 0,
        // flex: 1,
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor: c.black       
    },
    left: {
        left: 0,
    },
    right: {
        right: 0
    },
    title: {
        alignSelf: "center",
        fontSize: headerTitleSmallSize,
        fontWeight: "bold",
        fontFamily: "sans-bold"
    },
    collapsable: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    navButton: {
        borderRadius: 100,
        padding: 0,
        // backgroundColor: c.lightBlue
    },
    navButtonText: {
        color: c.blue,
        fontSize: 19,
        fontFamily: FontBold
    }
    // safeArea - alignItems: "center", justifyContent: "space-between", flexDirection: "row", height: "100%"
})

