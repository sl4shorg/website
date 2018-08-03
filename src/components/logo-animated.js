import React from 'react';
import Logo from './logo';
import { Keyframes } from 'react-spring';
import genConfig from '../animations/logo';
const SIZE = 100;
const config = genConfig({ size: SIZE });

/**
 * Animates the Logo.
 * @param hasFinished - A callback, triggered when the logo animation has finished.
 */
export default class AnimatedLogo extends React.Component {
  state = {
    animCount: 0,
    anim: Keyframes.Spring({ animation: config }),
    animLength: config.length
  };

  incrementAnimations() {
    this.setState(state => ({ animCount: ++state.animCount }));
    if (this.state.animCount == this.state.animLength) this.props.hasFinished();
  }

  render = () => {
    const Container = this.state.anim;
    return (
      <Container state="animation" onRest={() => this.incrementAnimations()}>
        {styles => (
          <Logo
            size={SIZE}
            fixed
            style={styles}
          />
        )}
      </Container>
    );
  };
}
