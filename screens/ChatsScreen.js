import { BlurView } from 'expo-blur'
import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { FlatList } from 'react-native'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { IconAddChat, IconSearch } from '../components/Icons'
import { isNull } from '../controllers/Js'
import { Colors } from '../css/DefaultsCss'
import { useNavigation } from '@react-navigation/core'
import { Navs } from '../models/Variables'
import { AnimatedHeaderTitle, AnimateHeader, Header, NavButton } from '../components/AnHeader'
import ChatListCss from '../css/ChatListCss'
import ChatList from '../components/chat/ChatList'
import AddChatScreen from './chat/AddChatScreen'

const styles = ChatListCss

const buttonColor = Colors.blue
const buttonSize = 23

function ChatsScreen() {
    const AH = new AnimateHeader()
    // lang = useLanguage()
    let ScreenTitle = 'Chats'

    const [addChatScreenVisible, setAddChatScreenVisible] = useState(false)


    const toggleAddChatScreenVisibility = ()=> {
        setAddChatScreenVisible(!(addChatScreenVisible))
    }


    return (
        <View style={styles.container}>
            <Header
                titleOpacity={AH.titleOpacity}
                headerOpacity={AH.headerOpacity}
                headerLineColor={AH.headerLineColor}
                headerTitle={ScreenTitle}
                headerRight={<NavButton onPress={toggleAddChatScreenVisibility} component={<IconAddChat color={buttonColor} />} />}
                headerLeft={<NavButton text={'Edit'} />}
            />
            <ChatListContainer callAnimation={AH.callAnimation} scrollEventThrottle={16} />
            <AddChatScreen modalVisible={addChatScreenVisible} onCancel={toggleAddChatScreenVisibility} />
        </View>
    )
}

const ChatListContainer = ({ callAnimation, scrollEventThrottle }) => {
    const ScreenTitle = "Chats"
    const nav = useNavigation()

    const [chats, setChats] = useState([
        {
            name: "matilda",
            lastMessage: "You must be the change you wish to see in the world.",
            phone: "+86765876567",
            imageLink: 'https://tse2-mm.cn.bing.net/th/id/OIP.QX04UQnVTjJX713q97DOhQAAAA?w=181&h=199&c=7&o=5&pid=1.7'

        },
        {
            name: "kwadei",
            lastMessage: "When the going gets tough, the tough get going",
            phone: "+867623876567",
            numberOfUnreadMessages: 8,
            imageLink: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.fyl_kbazs9e4BDrBY2pIDQHaFj?w=244&h=183&c=7&r=0&o=5&pid=1.7'
        },
        {
            name: "alo boy",
            lastMessage: "The journey of a thousand miles begins with one step",
            phone: "+867658765698797",
            imageLink: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.k4F9cbPZdYf4WsZg6-Si1QHaJQ?w=146&h=183&c=7&r=0&o=5&pid=1.7'
        },
    ])


    const goToSingleChatScreen = (contactDetail = {}) => {
        nav.navigate(Navs.singleChatScreen, { contactDetail: contactDetail })
    }

    const goToSearchScreen = ()=> {
        nav.navigate(Navs.chatSearchScreen)
    }


    return (
        <FlatList
            scrollEventThrottle={scrollEventThrottle} onScroll={callAnimation}
            keyExtractor={(item) => item.phone}
            data={chats}
            renderItem={({ item }) => {
                return (
                    <ChatList onPress={goToSingleChatScreen.bind(this, item)} chatItem={item} />
                )
            }}
            ListFooterComponent={<View style={{ height: 20 }}></View>}
            ListHeaderComponent={() =>
                <React.Fragment>
                    <AnimatedHeaderTitle title={ScreenTitle} />
                    <TouchableWithoutFeedback onPress={goToSearchScreen} style={styles.fakeSearchContainer}>
                        <View style={styles.fakeSearchBar}>
                            <View style={styles.fakeSearchBarIcon}>
                                <IconSearch />
                            </View>
                            <Text style={styles.fakeSearchBarText}>Search</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </React.Fragment>
            }
        />
    )
}

export default ChatsScreen
