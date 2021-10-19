import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import { Platform } from 'react-native'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import ChatList from '../../components/chat/ChatList'
import Header from '../../components/Header'
import { ChatSearchCss } from '../../css/ChatListCss'
import { Navs } from '../../models/Variables'


const styles = ChatSearchCss

const ChatSearchScreen = () => {

    const nav = useNavigation()

    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([])


    const onChangeSearchText = (text) => {
        setSearchText(text)
        setSearchResults([
            {
                name: "matilda",
                lastMessage: "you broke my heart owusu",
                phone: "+86765876567",
                imageLink: 'https://tse2-mm.cn.bing.net/th/id/OIP.QX04UQnVTjJX713q97DOhQAAAA?w=181&h=199&c=7&o=5&pid=1.7'

            },
            {
                name: "kwadei",
                lastMessage: "you broke my heart owusu",
                phone: "+867623876567",
                numberOfUnreadMessages: 8
            },
        ])
    }

    const goToSingleChatScreen = (contactDetail = {}) => {
        nav.navigate(Navs.singleChatScreen, { contactDetail: contactDetail })
    }

    return (
        <View style={styles.container}>
            <Header
                component={
                    <SearchBar
                        containerStyle={styles.inputContainerStyle}
                        inputContainerStyle={styles.searchStyle}
                        autoFocus={true}
                        placeholder="Type Here..."
                        onChangeText={onChangeSearchText}
                        value={searchText}
                        onCancel={() => nav.navigate(Navs.chatsScreen)}
                        platform={Platform.OS}
                        showCancel={true}
                    />
                }
            />

            <FlatList
            keyboardDismissMode="interactive"
                data={searchResults}
                keyExtractor={(item, index) => 'prop' + index}
                renderItem={({ item }) => <ChatList chatItem={item} onPress={goToSingleChatScreen.bind(this, item)} />}
            />

        </View>
    )
}

export default ChatSearchScreen
