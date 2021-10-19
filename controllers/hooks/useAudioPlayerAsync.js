import { Audio } from 'expo-av';

async function PlayAudio(source, audioOptions = {}) {
    const playbackObject = await Audio.Sound.createAsync(source,
        audioOptions
    )
}

export default PlayAudio;