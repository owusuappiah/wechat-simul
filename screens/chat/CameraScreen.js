import React, { useState, useEffect } from 'react'
import { Animated, Dimensions, SafeAreaView } from 'react-native'
import { Modal, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { NavButton } from '../../components/AnHeader'
import { IconCameraCancel, IconClose, IconSwitchCamera } from '../../components/Icons'
import { Colors, DefaultCss, FontBold, Sizes } from '../../css/DefaultsCss'
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler'


const buttonSize = 36
const c = Colors
const s = Sizes
const ringSize = 80
const buttonColor = c.white

const recordingLimit = 15


const CameraScreen = ({ onCancel, cameraEnabled, onCaptureComplete }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [CameraIsReady, setCameraIsReady] = useState(false)
    const [type, setType] = useState(Camera.Constants.Type.back);


    const cameraRef = React.useRef(null)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const isNotPermitted = hasPermission === false
    const isPermissionUnknown = hasPermission === null

    const checkCameraReadiness = () => {
        console.log("reday !!")
        setCameraIsReady(true)
    }

    const takePhoto = async () => {
        if (cameraRef) {
            let photo = await cameraRef.current.takePictureAsync({
                base64: false
            });
            onCaptureCompleteCalled({captureType: "img", image: photo})
            console.log("PHoooooo", photo)
        }
    }

    const takeVideo = async () => {
        console.log("Taking...")
        if (cameraRef) {
            let video = await cameraRef.current.recordAsync({
                maxDuration: recordingLimit,
                base64: true
            });
            // console.log("vvv", video)
            onCaptureCompleteCalled({captureType: "vid", video: video})
        }
    }


    const stopVideo = async () => {
        console.log("Stooped...")
        if (cameraRef) {
            let video = await cameraRef.current.stopRecording();
        }
    }

    const onCaptureCompleteCalled = ({captureType, video, image})=> {
        const mediaObject = {
            mediaType: captureType,
            video: video,
            image: image 
        }
        onCaptureComplete(mediaObject)
        // onCancel()
    }

    return (
        <Modal visible={cameraEnabled} animationType="slide" style={styles.modal}>

            <View style={styles.container}>
                {
                    isNotPermitted ?
                        <View style={styles.messageBox}>
                            <View><IconCameraCancel color={buttonColor} size={50} /></View>
                            <View style={styles.message}>
                                <Text style={styles.messageText}>No access to camera</Text>
                            </View>
                            <Btn icon={<IconClose color={buttonColor} size={buttonSize} />} />
                        </View>
                        : null
                }
                {
                    isPermissionUnknown ? null :
                        <Camera ref={cameraRef} onCameraReady={checkCameraReadiness} style={styles.camera} type={type}>

                        </Camera>
                }
            </View>

            {
                isNotPermitted ? null :
                    <SafeAreaView style={styles.safe}>
                        <View style={styles.actionContainer}>
                            <Btn onPress={onCancel} icon={<IconClose color={buttonColor} size={buttonSize} />} />
                            {
                                CameraIsReady ?
                                    <React.Fragment>
                                        <Shutter onPress={takePhoto} onLongPress={takeVideo} onPressOut={stopVideo} onCancel={onCancel} />
                                        <Btn
                                            onPress={() => {
                                                setType(
                                                    type === Camera.Constants.Type.back
                                                        ? Camera.Constants.Type.front
                                                        : Camera.Constants.Type.back
                                                );
                                            }}
                                            icon={<IconSwitchCamera color={buttonColor} size={buttonSize} />}
                                        />
                                    </React.Fragment>
                                    : null
                            }
                        </View>
                        <View style={styles.note}>
                            {
                                CameraIsReady ?
                                    <Text style={styles.noteText}>Hold for video, tap for photo</Text>
                                    : null
                            }
                        </View>
                    </SafeAreaView>
            }


        </Modal>
    )
}

const Shutter = ({ onPress, onLongPress, onPressOut, onCancel }) => {

    const countDownLimit = recordingLimit * 1000

    const [longPressDetected, setLongPressDetected] = useState(false)
    const [countDown, setCountDown] = useState(recordingLimit)

    const scaleAnim = React.useRef(new Animated.Value(1)).current;
    const transformYAnim = React.useRef(new Animated.Value(0)).current;
    const opacityAnim = React.useRef(new Animated.Value(0)).current;

    const buttonRef = React.useRef(null)



    const scaleIn = () => {
        console.log("Should slidin o")
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(scaleAnim, {
            toValue: 1.4,
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",
        }).start();
    };

    const slideIn = () => {
        console.log("Should slidin o")
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(transformYAnim, {
            toValue: -(Dimensions.get("window").height) + 280,
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",
        }).start();
    };


    const opacityIn = () => {
        console.log("Should slidin o")
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",
        }).start();
    };


    let interval;
    let timeout;

    const onLongPressPressed = () => {
        setLongPressDetected(true)
        scaleIn()
        slideIn()
        opacityIn()
        onLongPress()
    }

    const onPressOutPressed = () => {
        if (longPressDetected) {
            onPressOut()
            // onCancel()
        }
    }

    const timerRun = () => {

    }

    useEffect(() => {
        if (longPressDetected) {
            interval = setInterval(() => {
                setCountDown(countDown => countDown - 1)
            }, 1000);
            timeout = setTimeout(() => {
                onPressOutPressed()
                clearTimeout(timeout)
                clearInterval(interval)
            }, countDownLimit);
        }
        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [longPressDetected])

    return (
        <TouchableOpacity ref={buttonRef} activeOpacity={0.85} onLongPress={onLongPressPressed} onPressOut={onPressOutPressed} onPress={onPress}>
            <Animated.View style={[
                styles.ring,
                longPressDetected ? styles.record : null,
                {
                    transform: [
                        {
                            scale: scaleAnim
                        }
                    ]
                }
            ]}>
                <View style={[styles.ring, styles.insideRing]}></View>
                {
                    longPressDetected ?
                        <Animated.View style={[
                            styles.ring,
                            styles.insideRecordRiing,
                        ]}>

                        </Animated.View>
                        : null
                }
            </Animated.View>
            <Animated.View style={[
                styles.timerBox,
                {
                    opacity: opacityAnim,
                    transform: [
                        {
                            translateY: transformYAnim
                        }
                    ],
                }
            ]}>

                <View style={styles.timerContent}>
                    <Text style={styles.timer}>00:{countDown}</Text>
                </View>

            </Animated.View>
        </TouchableOpacity>
    )
}


