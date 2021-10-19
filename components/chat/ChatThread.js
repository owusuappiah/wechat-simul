import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { View, Text, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ChatDateHistory, ChatTime, parseCurrency } from '../../controllers/Js'
import ChatCss from '../../css/ChatCss'
import { Colors } from '../../css/DefaultsCss'
import { IconCheck, IconCheck2, IconCheckSolid, IconLike, IconMoney, IconMusic, IconPause, IconPlay, IconReject } from '../Icons'
import { Audio, Video } from 'expo-av';
import Slider from '@react-native-community/slider';


const styles = ChatCss

const sentReadColor = '#f7f7ff'
const hasReadColor = '#6fffe9'

const checkSize = 15

export const SectionThread = ({ messageArray = [], title }) => {
    return (
        <View>
            <Text>{ChatDateHistory(title)}</Text>
            {
                messageArray.map((a, i) => {
                    return <ChatThread messageObject={a} key={i} />
                })
            }
        </View>
    )
}

export const ChatThread = ({ messageObject, onTransferThreadPress, onImagePress, onVideoThreadPress }) => {
    const { msg_type } = messageObject
    switch (msg_type) {
        case 1:
            return <TextThread messageObject={messageObject} />
        case 2:
            return <TransferThread messageObject={messageObject} onTransferThreadPress={onTransferThreadPress} />
        case 3:
            return <ImageThread onImagePress={onImagePress} messageObject={messageObject} />
        case 4:
            return <VideoThread onVideoThreadPress={onVideoThreadPress} messageObject={messageObject} />
        case 5:
            return <AudioThread onVideoThreadPress={onVideoThreadPress} messageObject={messageObject} />
        default:
            return null
    }
}



export const TextThread = ({ messageObject = {} }) => {

    const {
        message,
        sender,
        date,
        hasRead
    } = messageObject


    const checkSender = () => {
        return sender === "me"
    }

    return (
        <View style={[styles.thread, checkSender() ? styles.authorThread : styles.receiverThread]}>
            <View style={[styles.threadContent, checkSender() ? styles.authorThreadContent : styles.receiverThreadContent]}>
                <Text style={[styles.threadText, checkSender() ? styles.authorThreadText : styles.receiverThreadText]}>
                    <Text>{message}</Text>
                </Text>
                <View style={styles.chatInfoMini}>
                    <Text style={styles.chatTime}>{ChatTime(date)}</Text>
                    {
                        hasRead ?
                            <IconCheck2 size={checkSize} color={hasReadColor} />
                            :
                            <IconCheck size={checkSize} color={sentReadColor} />
                    }
                </View>
            </View>
        </View>
    )
}

