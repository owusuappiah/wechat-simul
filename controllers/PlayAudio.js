import { Audio } from 'expo-av';

async function PlayAudio(source, audioOptions = {}) {
    const playbackObject = await Audio.Sound.createAsync(source,
        audioOptions
    )
    // playbackObject.sound.setVolumeAsync(0.3)
    // playbackObject.sound.unloadAsync()
}

export default PlayAudio;