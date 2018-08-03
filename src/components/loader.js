import React from 'react';
import Logo from './logo';
import { Keyframes } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';

// The Logo size
const size = 100;

// The initial Logo Animation
const LogoContainer = Keyframes.Spring({
  rotateAndMoveToCorner: [
    {
      impl: TimingAnimation,
      config: { duration: 1, easing: Easing.linear },
      from: {
        left: `${window.innerWidth/2 - size/2}px`,
        top: `${window.innerHeight/2 - size/2}px`,
        opacity: 0,
        rotate: 0,
        scale: 1
      }
    },
    {
      impl: TimingAnimation,
      config: { duration: 1000, easing: Easing.elastic(1) },
      to: { opacity: 1, rotate: -180 }
    },
    {
      impl: TimingAnimation,
      config: { duration: 1000, easing: Easing.elastic(0.8) },
      to: { left: '8px', top: '8px', scale: 0.5 }
    }
  ]
});

/**
 * Displays a page-wide loading screen, just with a rotating white logo.
 */
export default class Loader extends React.Component {
  state = { animations: 0 }

  incrementAnimations() {
    this.setState(state => ({ animations: ++state.animations }));
    if(this.state.animations == 3) this.props.hasFinished();
  }

  render = () => (
    <LogoContainer state="rotateAndMoveToCorner" onRest={() => this.incrementAnimations()}>
      {styles => <Logo size={size} isFixed style={styles} />}
    </LogoContainer>
  );
}