export const TransferThread = ({ messageObject = {}, onTransferThreadPress }) => {

    const {
        note,
        sender,
        date,
        hasRead,
        amount,
        currency,
        receiverHasAccepted
    } = messageObject


    const ReceierMoneyStateIconComponent = () => {
        switch (receiverHasAccepted) {
            case true:
                return {
                    IconCompo: () => <IconCheckSolid color={Colors.white} />,
                    style: {
                        backgroundColor: "#007200",
                        opacity: 0.5
                    },
                }
            case false:
                return {
                    IconCompo: () => <IconReject color={Colors.white} />,
                    style: {
                        backgroundColor: "#9c191b",
                        opacity: 0.5
                    },
                }
            default:
                return {
                    IconCompo: () => <IconMoney color={Colors.white} />,
                    style: {
                        backgroundColor: "#571089"
                    },
                }
        }
    }


    const checkSender = () => {
        return sender === "me"
    }

    return (
        <TouchableOpacity onPress={onTransferThreadPress} activeOpacity={0.6} style={[styles.thread, styles.transferThread, checkSender() ? styles.authorThread : styles.receiverThread]}>
            <View style={[styles.threadContent, checkSender() ? styles.authorThreadContent : styles.receiverThreadContent, ReceierMoneyStateIconComponent().style,]}>
                <View style={[styles.transferThreadBox]}>
                    <View style={styles.transferBoxContent}>
                        <View style={styles.transferThreadIcon}>
                            {/* <Text style={styles.transferThreadIconText}>{parseCurrency(currency).symbol}</Text> */}
                            {ReceierMoneyStateIconComponent().IconCompo()}
                        </View>
                        <View style={styles.transferAmount}>
                            <Text style={styles.transferCurrency}>{parseCurrency(currency).name}</Text>
                            <Text style={styles.transferAmountText}>{amount}</Text>
                        </View>
                    </View>
                    <Text numberOfLines={1} style={[styles.transferNoteText]}>{note}</Text>
                </View>
                <View style={[styles.chatInfoMini, styles.forBranding]}>
                    <View style={styles.transferBrand}>
                        <Text style={styles.transferBrandText}>Jixx Transfer</Text>
                    </View>
                    <View style={styles.chatInfoMini}>
                        <Text style={styles.chatTime}>{ChatTime(date)}</Text>
                        {
                            hasRead ?
                                <IconCheck2 size={checkSize} color={hasReadColor} />
                                :
                                <IconCheck size={checkSize} color={sentReadColor} />
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export const ImageThread = ({ messageObject = {}, onImagePress }) => {

    const {
        message,
        sender,
        date,
        hasRead,
        image_src
    } = messageObject


    const checkSender = () => {
        return sender === "me"
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onImagePress} style={[styles.thread, styles.mediaThread]}>
            <View style={[styles.mediaThreadContent, checkSender() ? styles.authorThreadContent : styles.receiverThreadContent, styles.mediaOverwrite]}>
                <View style={styles.media}>
                    <Image source={{ uri: image_src }} style={styles.image} resizeMode="cover" />
                </View>
                <View style={[styles.chatInfoMini, styles.mediaTChatInfo]}>
                    <Text style={styles.chatTime}>{ChatTime(date)}</Text>
                    {
                        hasRead ?
                            <IconCheck2 size={checkSize} color={hasReadColor} />
                            :
                            <IconCheck size={checkSize} color={sentReadColor} />
                    }
                </View>
            </View>

        </TouchableOpacity>
    )
}


export const VideoThread = ({ messageObject = {}, onVideoThreadPress }) => {

    const {
        message,
        sender,
        date,
        hasRead,
        video_src
    } = messageObject

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    const checkSender = () => {
        return sender === "me"
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onVideoThreadPress} style={[styles.thread, styles.mediaThread]}>
            <View style={[styles.mediaThreadContent, checkSender() ? styles.authorThreadContent : styles.receiverThreadContent, styles.mediaOverwrite]}>
                <View style={styles.media}>
                    {/* <Video
                        ref={video}
                        style={styles.image}
                        source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode="contain"
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    /> */}
                </View>
                <View style={[styles.chatInfoMini, styles.mediaTChatInfo]}>
                    <Text style={styles.chatTime}>{ChatTime(date)}</Text>
                    {
                        hasRead ?
                            <IconCheck2 size={checkSize} color={hasReadColor} />
                            :
                            <IconCheck size={checkSize} color={sentReadColor} />
                    }
                </View>
            </View>

        </TouchableOpacity>
    )
}

export const AudioThread = ({ messageObject = {} }) => {

    const {
        message,
        sender,
        date,
        hasRead,
        audio_src
    } = messageObject

    const [isPlaying, setIsPlaying] = useState(null)
    const [audioLoading, setAudioLoading] = useState(true)
    const [currentPositionValue, setCurrentPositionValue] = useState(0)

    const playbackObject = React.useMemo(() => new Audio.Sound(), []);


    async function playAudio() {
        const status = await playbackObject.getStatusAsync()

        if (!status.isLoaded) {
            await playbackObject.loadAsync({ uri: audio_src })
        }

        await playbackObject.playAsync()
    }



    async function pauseAudio() {
        const status = await playbackObject.getStatusAsync()
        if (status.isLoaded) {
            await playbackObject.pauseAsync();
        }
    }


    async function progress() {
        const status = await playbackObject.getStatusAsync()
        if (status.isPlaying) {
            console.log(status.positionMillis)
        }
    }

    console.log("rendering...")
    function pad(n, width = 150, z = 0) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }

    const minutesAndSeconds = (position) => ([
        pad(Math.floor(position / 60), 2),
        pad(position % 60, 2),
      ]);

      const seconds = (position)=> {
          const sec = (position / 150) * 1000
          return sec
      }

    useEffect(() => {
        const _onPlaybackStatusUpdate = (st) => {

            if (st.isPlaying) {
                // Update your UI for the playing state
                console.log("sweet laying")
                setIsPlaying(true)
                const currentPosition = seconds(st.positionMillis)
                console.log(currentPosition, " Current pos", st.positionMillis)
                setCurrentPositionValue(currentPosition)

            } else {
                // Update your UI for the paused state
                console.log("ass ass")
                setIsPlaying(false)
            }

            if (st.isBuffering) {
                console.log("buffering...............................")
                // setAudioLoading(true)
                // Update your UforI  the buffering state
            } else {
                // setAudioLoading(false)
            }

            if (st.didJustFinish && !st.isLooping) {
                // The player has just finished playing and will stop. Maybe you want to play something else?
                console.log('The player has just finished playinkg and will stop. Maybe you want to play something else?')
                setIsPlaying(false)
            }

        }
        playbackObject.setOnPlaybackStatusUpdate(_onPlaybackStatusUpdate)

        return () => {
        }
    }, [])


    const checkSender = () => {
        return sender === "me"
    }


    return (
        <View style={[styles.thread, checkSender() ? styles.authorThread : styles.receiverThread]}>
            <View style={[styles.threadContent, checkSender() ? styles.authorThreadContent : styles.receiverThreadContent]}>
                <View style={[styles.audioThreadContent, checkSender() ? styles.authorThreadText : styles.receiverThreadText]}>
                    <View style={styles.audioToggButtonContainer}>
                        {
                            isPlaying ?
                                <AudioButton onPress={pauseAudio} icon={<IconPause color={Colors.white} />} />
                                :
                                <AudioButton
                                    onPress={playAudio}
                                    icon={<IconPlay color={Colors.white} />} />
                        }
                    </View>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={{ width: 150, height: 30 }}
                            minimumValue={0}
                            maximumValue={150}
                            value={currentPositionValue}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="gray"
                        />
                    </View>
                    <View style={styles.audioIcon}>
                        <IconMusic size={30} color={Colors.white} />
                    </View>
                </View>
                {/* <Video
                    source={{ uri: audio_src }}
                    shouldPlay={true}
                    style={styles.videoShg}
                /> */}
                <View style={[styles.chatInfoMini, styles.forBranding, { marginTop: 0 }]}>
                    <View style={styles.transferBrand}>
                        <Text style={styles.transferBrandText}>0:28</Text>
                    </View>
                    <View style={styles.chatInfoMini}>
                        <Text style={styles.chatTime}>{ChatTime(date)}</Text>
                        {
                            hasRead ?
                                <IconCheck2 size={checkSize} color={hasReadColor} />
                                :
                                <IconCheck size={checkSize} color={sentReadColor} />
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

const AudioButton = ({ icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            {icon}
        </TouchableOpacity>
    )
}