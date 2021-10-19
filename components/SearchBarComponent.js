import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Colors, Sizes } from '../css/DefaultsCss'
import { IconSearch } from './Icons'

const SearchBarComponent = ({ placeholder, value, onChangeText }) => {
    return (
        <View style={styles.searchComponent}>
            <View style={styles.searchIcon}>
                <IconSearch />
            </View>
            <View style={styles.searchInputContainer}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Search"
                    style={styles.searchInput}
                    clearButtonMode="while-editing"
                />
            </View>
        </View>
    )
}

export default SearchBarComponent

const c = Colors
const s = Sizes

const styles = StyleSheet.create({
    searchComponent: {
        height: 36,
        backgroundColor: c.grey,
        borderRadius: 18,
        marginHorizontal: s.paddingHorizontal,
        marginTop: s.paddingHorizontal - 8,
        marginBottom: s.paddingHorizontal,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: s.paddingHorizontal,
    },
    searchIcon: {
        marginRight: s.paddingHorizontal - 5
    },
    searchInputContainer: {
        width: Dimensions.get("screen").width - (84)
    },
    searchInput: {
        color: c.lightColor,
        fontSize: s.fontSize
    }

})
