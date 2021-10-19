import React from 'react'
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Animated } from 'react-native'
import { Colors, FontBold, FontRegular, Sizes } from '../css/DefaultsCss'


const c = Colors
const s = Sizes

const { headerMaxHeight, headerMinHeight, headerTitleLargeSize, headerTitleSmallSize,
    paddingHorizontal, paddingLeft, smallHeight, smallWidth } = Sizes;


const thisHeaderSize = s.headerSize + 10

const FancyHeader = ({ title, headerStyle, rightContainerStyle,
    titleContinerStyle, HeaderRightComponent,
    titleOpacityAnimation, titleFontSize, headerHeight, headerBorderBottom, titleStyle
}) => {
    return (
        <View>
            <SafeAreaView style={{ backgroundColor: c.backgroundColor }}></SafeAreaView>
            <Animated.View style={[styles.header, { borderBottomWidth: headerBorderBottom }, headerStyle]}>
                <Animated.View style={styles.headerBucket}>
                    <Animated.View style={[styles.titleContainer, { opacity: titleOpacityAnimation }, titleContinerStyle]}>
                        <Animated.Text style={[styles.headerTitle, titleStyle]}>{title}</Animated.Text>
                    </Animated.View>
                    <Animated.View style={[styles.right, rightContainerStyle]}>
                        {HeaderRightComponent}
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </View>
    )
}

export const NavButton = ({ component, onPress, buttonStyle, disabled, isSmallerSize }) => {
    return (
        !(isSmallerSize) ?
            <Animated.View style={styles.collapse}>
                <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.navButton, buttonStyle]}>
                    {component}
                </TouchableOpacity>
            </Animated.View>
            : null
    )
}

/**
 * 
 * @param {*} scrollY: Animated Value (eg: Animated.value(2))
 * @param {String} headerTitleText: Header title text
 */
export const AnimateHeader = (scrollY = new Animated.Value(0)) => {
    const headerInputRange = [1, s.headerSize - 40, thisHeaderSize - 30];
    /**
     * @description Fade in the Header View on Scroll
     */
    const HeaderOpacity = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [1, 1, 0],
        extrapolate: "clamp"
    })

    /**
     * @description Fade in the Header Title on Scroll
     */
    const HeaderTitleOpacity = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [1, 1, 0],
        extrapolate: "clamp"
    })

    const TitleFontSize = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [35, 35, 25],
        extrapolate: "clamp"
    })

    const HeaderHeight = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [thisHeaderSize, thisHeaderSize, s.headerSize],
        extrapolate: "clamp",
        duration: 3000
    })

    const HeaderBorderBottom = scrollY.interpolate({
        inputRange: headerInputRange,
        outputRange: [0, 0, 1],
        extrapolate: "clamp",
        duration: 3000
    })

    return {
        headerOpacity: HeaderOpacity,
        headerTitleOpacity: HeaderTitleOpacity,
        titleFontSize: TitleFontSize,
        headerHeight: HeaderHeight,
        headerBorderBottom: HeaderBorderBottom,
        callAnimation: Animated.event([
            {
                nativeEvent: { contentOffset: { y: scrollY } }
            }
        ], {
            useNativeDriver: false
        })
    }

}

export default FancyHeader

const styles = StyleSheet.create({
    header: {
        height: thisHeaderSize,
        backgroundColor: c.backgroundColor,
        borderBottomColor: c.lightGrey,
        // borderBottomWidth: 1
    },
    headerBucket: {
        flex: 1,
        flexDirection: "row",
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: s.paddingHorizontal
    },
    headerTitle: {
        fontSize: 30,
        fontFamily: FontBold,
        fontWeight: "800",
        color: c.blue,

    },
    navButton: {
        borderRadius: 100,
        padding: 8,
        backgroundColor: c.lightBlue
    }
})
