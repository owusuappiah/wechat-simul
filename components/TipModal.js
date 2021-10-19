import React, { useState } from 'react'
import { Modal, View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import TipModalCss from '../css/TipModalCss'
import { BorderedButton, SolidButton } from './Button'
import { NavButton } from './FancyHeader'
import { IconClose } from './Icons'


const styles = TipModalCss

const TipModal = ({ name, closeModal }) => {

    const [amount, setAmount] = useState(null)
    const [maximizeModalContentState, setMaximizeModalContentState] = useState(false)

    const amountSuggestions = [
        {
            amount: 30,
            currency: "ghc"
        },
        {
            amount: 40,
            currency: "ghc"
        },
        {
            amount: 50,
            currency: "ghc"
        },
        {
            amount: 80,
            currency: "ghc"
        },
    ]

    const onSelectPredefinedAmount = (value) => {
        setAmount(value)
    }

    const maximizeModalContent = () => {
        setMaximizeModalContentState(true)
    }

    return (
        <Modal animationType="fade" transparent={true}>
            <View style={styles.modal}>
                <View style={[styles.tipContent, maximizeModalContentState ? styles.maximizedTipContent : null]}>
                    <View style={styles.tipHeader}>
                        <Text style={styles.tipHeaderText}>Tip (Ghc) {name}</Text>
                        <NavButton onPress={closeModal} component={<IconClose />} />
                    </View>
                    <View style={styles.tipSuggestions}>
                        {
                            amountSuggestions.map((a, i) => {
                                return (
                                    <TipSuggestionButton
                                        onPress={onSelectPredefinedAmount.bind(this, a.amount)}
                                        key={i}
                                        amount={a.amount}
                                        active={amount === a.amount}
                                    />
                                )
                            })
                        }
                    </View>
                    <View style={styles.tipForm}>
                        <Text style={styles.tipFormLabel}>Enter other amount</Text>
                        <TextInput
                            onFocus={maximizeModalContent}
                            onBlur={() => setMaximizeModalContentState(false)}
                            style={styles.tipInput}
                            placeholder="Ghc 0.30"
                            keyboardType="numeric"
                            maxLength={4}
                        />
                    </View>
                    <View style={styles.tipFormButtonContainer}>
                        <BorderedButton  caps={true} text="Show off" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const TipSuggestionButton = ({ amount, onPress, active }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.tipSuggestionButton, active ? styles.activeAmountSuggestion : null]}>
            <Text style={styles.tipSuggestionText}>{amount}</Text>
        </TouchableOpacity>
    )
}

export default TipModal
