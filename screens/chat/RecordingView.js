import React from 'react'
import { View, Text, Animated } from 'react-native'
import { RecordingAnimation } from '../../components/Animations'
import { Audio } from 'expo-av';
import { IconPlus, IconSend, IconStop } from '../../components/Icons'
import ChatCss from '../../css/ChatCss'
import { Colors } from '../../css/DefaultsCss'
import { ActionButton } from '../../components/Button';

const styles = ChatCss
const buttonSize = 23
const buttonColor = Colors.blue

const RecordingView = ({ sendAudioMessage, onCancel }) => {
    const [recording, setRecording] = React.useState();

    const transformAnim = React.useRef(new Animated.Value(70)).current;
    const fadeAnim = React.useRef(new Animated.Value(0)).current;


    const RECORDING_OPTIONS_PRESET_HIGH_QUALITY = (audio)=> ({
        android: {
            extension: '.m4a',
            outputFormat: audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
            audioEncoder: audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
        },
        ios: {
            extension: '.caf',
            audioQuality: audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
        },
    });


    async function startRecording() {
        try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log('Starting recording..');
            const recording = new Audio.Recording(RECORDING_OPTIONS_PRESET_HIGH_QUALITY(Audio));
            await recording.prepareToRecordAsync();
            await recording.startAsync();
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording(stopState) {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        if (stopState === "send") {
            const uri = recording.getURI();
            console.log('Recording stopped and stored at', uri);
            sendAudioMessage(uri)
        }
    }

    const slideIn = () => {
        console.log("Should slidin o")
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(transformAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",

        }).start();
    };


    const fadeIn = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            extrapolate: "clamp",
        }).start();
    };


    const stopButtonPressed = () => {
        stopRecording()
        onCancel()
    }

    const sendAudioMessagePress = () => {
        stopRecording("send")
        onCancel()
    }

    React.useEffect(() => {
        fadeIn()
        slideIn()
        startRecording()
        return () => {
        }
    }, [])

    return (
        <Animated.View style={[
            styles.micFeedbackContainer,
            {
                opacity: fadeAnim
            }
        ]}>
            <View style={styles.micActions}>
                <Animated.View style={[
                    styles.micRecordingAnimCompo,
                    {
                        transform: [
                            {
                                translateY: transformAnim
                            }
                        ]
                    }
                ]}><RecordingAnimation style={styles.micRecordingAnim} /></Animated.View>
                <Button onPress={stopButtonPressed} icon={<IconStop size={buttonSize + 3} color={buttonColor} />} />
                <View style={styles.micTimer}>
                    <Text style={styles.micTimerText}>0:00</Text>
                </View>
                <SendButton onPress={sendAudioMessagePress} icon={<IconPlus size={buttonSize} color={buttonColor} />} />
            </View>
        </Animated.View>
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


export default RecordingView
