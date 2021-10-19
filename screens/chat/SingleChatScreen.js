import { BlurView } from 'expo-blur'
import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { Animated, SectionList } from 'react-native'
import { FlatList } from 'react-native'
import { View, KeyboardAvoidingView, SafeAreaView, TextInput, Text, Platform, Keyboard } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { ActionButton } from '../../components/Button'
import { ChatThread, SectionThread } from '../../components/chat/ChatThread'
import Header from '../../components/Header'
import { IconCamera, IconMic, IconMoney, IconPlus, IconSend, IconStop } from '../../components/Icons'
import { ChatDateHistory, isNull } from '../../controllers/Js'
import ChatCss from '../../css/ChatCss'
import { Colors } from '../../css/DefaultsCss'
import _, { map } from 'underscore';
import { useNavigation, useRoute } from '@react-navigation/core'
import MyAvatar from '../../components/MyAvatar'
import ActionSheetComponent from '../../components/ActionSheetComponent'
import { Navs } from '../../models/Variables'
import TransferToChatContactScreen from './TransferToChatContactScreen'
import useAlbumPickerCntroller from '../../controllers/ui/AlbumPickerCntroller'
import ImageViewerComponent from '../../components/chat/ImageViewer'
import VideoPlayerComponent from '../../components/chat/VideoPlayer'
import CameraScreen from './CameraScreen'
import MediaEditorScreen from './MediaEditorScreen'
import PlayAudio from '../../controllers/PlayAudio'
import { RecordingAnimation } from '../../components/Animations'
import RecordingView from './RecordingView'
// import { RecordingAnimation } from '../../components/Animations'

const styles = ChatCss

const buttonColor = Colors.blue
const buttonSize = 23


