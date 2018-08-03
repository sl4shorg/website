import React from 'react';
import Logo from './logo';
import { Spring } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';

/**
 * Displays a page-wide loading screen, just with a rotating white logo.
 */
export default () => (
  <Spring
    impl={TimingAnimation}
    config={{ duration: 1000, easing: Easing.elastic(1) }}
    from={{ opacity: 0, transform: 'rotate(0deg)' }}
    to={{ opacity: 1, transform: 'rotate(-180deg)' }}
  >
    {styles => <Logo size="50" isCentered style={styles} />}
  </Spring>
);
