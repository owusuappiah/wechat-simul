import { Dimensions, StyleSheet } from "react-native"


const c = {
    blue: "rgb(0,122,255)", //"#00B3E2",
    backgroundColor: "#fff",
    lightColor: "gray",
    lightGrey: "#f3f3f3", // #dedede
    lightBlue: "rgba(0, 122, 255, 0.1)",
    white: "#fff",
    gray: "#d4d4d4",
    grey: "#eee",
    color: "black",
    lowColor: "whitesmoke",
    danger: "#9c191b",
    green: "#007200",
    transfer: "#571089",
    black: "black"
}

const s ={
    fontSize: 17,
    topSpace: 20,
    iconSize: 22,
    headerSize: 44,
    headerMaxHeight: 70,
    headerMinHeight: 70,
    headerTitleLargeSize: 35,
    headerTitleSmallSize: 22,
    paddingHorizontal: 15,
    paddingRight: 15,
    paddingLeft: 15,
    rounded: 30,
    checkboxSize: 30,
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
    smallHeight: 700,
    smallWidth: 375
}

export const DefaultCss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: c.backgroundColor
    },
    modal: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    shadow: {
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 0},
        elevation: 1,
        shadowRadius: 2
    },
    submitButtonContainer: {
        alignItems: "center",
        marginTop:  s.paddingHorizontal
    },

    submitButton:  {
        paddingHorizontal: s.paddingHorizontal * 4,
        paddingVertical: s.paddingHorizontal
    }
})

export const Colors = c

export const FontRegular = "sans"
export const FontBold = "sans-bold"


export const Sizes = s