const SingleChatScreen = () => {

    const route = useRoute()
    const nav = useNavigation()


    const [chatMessages, setChatMessages] = useState([])
    const [textMessage, setTextMessage] = useState('')
    const [editorActionVisible, setEditorActionVisible] = useState(false)
    const [transferScreenVisible, setTransferScreenVisible] = useState(false)

    const [imageMediaObject, setImageMediaObject] = useState({})
    const [videoMediaObject, setVideoMediaObject] = useState({})
    const [cameraEnabled, setCameraEnabled] = useState(false)
    const [recordingEnabled, setRecordingEnabled] = useState(false)

    const [mediaObjectForPreview, setMediaObjectForPreview] = useState(null)

    const albumPicker = useAlbumPickerCntroller()

    const contactDetail = route.params.contactDetail

    const onChangeTextArea = (text) => {
        setTextMessage(text)
    }

    const toggleEditorActionVisibility = () => {
        Keyboard.dismiss()
        setEditorActionVisible(true)
    }


    const scrollViewRef = React.useRef()

    const istextEmpty = textMessage == ''

    const generateData = () => {
        let arr = []
        for (let index = 0; index < 40; index++) {
            let sender = "me"
            let date = new Date()
            if ((index % 2) > 0) {
                sender = "you"
            }

            if (index < 30) {
                date = new Date('2020-08-04T11:07:43.276Z')
            }
            arr.push({
                msg_type: 1,
                sender: sender,
                message: 'hello my world ' + (index + 1),
                date: date,
                hasRead: true,
                msg_id: 'jhsdjsf' + index
            })
        }
        return arr
    }

    const hasSent = () => {
        const sendAudioFile = require('../../assets/audio/send-audio.mp3')
        PlayAudio(sendAudioFile, { shouldPlay: true })
    }


    const sendTextMessage = () => {
        const chatMessage = {
            sender: 'me',
            message: textMessage,
            date: new Date(),
            msg_type: 1,
            msg_id: 'jhsdjsf' + chatMessages.length

        }
        setChatMessages([...chatMessages, chatMessage])
        setTextMessage('')
        hasSent()
    }


    const CHAT_MESSAGES = useMemo(() => chatMessages, [chatMessages])

    const initialState = (<Header
        headerTitle={() => <Headercard contactDetail={contactDetail} />}
        headerRight={() => <Button onPress={onTranferPress} icon={<IconMoney size={buttonSize + 3} color={buttonColor} />} />}
    />)
    const headerReducer = (state, action) => {
        switch (action.type) {
            case 1:
                return initialState
            default:
                return null
        }
    }

    const [state, dispatch] = React.useReducer(headerReducer, initialState)


    function aggregate(collection, propertyNames, iteratee) {
        function category(obj) {
            return _.chain(obj).pick(propertyNames).values().join(' ');
        }
        function summarize(group) {
            return _.chain(group).first().pick(propertyNames)
                .extend(_.reduce(group, iteratee)).value();
        }
        return _.chain(collection).groupBy(category).map(summarize).value();
    }

    const onTranferPress = () => {
        // nav.navigate(Navs.transferToChatScreen, {contactDetail: contactDetail})
        setTransferScreenVisible(true)
    }


    const closeActionSheet = () => {
        setEditorActionVisible(false)
    }



    const onSendTransferPress = (transferObject = {}) => {
        const prepareTransferObject = {
            "hasRead": false,
            "trans_id": "jhsdjsf323" + chatMessages.length,
            "msg_type": 2,
            "sender": "me",
            receiver: contactDetail.phone,
            receiverHasAccepted: null,
            ...transferObject
        }
        closeActionSheet()
        setChatMessages([...chatMessages, prepareTransferObject])
        hasSent()
    }


    const sendImageMessage = (uri, height, width) => {
        const obj = {
            "date": "2020-04-04T11:07:43.276Z",
            "hasRead": true,
            "message": "hello my world 33",
            "msg_id": "jhsdjsf3sd2" + chatMessages.length,
            "msg_type": 3,
            "sender": "me",
            height: height,
            width: width,
            image_src: uri
        }
        setChatMessages([...chatMessages, obj])
        hasSent()
    }

    const sendVideoMessage = (uri, height, width) => {
        const obj = {
            "date": "2020-04-04T11:07:43.276Z",
            "hasRead": true,
            "message": "hello my world 33",
            "msg_id": "jhsdjsf3sd2" + chatMessages.length,
            "msg_type": 4,
            "sender": "me",
            height: height,
            width: width,
            video_src: uri
        }
        setChatMessages([...chatMessages, obj])
        hasSent()
    }

    const sendAudioMessage = (audio_src) => {
        const obj = {
            "date": "2020-04-04T11:07:43.276Z",
            "hasRead": true,
            "message": "hello my world 3hgjhg3" ,
            "msg_id": "jhsdjsf3sd2"+ chatMessages.length,
            "msg_type": 5,
            "sender": "me",
            duration: 3,
            audio_src: audio_src
        }
        setChatMessages([...chatMessages, obj])
        hasSent()
    }



    const onTransferThreadPress = (transferObject = {}) => {
        const TO = {
            ...transferObject,
            date: transferObject.date.toString()
        }
        nav.navigate(Navs.transferDetailScreen, { transferObject: TO })
    }

    const onPhotoUpload = () => {
        albumPicker.pickImage((result) => {
            const imageUri = result.uri
            console.log("ll", result)
            sendImageMessage(imageUri, result.height, result.width)
        })
        closeActionSheet()
    }

    const onVideoUpload = () => {
        albumPicker.pickVideos((result) => {
            const imageUri = result.uri
            console.log("ll", result)
            sendVideoMessage(imageUri, result.height, result.width)
        })
        closeActionSheet()
    }


    const openImageViewer = (imgObj) => {
        // alert('j')
        setImageMediaObject(imgObj)
    }

    const openVideoPlayer = (vidObj) => {
        setVideoMediaObject(vidObj)
    }

    const enableCamera = () => {
        setCameraEnabled(true)
    }

    const onCaptureComplete = (mediaObjectParam) => {
        console.log(mediaObjectParam)
        setMediaObjectForPreview(mediaObjectParam)
        setCameraEnabled(false)
    }


    const AcSheetComponent = useCallback(
        () => {
            return (
                editorActionVisible ?
                    <ActionSheetComponent
                        visible={editorActionVisible}
                        onCancel={() => setEditorActionVisible(false)}
                        onTranferPress={onTranferPress}
                        onAlbumPress={onPhotoUpload}
                        onVideoUpload={onVideoUpload}
                        onCameraPress={enableCamera}
                    />
                    : null
            )
        },
        [editorActionVisible],
    )

    return (
        <React.Fragment>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                {state}
                <FlatList
                    keyboardDismissMode="on-drag"
                    keyExtractor={(item) => item.msg_id}
                    data={CHAT_MESSAGES}
                    renderItem={({ item }) => {
                        return (
                            <ChatThread messageObject={item}
                                onTransferThreadPress={onTransferThreadPress.bind(this, item)}
                                onImagePress={openImageViewer.bind(this, item)}
                                onVideoThreadPress={openVideoPlayer.bind(this, item)}
                            />
                            // <SectionThread messageArray={item.messages} title={item.date} />
                        )
                    }}
                    ref={scrollViewRef}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        scrollViewRef.current.scrollToEnd({ animated: true });
                    }}
                    ListFooterComponent={<View style={{ height: 20 }}></View>}
                />

                <SafeAreaView style={styles.editorContainer}>
                    <View style={styles.editor}>
                        <View style={styles.edleftSide}>
                            <Button onPress={toggleEditorActionVisibility} icon={<IconPlus size={buttonSize} color={buttonColor} />} />
                        </View>
                        <View style={[styles.textAreaContainer, istextEmpty ? null : styles.textAreaContainerExpand]}>
                            <TextInput
                                onChangeText={onChangeTextArea}
                                value={textMessage}
                                style={styles.textArea}
                                multiline={true}
                                numberOfLines={5}
                            />
                        </View>
                        <View style={styles.edRightSide}>
                            {
                                istextEmpty ?
                                    <React.Fragment>
                                        <Button onPress={enableCamera} icon={<IconCamera size={buttonSize} color={buttonColor} />} />
                                        <Button onPress={() => setRecordingEnabled(true)} icon={<IconMic size={buttonSize} color={buttonColor} />} />
                                    </React.Fragment>
                                    :
                                    <SendButton onPress={sendTextMessage} icon={<IconPlus size={buttonSize} color={buttonColor} />} />
                            }
                        </View>
                        {
                            recordingEnabled ?
                                <RecordingView
                                    recordingEnabled={recordingEnabled}
                                    sendAudioMessage={sendAudioMessage}
                                    onCancel={() => setRecordingEnabled(false)}
                                />
                                : null
                        }
                    </View>
                </SafeAreaView>
                <AcSheetComponent />
                {/* {ImageViewerFunc().component()} */}

                {
                    isNull(imageMediaObject.image_src) ? null :
                        <ImageViewerComponent onCancel={() => setImageMediaObject({})} mediaObject={imageMediaObject} />
                }
                {
                    isNull(videoMediaObject.video_src) ? null :
                        <VideoPlayerComponent onCancel={() => setVideoMediaObject({})} mediaObject={videoMediaObject} />
                }
            </KeyboardAvoidingView>
            {transferScreenVisible ?
                <TransferToChatContactScreen
                    contactDetail={contactDetail}
                    onCancel={() => setTransferScreenVisible(false)}
                    onSendTransferPress={onSendTransferPress}
                />
                : null
            }
            {
                cameraEnabled ?
                    <CameraScreen
                        cameraEnabled={cameraEnabled}
                        onCancel={() => setCameraEnabled(false)}
                        onCaptureComplete={onCaptureComplete}
                    />
                    : null
            }
            {
                isNull(mediaObjectForPreview) ? null :
                    <MediaEditorScreen
                        mediaObject={mediaObjectForPreview}
                        onCancel={() => setMediaObjectForPreview(null)}
                        onSendImage={sendImageMessage}
                        onSendVideo={sendVideoMessage}
                    />
            }
        </React.Fragment>
    )
}



export const Button = ({ icon, onPress, disabled, text, style }) => {
    return (
        <ActionButton style={[styles.editorButton, style]} disabled={disabled} onPress={onPress} component={icon} />
    )
}

export const SendButton = ({ onPress }) => {
    return (
        <Button onPress={onPress} icon={<IconSend size={buttonSize} color={Colors.white} />} style={[styles.edSolidButton, styles.sendButton]} />
    )
}

const Headercard = ({ contactDetail = {}, lastSeen }) => {
    const {
        name,
        imageLink
    } = contactDetail

    const AV = useCallback(
        () => {
            return <MyAvatar imageLink={imageLink} />
        },
        [],
    )

    return (
        <ListItem containerStyle={styles.headerCardContainer}>
            <AV />
            <ListItem.Content>
                <ListItem.Title numberOfLines={1} style={styles.headerCardTitle}>{name}</ListItem.Title>
                <ListItem.Subtitle style={styles.headerCardSubTitle}>Last seen, yesterday</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default SingleChatScreen
