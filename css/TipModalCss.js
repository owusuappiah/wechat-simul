import { StyleSheet } from "react-native";
import { Colors, FontBold, FontRegular, Sizes } from "./DefaultsCss";


const c = Colors
const s = Sizes

const TipModalCss = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.9)",
    },
    tipContent: {
        height: 350,
        backgroundColor: c.backgroundColor,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopRightRadius: s.rounded,
        borderTopLeftRadius: s.rounded,
    },
    maximizedTipContent: {
        height: "auto",
        top: 60
    },
    tipHeader: {
        // height: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: s.paddingHorizontal,
        paddingVertical: s.paddingHorizontal - 5,
        borderBottomWidth: 1,
        borderColor: c.lightGrey
    },
    tipHeaderText: {
        fontFamily: FontBold,
        fontSize: s.fontSize
    },
    tipSuggestions: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: s.paddingHorizontal,
        justifyContent: "space-around"
    },
    tipSuggestionButton: {
        width: 60,
        height: 60,
        backgroundColor: c.backgroundColor,
        shadowOpacity:1,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        elevation: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center",
    },
    tipSuggestionText: {
        fontSize: s.fontSize,
        color: c.lightColor,
        textAlign: 'center'
    },
    activeAmountSuggestion: {
        borderWidth: 3,
        borderColor: c.blue
    },
    tipForm: {
        marginTop: s.paddingHorizontal * 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tipFormLabel: {
        fontFamily: FontRegular,
        fontSize: s.fontSize,
        color: c.lightColor,
        marginBottom: s.paddingHorizontal -5
    },
    tipInput: {
        backgroundColor: c.backgroundColor,
        shadowOpacity:1,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        elevation: 1,
        padding: s.paddingHorizontal,
        borderRadius: 10,
        fontSize: s.fontSize + 6,
        fontFamily: FontBold,
        width: 120
    },
    tipFormButtonContainer: {
        marginTop: s.paddingHorizontal,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default TipModalCss