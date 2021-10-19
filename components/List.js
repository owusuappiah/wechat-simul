import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import { Colors, FontBold, FontRegular, Sizes } from '../css/DefaultsCss'

const s = Sizes
const c = Colors

const List = ({ title, subtitle, icon, chevron, divider, titleStyle, subtitleStyle, containerStyle }) => {
    return (
        <ListItem containerStyle={containerStyle} bottomDivider={divider}>
            <Icon Component={icon} />
            <ListItem.Content>
                <ListItem.Title style={[styles.title, titleStyle]} numberOfLines={1}>{title}</ListItem.Title>
                <ListItem.Subtitle style={[styles.subtitle, subtitleStyle]}>{subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            { chevron ? <ListItem.Chevron /> : null}
        </ListItem>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: s.fontSize,
        fontFamily: FontBold
    },
    subtitle: {
        fontFamily: FontRegular,
        color: c.lightColor
    }
})

export default List
