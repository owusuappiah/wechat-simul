import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import { SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SolidButton } from '../../components/Button'
import Header from '../../components/Header'
import { IconCedis } from '../../components/Icons'
import MyAvatar from '../../components/MyAvatar'
import PinAuthComponent from '../../components/PinAuthComponent'
import { parseCurrency } from '../../controllers/Js'
import { Colors } from '../../css/DefaultsCss'
import TransferToChatContactCss from '../../css/TransferToChatContactCss'


const styles = TransferToChatContactCss

const TransferToChatContactScreen = ({ contactDetail = {}, onCancel, onSendTransferPress }) => {

    const route = useRoute()

    const nav = useNavigation()

    const [amountValue, setAmountValue] = useState('')
    const [transferNoteValue, setTransferNoteValue] = useState('')
    const [pinAuthVisible, setPinAuthVisible] = useState(false)

    const onChangeAmountValue = (text) => setAmountValue(text)
    const onChangeTransferNote = (text) => setTransferNoteValue(text)

    // const contactDetail = route.params?.contactDetail


    const callPinAuth = () => {
        setPinAuthVisible(true)
    }

    const onSendPress = () => {
        const transferObject = {
            amount: amountValue,
            note: transferNoteValue,
            date: new Date(),
            currency: "1"
        }
        onSendTransferPress(transferObject)
        onCancel()
    }

    const confirmPinAuth = () => {
        onSendPress()
    }


    return (
        <React.Fragment>
            <Modal animationType="slide">
                <View style={styles.container}>
                    {/* <SafeAreaView style={styles.safe}></SafeAreaView> */}
                    <Header
                        headerStyle={{ borderBottomWidth: 0 }}
                        headerTitle="Enter amount"
                        onBackButtonPressed={onCancel}
                    />
                    <View style={styles.transferContactCard}>
                        <View style={styles.transferForm}>
                            <View style={styles.transferFormIcon}>
                                {/* <IconCedis size={20} color={Colors.color} /> */}
                                <Text style={styles.currency}>{parseCurrency("1").name}</Text>

                            </View>
                            <View style={styles.transferInputContainer}>
                                <TextInput
                                    // placeholder="0"
                                    value={amountValue}
                                    onChangeText={onChangeAmountValue}
                                    keyboardType="decimal-pad"
                                    autoFocus={true}
                                    style={styles.transferInput}
                                    maxLength={6}
                                />
                            </View>
                        </View>
                        <View style={styles.transferNoteForm}>
                            <TextInput
                                value={transferNoteValue}
                                onChangeText={onChangeTransferNote}
                                placeholder="Note - optional"
                                style={styles.transferNoteInput}
                                maxLength={100}
                            />
                        </View>
                        <View style={styles.transferContactAvatar}>
                            <MyAvatar size={70} imageLink={contactDetail.imageLink} />
                        </View>
                        <View style={styles.transferContactTitleContainer}>
                            <Text numberOfLines={2} style={styles.transferContactTitle}>{contactDetail.name}</Text>
                        </View>
                    </View>
                    <View style={styles.transferButtonContainer}>
                        {/* <View style={styles.transferButton}></View> */}
                        <SolidButton onPress={callPinAuth} buttonStyle={styles.transferButton} text="Send" />
                    </View>
                </View>
                {
                    pinAuthVisible ?
                        <PinAuthComponent
                            visible={pinAuthVisible}
                            onCancel={() => setPinAuthVisible(false)}
                            onSubmitPress={confirmPinAuth}
                        />
                        : null
                }
            </Modal>

        </React.Fragment>
    )
}

export default TransferToChatContactScreen
