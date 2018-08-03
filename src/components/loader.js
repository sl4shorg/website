import React from 'react';
import Logo from './logo';
import { Keyframes } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';

const LogoImage = Keyframes.Spring({
  rotateInOut: [
    { 
      impl: TimingAnimation,
      config: { duration: 1000, easing: Easing.elastic(1) },
      from: { opacity: 0, rotate: 0 },
      to: { opacity: 1, rotate: -180 }
    },
    { 
      impl: TimingAnimation,
      config: { duration: 1000, easing: Easing.elastic(1) },
      to: { opacity: 0, rotate: -360 }
    }
    /*
    For testing purposes
    { 
      impl: TimingAnimation,
      config: { duration: 1000, easing: Easing.elastic(1) },
      from: { x: 0, y: 0 },
      to: { x: -300, y: 0 }
    },
    { 
      impl: TimingAnimation,
      config: { duration: 500, easing: Easing.elastic(0) },
      from: { scale: 1 },
      to: { scale: 0 }
    }
    */
  ]
});

/**
 * Displays a page-wide loading screen, just with a rotating white logo.
 */
export default () => (
  <div>
    <LogoImage state="rotateInOut" onRest={() => console.log('Finished!')}>
      {styles => <Logo size="50" isCentered style={styles} />}
    </LogoImage>
  </div>
);
