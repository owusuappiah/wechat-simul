import { useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SolidButton, SubmitButton } from '../../components/Button'
import Header from '../../components/Header'
import { IconCheckSolid, IconNote, IconSent, IconAccept, IconReject, IconMoney } from '../../components/Icons'
import List from '../../components/List'
import { parseCurrency, dateTimeFancy, isNull } from '../../controllers/Js'
import { Colors, DefaultCss, FontBold, Sizes } from '../../css/DefaultsCss'


const c = Colors
const s = Sizes

const TransferDetailScreen = () => {
    const route = useRoute()


    const contactDetail = route.params?.transferObject
    const transferObject = route.params?.transferObject

    const {
        receiverHasAccepted,
        receiver,
        amount
    } = transferObject

    const user_id = 'receiver'


    const TransferStateIconComponent = () => {
        switch (receiverHasAccepted) {
            case true:
                return {
                    Icon: () => <IconCheckSolid size={120} color={c.green} />,
                    label: "Accepted Transfer"
                }

            case false:
                return {
                    Icon: () => <IconReject size={120} color={c.danger} />,
                    label: "Rejected Transfer"
                }
            default:
                return {
                    Icon: () => <IconMoney size={120} color={c.transfer} />,
                    label: "Waiting for action"
                }
        }
    }

    const checkTransferReceiver = ()=> {
        return receiver !== user_id
    }

    const TransferReceiverComponent = ()=> {

        if(!(isNull(receiverHasAccepted))) return null


        if(checkTransferReceiver()){
            return (
                <SubmitButton onPress={acceptMoney} buttonStyle={{ backgroundColor: c.green }} text="Accept" />
            )
        }else{
            return null
        }
    }


    const acceptMoney = () => {
        alert("Accepted!")
    }

    console.log(transferObject)

    return (
        <View style={styles.container}>
            <Header border={false} />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.boldIcon}>
                        {TransferStateIconComponent().Icon()}
                    </View>
                    <View style={styles.systemNoteContainer}>
                        <Text style={styles.systemNote}>{TransferStateIconComponent().label}</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.currency}>{parseCurrency("1").name}</Text>
                        <Text style={styles.amount}>{amount}</Text>
                    </View>
                    <TransferReceiverComponent />
                </View>

                <View style={styles.lists}>
                    <List containerStyle={styles.list} divider={true} icon={() => <IconNote />} title="Note" subtitle={""} />
                    <List containerStyle={styles.list} divider={true} icon={() => <IconSent />} title="Sent on" subtitle={dateTimeFancy(new Date())} />
                    <List containerStyle={styles.list} divider={true} icon={() => <IconAccept />} title="Accepted on" subtitle={dateTimeFancy(new Date())} />
                </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: c.white
    },
    content: {
        alignItems: "center"
    },
    boldIcon: {
        // backgroundColor: c.blue,
        // padding: 5
        marginBottom: s.paddingHorizontal - 5
    },
    systemNoteContainer: {
        paddingHorizontal: s.paddingHorizontal
    },
    systemNote: {
        fontFamily: FontBold,
        fontSize: s.fontSize,
        color: c.lightColor
    },
    amountContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: s.paddingHorizontal
    },
    currency: {
        fontSize: s.fontSize,
        // color: c.lightColor,
        fontFamily: FontBold,
        marginRight: 5,
    },
    amount: {
        fontFamily: FontBold,
        fontSize: s.fontSize * 2
    },

    lists: {
        marginTop: s.paddingHorizontal * 2
    },
    list: {
        alignItems: "flex-start"
    }
})

export default TransferDetailScreen
