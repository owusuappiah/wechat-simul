import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../css/DefaultsCss'
import PhotoFeedCss from '../css/PhotoFeedCss'
import { ActionButton } from './Button'
import { IconComment, IconLike, IconMenu, IconTip, IconVerified } from './Icons'
import TipModal from './TipModal'

const styles = PhotoFeedCss

const PhotoFeedCard = ({
    mediaUrl, description, username, name, date,
    mediaHeight, mediaWidth
}) => {

    const [tipModalState, setTipModalState] = useState(false)

    const onShowTip = () => {
        setTipModalState(true)
    }

    return (
        <React.Fragment>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardUserDetailContainer}>
                        <View style={styles.cardUserDetailContent}>
                            <View style={styles.cardAvatar}></View>
                            <View style={styles.cardUserInfo}>
                                <Text style={styles.cardName}>{name}</Text>
                                <View style={styles.cardVerified}><IconVerified color={Colors.blue} size={18} /></View>
                                <Text style={styles.cardSmall}>@{username}</Text>
                            </View>
                        </View>
                        <View style={styles.cardMenuButtonContainer}>
                            <TouchableOpacity>
                                <IconMenu />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.cardDescription}>
                        {
                            description ? <Text style={styles.descriptionText}>{description}</Text> : null
                        }
                    </View>
                    <View style={styles.cardMedia}>
                        <Image source={{ uri: mediaUrl }} style={styles.cardImageSize} />
                    </View>
                </View>
                <View style={styles.cardStats}>
                    <View style={styles.cardStatsView}>
                        <IconLike size={13} />
                        <Text style={styles.statsText}>12,909</Text>
                    </View>
                    <View style={styles.cardStatsView}>
                        <IconComment size={11} />
                        <Text style={styles.statsText}>1,909</Text>
                    </View>
                </View>
                <View style={styles.cardActions}>
                    <View style={styles.cardActionsButtons}>
                        <ActionButton component={<IconLike size={20} />} />
                        <ActionButton component={<IconComment size={17} />} />
                    </View>
                    <View>
                        <ActionButton
                            onPress={onShowTip}
                            style={styles.tipButton}
                            text={<Text style={styles.tipText}>Show</Text>}
                            component={<IconTip color={Colors.blue} />}
                        />
                    </View>
                </View>
            </View>
            {
                tipModalState ?
                    <TipModal
                        name={name}
                        closeModal={() => setTipModalState(false)}
                    />
                    : null
            }
        </React.Fragment>
    )
}

export default PhotoFeedCard
