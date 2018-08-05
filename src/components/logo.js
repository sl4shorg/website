import React from 'react';
import { Img } from 'glamorous';
import { push } from "gatsby-link";
import logo from '../img/logo-white.png';

/**
 * Renders the logo.
 * @param size - The heigth & width of the logo.
 * @param fixed - If logo should be fixed. Can contain left, right, bottom, and top properties.
 * @param style - spring style properties used by animations
 */
export default ({ size, fixed, style }) => (
  <Img
    onClick={() => push('/')}
    cursor="pointer"
    width={size}
    height={size}
    src={logo}
    position={fixed && 'fixed'}
    left={fixed && fixed.left}
    right={fixed && fixed.right}
    top={fixed && fixed.top}
    bottom={fixed && fixed.bottom}
    margin={0}
    style={style}
  />
);
