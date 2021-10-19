import React from 'react'
import { Avatar } from 'react-native-elements'

function MyAvatar({ imageLink, size = 30 }) {
    return (
        <Avatar
            size={size}
            rounded={true}
            source={{ uri: imageLink }}
            icon={{ name: 'user-circle', type: "font-awesome", size: size, color: 'gray' }}
        />
    )
}

export default MyAvatar
