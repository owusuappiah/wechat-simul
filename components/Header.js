import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, } from 'react-native'
import { Colors, Sizes } from '../css/DefaultsCss';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconBackButton } from './Icons';
import { useNavigation } from '@react-navigation/native';
import { isNull } from '../controllers/Js';

const c = Colors

function Header({ headerStyle, rightContainerStyle,
    leftContainerStyle, titleContinerStyle,
    headerTitle, headerRight, HeaderLeft, hideBackButton = false,
    onBackButtonPressed, backButtonIcon,
    component, border = true,  safeBgColor
}) {

    var HeaderTitleComponent = null;
    if (isNull(headerTitle)) {
        headerTitle = ""
    }
    if (typeof headerTitle === "function") {
        HeaderTitleComponent = headerTitle;
    } else if (typeof headerTitle === "string") {
        HeaderTitleComponent = () => <Text style={styles.headerTitle}>{headerTitle}</Text>;
    }

    var HeaderLeftComponent = () => null;
    if (typeof HeaderLeft === "function") {
        HeaderLeftComponent = HeaderLeft;
    }
    else {
        HeaderLeftComponent = () => hideBackButton ? null : <BackButton backButtonIcon={backButtonIcon} onBackButtonPressed={onBackButtonPressed} />
    }

    var HeaderRightComponent = () => null;
    if (typeof headerRight === "function") {
        HeaderRightComponent = headerRight;
    }

    // console.log(headerRight)

    return (
        <View>
            <SafeAreaView style={[{ backgroundColor: safeBgColor || c.white }]}></SafeAreaView>
            <View style={[styles.header, {borderBottomWidth: border ? 1 : 0}, headerStyle]}>
                {
                    component ? component :
                        <View style={styles.headerBucket}>
                            <View style={[styles.abs, styles.left, leftContainerStyle]}>
                                <HeaderLeftComponent />
                            </View>
                            <View style={[styles.middle, titleContinerStyle]}>
                                <HeaderTitleComponent />
                            </View>
                            <View style={[styles.abs, styles.right, rightContainerStyle]}>
                                <HeaderRightComponent />
                            </View>
                        </View>
                }
            </View>
        </View>
    )
}

const BackButton = ({ onBackButtonPressed, backButtonIcon }) => {
    const nav = useNavigation()
    const goBack = () => nav.goBack()
    return (
        <TouchableOpacity onPress={onBackButtonPressed || goBack} style={[styles.headerButtons]}>
            {backButtonIcon || <IconBackButton size={Sizes.icon_small_size} color={c.blue} />}
        </TouchableOpacity>
    )
}

export const HeaderButton = ({ component, onPress, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.headerButtons]}>
            {component}
        </TouchableOpacity>
    )
}

export const HeaderConflict = Header

const styles = StyleSheet.create({
    header: {
        height: Sizes.headerSize,
        backgroundColor: c.white,
        // shadowColor: "rgba(0,0,0,0.25)",
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 1,
        borderBottomColor: c.lightGrey,
        borderBottomWidth: 1
    },
    headerBucket: {
        flex: 1,
        flexDirection: "row",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 19,
        fontFamily: "sans-bold"
        // backgroundColor: c.blue,
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
    headerButtons: {
        paddingHorizontal: 10,
        paddingVertical: 8
    }
})

export default Header;
