import React from 'react';
import Logo from './logo';
import { Keyframes } from 'react-spring';
import genConfig from '../animations/rotateAndCorner';
const SIZE = 100;
const config = genConfig({ size: SIZE });

/**
 * Animates a given Element with a given keyframes config.
 * @param hasFinished - A callback, triggered when the whole element animation has finished.
 * @param configGen - The Config Generator to use. Found in ../animations.
 * @param configGenParams - The Parameters to pass to the config generator.
 * @param children - The element to animate. Is a function to which the styles parameter is passed.
 */
export default class Animated extends React.Component {
  config = this.props.configGen(this.props.configGenParams)
  state = {
    animCount: 0,
    anim: Keyframes.Spring({ animation: this.config }),
    animLength: this.config.length
  };

  incrementAnimations() {
    this.setState(state => ({ animCount: ++state.animCount }));
    if (this.state.animCount == this.state.animLength) this.props.hasFinished();
  }

  render = () => {
    const Container = this.state.anim;
    return (
      <Container state="animation" onRest={() => this.incrementAnimations()}>
        {styles => this.props.children(styles)}
      </Container>
    );
  };
}
