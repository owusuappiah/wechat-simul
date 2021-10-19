import React from 'react'
import { View, Text } from 'react-native'
import { Badge, ListItem } from 'react-native-elements'
import { isNull } from '../../controllers/Js'
import ChatListCss from '../../css/ChatListCss'
import MyAvatar from '../MyAvatar'


const styles = ChatListCss

const ChatList = ({ chatItem, onPress, showRight = true, title, subtitle, imageURL,  profileSize = 55, listStyle }) => {
    const { lastMessage, name, imageLink, numberOfUnreadMessages } = chatItem
    return (
        <ListItem containerStyle={[styles.chatList, listStyle]} bottomDivider={true} onPress={onPress}>
            <MyAvatar size={profileSize} imageLink={imageURL || imageLink} />
            <ListItem.Content>
                <ListItem.Title numberOfLines={1} style={styles.chatListTitle}>{title || name}</ListItem.Title>
                <ListItem.Subtitle numberOfLines={2} style={styles.chatListSubTitle}>{subtitle || lastMessage}</ListItem.Subtitle>
            </ListItem.Content>
            {
                showRight ?
                    <View style={styles.chatListRight}>
                        <View style={styles.chatListRightTextContent}>
                            <Text style={styles.chatListRightText}>Yesterday</Text>
                        </View>
                        <View style={styles.chatListRightContent}>
                            {
                                isNull(numberOfUnreadMessages) ? null :
                                    <Badge value="8" />
                            }
                            <ListItem.Chevron />
                        </View>
                    </View>
                    : null
            }
        </ListItem>
    )
}

export default ChatList
