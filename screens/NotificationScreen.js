import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IconNotifications } from '../components/Icons'

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <IconNotifications size={40} />
                <Text style={styles.tt}>No new notifications</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        justifyContent: "center",
        alignItems: "center"
    },
    tt: {
        fontSize: 19,
        padding: 10
    }
})

export default NotificationScreen
