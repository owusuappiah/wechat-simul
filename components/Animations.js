import React from 'react';
import { StyleSheet, View, Text, Modal, Image } from 'react-native';
import Loty from "./Loty"
import { Colors } from '../css/DefaultsCss';
import { Platform } from 'react-native';
import { Dimensions } from 'react-native';

const isAndroid = () => Platform.OS === "android"

// export function ScannerInitialAnimation() {

//   return (
//     // isAndroid() ? null :
//     <Loty style={styles.scanner} speed={3} source={require('../assets/lottie/scanner.json')} />
//   );
// }

export function RecordingAnimation({style}) {

  return (
    // isAndroid() ? null :
    <Loty style={style} speed={3} source={require('../assets/lottie/recording.json')} />
  );
}

const styles = StyleSheet.create({
  
});
