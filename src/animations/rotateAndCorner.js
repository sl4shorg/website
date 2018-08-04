import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';

/**
 * The animation keyframes for the initial logo animation.
 */
export default ({ size }) => [
  {
    impl: TimingAnimation,
    config: { duration: 1, easing: Easing.linear },
    from: {
      left: `${window.innerWidth / 2 - size / 2}px`,
      top: `${window.innerHeight / 2 - size / 2}px`,
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
];
