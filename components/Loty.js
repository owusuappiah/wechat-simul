import React from 'react';
import LottieView from "lottie-react-native";

export default class Loty extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
        <LottieView speed={this.props.speed}
          ref={animation => {
            this.animation = animation;
          }}
          style={this.props.style}
          source={this.props.source}
          loop={this.props.loop}
        />
    );
  }
}
