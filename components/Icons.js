import React from 'react'
import {
    AntDesign, FontAwesome5, SimpleLineIcons, FontAwesome, Entypo,
    Fontisto, Ionicons, MaterialCommunityIcons, Octicons, Feather
}
    from '@expo/vector-icons';
import { Colors, Sizes } from '../css/DefaultsCss';


const cl = Colors.lightColor
const sz = Sizes.iconSize

export const IconChat = ({ size = sz, color = cl }) => <Ionicons name="md-chatbubbles-outline" size={size} color={color} />
export const IconHome = ({ size = sz, color = cl }) => <AntDesign name="home" size={size} color={color} />
export const IconNotifications = ({ size = sz, color = cl }) => <SimpleLineIcons name="bell" size={size} color={color} />
export const IconAccount = ({ size = sz, color = cl }) => <FontAwesome5 name="user-circle" size={size} color={color} />

export const IconHomeActive = ({ size = sz, color = cl }) => <Entypo name="home" size={size} color={color} />
export const IconNotificationsActive = ({ size = sz, color = cl }) => <FontAwesome name="bell" size={size} color={color} />
export const IconAccountActive = ({ size = sz, color = cl }) => <FontAwesome name="user-circle" size={size} color={color} />
export const IconChatActive = ({ size = sz, color = cl }) => <Ionicons name="md-chatbubbles-sharp" size={size} color={color} />

export const IconBackButton = ({ color = cl, size = sz }) => <Fontisto name="angle-left" size={size} color={color} />


export const IconAdd = ({ color = cl, size = sz }) => <Ionicons name="add" size={size} color={color} />
export const IconMenu = ({ color = cl, size = sz }) => <Ionicons name="ellipsis-horizontal-outline" size={size} color={color} />


export const IconComment = ({ color = cl, size = sz }) => <Fontisto name="comment" size={size} color={color} />
export const IconLike = ({ color = cl, size = sz }) => <AntDesign name="like2" size={size} color={color} />
export const IconTip = ({ color = cl, size = sz }) => <MaterialCommunityIcons name="heart-plus-outline" size={size} color={color} />

export const IconVerified = ({ color = cl, size = sz }) => <Octicons name="verified" size={size} color={color} />
export const IconClose = ({ color = cl, size = sz }) => <Ionicons name="close" size={size} color={color} />


export const IconPlus = ({ color = cl, size = sz }) => <Feather name="plus" size={size} color={color} />
export const IconCamera = ({ color = cl, size = sz }) => <Feather name="camera" size={size} color={color} />
export const IconMic = ({ color = cl, size = sz }) => <MaterialCommunityIcons name="microphone-outline" size={size} color={color} />
export const IconSend = ({ color = cl, size = sz }) => <Ionicons name="md-send-outline" size={size} color={color} />

export const IconMoney = ({ color = cl, size = sz }) => <MaterialCommunityIcons name="transfer-right" size={size} color={color} />



export const IconCheck= ({ color = cl, size = sz }) => <Ionicons name="checkmark" size={size} color={color} />
export const IconCheck2 = ({ color = cl, size = sz }) => <Ionicons name="checkmark-done" size={size} color={color} />

export const IconAddChat = ({ color = cl, size = sz }) => <Feather name="edit" size={size} color={color} />
export const IconSearch = ({ color = cl, size = sz }) => <Ionicons name="ios-search-outline" size={size} color={color} />

export const IconDocument = ({ color = cl, size = sz }) => <Entypo name="documents" size={size} color={color} />
// export const IconDocument = ({ color = cl, size = sz }) => <Ionicons name="md-document-text-outline" size={size} color={color} />
export const IconAlbum = ({ color = cl, size = sz }) => <Ionicons name="image-outline" size={size} color={color} />
export const IconContact = ({ color = cl, size = sz }) => <AntDesign name="contacts" size={size} color={color} />
export const IconVideo= ({ color = cl, size = sz }) => <Feather name="video" size={size} color={color} />
export const IconLocation= ({ color = cl, size = sz }) => <Ionicons name="md-location-outline" size={size} color={color} />

export const IconCedis = ({ color = cl, size = sz }) => <FontAwesome name="dollar" size={size} color={color} />


export const IconCheckSolid = ({ color = cl, size = sz }) => <Ionicons name="checkmark-circle-sharp" size={size} color={color} />
export const IconReject = ({ color = cl, size = sz }) => <FontAwesome name="ban" size={size} color={color} />


export const IconSent = ({ color = cl, size = sz }) => <MaterialCommunityIcons name="transfer-right" size={size} color={color} />
export const IconAccept = ({ color = cl, size = sz }) => <MaterialCommunityIcons name="transfer-down" size={size} color={color} />
export const IconNote = ({ color = cl, size = sz }) => <MaterialCommunityIcons name="note-text-outline" size={size} color={color} />


export const IconDelete = ({ color = cl, size = sz }) => <AntDesign name="delete" size={size} color={color} />
export const IconShare = ({ color = cl, size = sz }) => <Feather name="share" size={size} color={color} />
export const IconFavourite = ({ color = cl, size = sz }) => <AntDesign name="staro" size={size} color={color} />

export const IconSwitchCamera = ({ color = cl, size = sz }) => <Ionicons name="ios-camera-reverse-outline" size={size} color={color} />
export const IconCameraShutter = ({ color = cl, size = sz }) => <AntDesign name="staro" size={size} color={color} />
export const IconCameraCancel = ({ color = cl, size = sz }) => <Feather name="camera-off" size={size} color={color} />

export const IconStop = ({ color = cl, size = sz }) => <Feather name="stop-circle" size={size} color={color} />
export const IconPlay = ({ color = cl, size = sz }) => <Ionicons name="play" size={size} color={color} />
export const IconPause = ({ color = cl, size = sz }) => <Ionicons name="ios-pause" size={size} color={color} />
export const IconMusic = ({ color = cl, size = sz }) => <MaterialCommunityIcons name="music-circle" size={size} color={color} />
