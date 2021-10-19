import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-native'
import { Platform } from 'react-native'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import ChatList from '../../components/chat/ChatList'
import Header from '../../components/Header'
import { IconClose } from '../../components/Icons'
import SearchBarComponent from '../../components/SearchBarComponent'
import { AddNewChatCss, ChatSearchCss } from '../../css/ChatListCss'
import { Colors } from '../../css/DefaultsCss'
import { Navs } from '../../models/Variables'
import * as Contacts from 'expo-contacts';
import { parseAreaCode } from '../../controllers/Js'


const styles = AddNewChatCss

const AddChatScreen = ({ modalVisible, onCancel }) => {

    const nav = useNavigation()

    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [contactLists, setContactLists] = useState([])


    const getContacts = () => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    const contact = data[0];
                    // console.log(data);
                    setContactLists(data)
                }
            }
        })();
    }

    const filterContacts = (text) => {
        return contactLists.filter(a => {
            // console.log(a.name)
            if(a?.name?.includes(text)){
                return a
            }
        })
    }

    const onChangeSearchText = (text) => {
        setSearchText(text)
        console.log(text, '&&&&&&&&&&&***************((((((((((((((((())))))))))))))')
        console.log()
        setSearchResults(filterContacts(text))
    }

    const goToSingleChatScreen = (contactDetail = {}) => {
        onCancel()
        nav.navigate(Navs.singleChatScreen, { contactDetail: contactDetail })
    }



    const getSingePhoneNumberFromContact = (phoneNumbers = []) => {

        const phoneObj = phoneNumbers.length > 0 ? phoneNumbers[0] : {};

        let phoneNumber = phoneObj?.number || "";
        let areaCode = parseAreaCode(phoneObj?.countryCode) || ""

        return areaCode + phoneNumber
    }


    /**
     * Fetch the data object associated with the (contact) contact ID
     */
    const getContactInformation = (contact_id) => {

    }

    /**
     * Check is each contact had already signed in
     */
    const checkIfContactAlreadyUseApp = (contact) => {

    }

    useEffect(() => {
        getContacts()
        return () => {
        }
    }, [])

    return (
        <Modal visible={modalVisible} animationType="slide" style={styles.container}>
            <Header
                headerTitle="New chat"
                onBackButtonPressed={onCancel}
                backButtonIcon={<IconClose color={Colors.blue} />}
            />
            <Header
                headerStyle={styles.searchHeaderContainer}
                component={
                    <SearchBarComponent
                        onChangeText={onChangeSearchText}
                        value={searchText}
                    />
                }
            />
            <FlatList
                keyboardDismissMode="on-drag"
                data={searchResults.length > 0 ? searchResults.sort((a, b) => a.name > b.name) : contactLists.sort((a, b) => a.name > b.name)}
                keyExtractor={(item, index) => 'prop' + index}
                renderItem={({ item }) => (
                    <ChatList
                        listStyle={styles.contactList}
                        profileSize={35}
                        showRight={false}
                        chatItem={item}
                        title={item.name}
                        subtitle={getSingePhoneNumberFromContact(item.phoneNumbers)}
                        onPress={goToSingleChatScreen.bind(this, item)}
                    />
                )}
            />
        </Modal>
    )
}

export default AddChatScreen