const Btn = ({ icon, onPress }) => {
    return (
        <NavButton onPress={onPress} buttonStyle={styles.button} component={icon} />
    )
}


const styles = StyleSheet.create({
    modal: {
        // flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: c.black
    },
    camera: {
        flex: 1
    },
    safe: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        // backgroundColor: c.black
    },
    actionContainer: {
        height: 120,
        // backgroundColor: Colors.blue,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ring: {
        width: ringSize,
        height: ringSize,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: c.white,
        justifyContent: "center",
        alignItems: "center",
        ...DefaultCss.shadow,
        position: "relative"
    },
    insideRing: {
        width: ringSize - 20,
        height: ringSize - 20,
        borderWidth: 4
    },
    record: {
        borderColor: c.danger
    },
    insideRecordRiing: {
        borderColor: c.danger,
        position: "absolute",
        width: 30,
        height: 30,
        backgroundColor: c.danger,
        opacity: 0.8,
        // transform: [
        //     {
        //         scale: 4
        //     }
        // ]
    },
    button: {
        padding: s.paddingHorizontal,
        ...DefaultCss.shadow
    },
    note: {
        // backgroundColor: c.black,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    noteText: {
        textAlign: "center",
        fontFamily: FontBold,
        color: c.white,
        fontSize: s.fontSize - 4
    },
    messageBox: {
        marginTop: Dimensions.get("window").height / 3,
        alignItems: "center",
    },
    message: {
        marginTop: s.paddingHorizontal
    },
    messageText: {
        fontSize: s.fontSize,
        color: c.white,
        textAlign: "center"
    },
    timerBox: {
        right: 0,
        left: 0,
        height: 30,
        position: "absolute",
        transform: [
            {
                translateY: -(Dimensions.get("window").height) + 280
                // translateY: (Dimensions.get("window").height) 
            }
        ],
        alignItems: "center"
    },
    timerContent: {
        backgroundColor: c.white,
        height: "100%",
        width: 120,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        ...DefaultCss.shadow
    },
    timer: {
        fontSize: s.fontSize + 10,
        textAlign: "center",
        fontFamily: FontBold
    }
})

export default CameraScreen
