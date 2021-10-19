import React from 'react'
import { SafeAreaView } from 'react-native'
import { Modal } from 'react-native'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImageViewer from 'react-native-image-zoom-viewer'
import { IconClose, IconSend } from '../../components/Icons'
import { Colors } from '../../css/DefaultsCss'
import MediaCss, { MediaEditorCss } from '../../css/MediaCss'
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from 'react-native'


const styles = { ...MediaCss, ...MediaEditorCss }

const MediaEditorScreen = ({ mediaObject, onCancel, onSendImage, onSendVideo }) => {

    const {
        mediaType,
        video,
        image
    } = mediaObject



    let mediaWidth = null
    let mediaHeight = null
    if (mediaType === "vid") {
        // mediaWidth = Dimensions.get("window").width / video.width
        // mediaHeight = mediaWidth * video.height
        mediaWidth = "100%"
        mediaHeight = 200
    }

    const videoPlayer = React.useRef(null);
    const [status, setStatus] = React.useState({});

    let images = [];
    if (mediaType === "img") {
        images = [
            {
                url: image.uri,
                height: image.height,
                width: image.width
            }
        ]
    }

    const sendImagePress = () => {
        onCancel()
        onSendImage(image.uri, image.height, image.width)
    }

    const sendVideoPress = () => {
        onCancel()
        onSendVideo(video.uri, 300, "100%")
    }

    React.useEffect(() => {
        if (mediaType === "vid") {
            videoPlayer.current.playAsync()
        }
        return () => {
        }
    }, [])

    return (
        <Modal transparent={true} animationType="none">
            {
                mediaType === "img" ?
                    <React.Fragment>
                        <ImageViewer
                            imageUrls={images}
                            onSwipeDown={onCancel}
                            enableSwipeDown={true}
                            renderIndicator={() => null}
                        />
                        <View style={[styles.actionBar, styles.actionBarTwo]}>
                            <Btn onPress={onCancel} icon={<IconClose color={Colors.blue} />} />
                            <Btn onPress={sendImagePress} icon={<IconSend color={Colors.blue} />} />
                        </View>
                    </React.Fragment>
                    : null
            }
            {
                mediaType === "vid" ?
                    <React.Fragment>
                        <Video
                            ref={videoPlayer}
                            style={[styles.image, { height: mediaHeight }]}
                            source={{
                                uri: video.uri,
                            }}
                            useNativeControls={true}
                            resizeMode="contain"
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={[styles.actionBar, styles.actionBarTwo]}>
                            <Btn onPress={onCancel} icon={<IconClose color={Colors.blue} />} />
                            <Btn onPress={sendVideoPress} icon={<IconSend color={Colors.blue} />} />
                        </View>
                    </React.Fragment>

                    : null
            }
        </Modal>
    )
}

const Btn = ({ onPress, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.fancyButton}>
            {icon}
        </TouchableOpacity>
    )
}




export default MediaEditorScreen
