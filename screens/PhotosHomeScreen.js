import React, { useState, useMemo } from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import FancyHeader, { AnimateHeader, NavButton } from '../components/FancyHeader'
import { IconAdd } from '../components/Icons'
import PhotoFeedCard from '../components/PhotoFeedCard'
import { Colors, DefaultCss } from '../css/DefaultsCss'
import PhotosCss from '../css/PhotosCss'


const styles = PhotosCss

const PhotosHomeScreen = () => {

    const ah = AnimateHeader()

    const [data, setData] = useState([
        {
            id: "fsdf-sdafd-ads-as",
            username: "owusu_essel",
            name: "Owusu Appiah",
            mediaHeight: 340,
            mediaWidth: 500,
            mediaUrl: "https://tse1-mm.cn.bing.net/th/id/OIP.zqQsWzAcySXRRWotUWuFWQHaLG?pid=ImgDet&rs=1",
            description: "this is the best one yet.",
            verified: true
        },
        {
            id: "fsdf-sdaf-ads-as",
            username: "owusu_essel",
            name: "Owusu Appiah",
            mediaHeight: 440,
            mediaWidth: 600,
            mediaUrl: "https://th.bing.com/th/id/R82997ab4f405a36ecc8d78a34a5ea32a?rik=XVu8jDi6cHu5jg&riu=http%3a%2f%2fi.mdel.net%2fmdx%2fi%2f2015%2f02%2fLeilaNdaNYMModels5514.jpg&ehk=myKQ4OceI3edKWlwaU%2biG31zKHT6QPkGkKxscKJebQ0%3d&risl=&pid=ImgRaw",
            description: null,
            verified: false
        },
        {
            id: "fsdf-sssdaf-ads-as",
            username: "owusu_essel",
            name: "Owusu Appiah",
            mediaHeight: 440,
            mediaWidth: 600,
            mediaUrl: "https://tse1-mm.cn.bing.net/th/id/OIP.f0fByZgaVNy5sqQnk9_7owHaNK?pid=ImgDet&rs=1",
            description: 'You may be this oneday',
            verified: true
        },
    ])

    const DATA = useMemo(() => data, [data])

    const onListScroll = (e) => {
        let offset = 0;
        var currentOffset = e.nativeEvent.contentOffset.y;
        var direction = currentOffset > offset ? 'down' : 'up';
        offset = currentOffset;
        console.log(direction);
        ah.callAnimation(e)
    }



    return (
        <View style={[DefaultCss.container, styles.container]}>
            <FancyHeader
                title={"Purrps"}
                headerBorderBottom={ah.headerBorderBottom}
                titleStyle={{ textTransform: "uppercase" }}
                HeaderRightComponent={<AddButon />}
            />
            <FlatList
                style={styles.listContainer}
                showsVerticalScrollIndicator={false}
                onScroll={onListScroll}
                scrollEventThrottle={16}
                keyExtractor={(item) => item.id}
                data={DATA}
                renderItem={({ item }) => {
                    const { name, username, mediaHeight, mediaWidth, mediaUrl, description, verified } = item
                    return (
                        <PhotoFeedCard
                            name={name}
                            username={username}
                            mediaHeight={mediaHeight}
                            mediaWidth={mediaWidth}
                            mediaUrl={mediaUrl}
                            description={description}
                            verified={verified}
                        />
                    )
                }}
            />
        </View>
    )
}


const AddButon = () => {
    return (
        <NavButton component={<IconAdd color={Colors.blue} />} />
    )
}

export default PhotosHomeScreen
