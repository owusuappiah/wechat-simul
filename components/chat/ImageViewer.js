import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import { Dimensions } from 'react-native'
import { SafeAreaView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native'
import { View, Text } from 'react-native'
import Animated from 'react-native-reanimated'
import { ChatDateHistory, dateTimeFancy } from '../../controllers/Js'
import { Colors } from '../../css/DefaultsCss'
import MediaCss from '../../css/MediaCss'
import { NavButton } from '../AnHeader'
import Header from '../Header'
import { IconClose, IconDelete, IconDocument, IconFavourite, IconShare } from '../Icons'
import ImageViewer from 'react-native-image-zoom-viewer';

const styles = MediaCss

export const ImageViewerFunc = () => {
    return {
        component: () => <ImageViewer />
    }
}

const ImageViewerComponent = ({ mediaObject, onCancel }) => {

    const [EditorVisible, setEditorVisible] = useState(true)

    const {
        image_src,
        date,
        width,
        height
    } = mediaObject

    // const mediaWidth = width
    const mediaWidth = Dimensions.get("window").width / width
    const mediaHeight = mediaWidth * height



    const images = [
        {
            // Simplest usage.
            url: image_src,

            width: width,
            height: height
        }
    ]

    const toggleEditorVisibility = () => {
        // alert("ass")
        setEditorVisible(!(EditorVisible))
    }

    return (
        <Animated.View style={[styles.container, styles.imageContainer]}>
            <TouchableWithoutFeedback onPress={toggleEditorVisibility}>
                <Animated.View style={[styles.media, EditorVisible ? { backgroundColor: Colors.white } : null]}>
                    {/* <Image source={{ uri: image_src }} style={[styles.image, { height: mediaHeight }]} resizeMode="contain" /> */}
                    <ImageViewer
                        onClick={toggleEditorVisibility}
                        imageUrls={images}
                        onSwipeDown={onCancel}
                        enableSwipeDown={true}
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
            {
                EditorVisible ?
                    <View pointerEvents="none" style={styles.cover}>
                        <Header
                            onBackButtonPressed={onCancel}
                            backButtonIcon={<IconClose color={Colors.blue} />}
                            // border={false}
                            headerTitle={() => <Head title={"You"} subtitle={ChatDateHistory(date)} />}
                        />
                        {/* <TouchableWithoutFeedback onPress={toggleEditorVisibility} style={{ flex: 1 }}>
                            <View pointerEvents="none" style={{ flex: 1 }}></View>
                        </TouchableWithoutFeedback> */}
                        <SafeAreaView style={styles.safe}>
                            <View style={styles.actionBar}>
                                <Btn icon={<IconShare color={Colors.blue} />} />
                                <Btn icon={<IconFavourite color={Colors.blue} />} />
                                <Btn icon={<IconDelete color={Colors.blue} />} />
                            </View>
                        </SafeAreaView>
                    </View>
                    : null
            }
        </Animated.View>
    )
}

 export const Btn = ({ icon, onPress }) => {
    return (
        <NavButton buttonStyle={styles.actionButton} component={icon} onPress={onPress} />
    )
}


const Head = ({ title, subtitle }) => {
    return (
        <View style={styles.head}>
            <Text style={styles.headTitle}>{title}</Text>
            <Text style={styles.headSubTitle}>{subtitle}</Text>
        </View>
    )
}

export default ImageViewerComponent
