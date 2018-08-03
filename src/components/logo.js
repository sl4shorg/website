import React from 'react';
import { Img } from 'glamorous';
import css from '../utils/anim';
import logo from '../img/logo-white.png';

/**
 * Renders the logo.
 * @param size - The heigth & width of the logo.
 * @param isFixed - If the Logo should be fixed.
 * @param style - spring style properties
 */
export default ({ size, isFixed, style }) => (
  <Img
    width={size}
    height={size}
    src={logo}
    position={isFixed && 'fixed'}
    margin={0}
    style={css(style)}
  />
);
