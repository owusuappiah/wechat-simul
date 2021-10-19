import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Colors, Sizes } from '../css/DefaultsCss'

const c = Colors
const s = Sizes

const AccountScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.banner}>
                <SafeAreaView>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: "900", color: 'white' }}>Account</Text>
                    </View>
                </SafeAreaView>
                <View style={styles.profileB}>
                    <View style={styles.profile}>
                        <Image style={styles.image} source={{ uri: "https://tse3-mm.cn.bing.net/th/id/OIP-C.Q0y3mFIXG-4oHTbRX7jAKAHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7" }} />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.title}>John Crook</Text>
                    <Text style={styles.subtitle}>Strive not to be a success, but rather to be of value.</Text>
                </View>
                <View style={styles.stats}>
                    <Pad name="Friends" value="89K" />
                    <Pad name="Moments" value="237" />
                </View>
                <View style={styles.lists}>
                    <ListItem containerStyle={styles.list}>
                        <ListItem.Content>
                            <ListItem.Title style={styles.tit}>General</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.list}>
                        <ListItem.Content>
                            <ListItem.Title style={styles.tit}>Moments</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.list}>
                        <ListItem.Content>
                            <ListItem.Title style={styles.tit}>Vine</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.list}>
                        <ListItem.Content>
                            <ListItem.Title style={styles.tit}>Settings</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </View>
            </View>
        </ScrollView>
    )
}

const Pad = ({ value, name, icon, special, w, h, onPress, style, vComponent }) => {


    return (
        <View style={[styles.pad, special ? styles.special : null, style]}>
            <View style={styles.valueContent}>
                {vComponent ? vComponent : <Text style={styles.bold}>{value}</Text>}
            </View>
            <View style={styles.propContent}>
                {icon}
                <Text style={styles.light}>{name}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    banner: {
        height: 170,
        backgroundColor: Colors.blue,
        alignItems: "center",
        justifyContent: "space-between",
    },
    bannerContent: {
    },

    flex: {
        justifyContent: "space-between"
    },
    profileB: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.green,
    },
    profile: {
        // width: 120,
        // height: 120,
        borderRadius: 100,
        position: "absolute",
        top: -60,
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "space-between",
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: Colors.white,
    },
    content: {
        marginTop: 60
    },
    title: {
        fontSize: 40,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 17,
        color: Colors.lightColor,
        textAlign: "center"
    },
    card: {
        padding: 15,

    },
    stats: {
        flexDirection: 'row',
        justifyContent: "space-around",
        padding: 10,
        borderColor: "whitesmoke",
        borderWidth: 1
    },
    pad: {
        alignItems: "center",
        backgroundColor: c.lightBlue,
        padding: s.paddingHorizontal,
        borderRadius: 8,
        width: 120,
    },
    special: {
        marginHorizontal: 2 * s.pixel
    },
    valueContent: {
        marginBottom: 2
    },
    value: {
        fontSize: s.fontSize + 5,
        textAlign: "center"
    },
    light: {
        fontSize: 16,
    },
    bold: {
        fontSize: 22,
        fontWeight: "bold"
    },
    lists: {
        marginTop: 15
    },
    list: {
        borderRadius: 8,
        backgroundColor: "whitesmoke",
        marginBottom: 10,
        marginHorizontal: 10
    },
    tit: {
        fontSize: 18
    }

})

export default AccountScreen
