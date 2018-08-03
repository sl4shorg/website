import React from 'react';
import { Img } from 'glamorous';
import css from '../utils/anim';
import logo from '../img/logo-white.png';

/**
 * Renders the logo.
 * @param size - The heigth & width of the logo.
 * @param isCentered - If the Logo should be centered vertically and horizontally within the parent element.
 * @param style - spring style properties
 */
export default ({ size, isCentered, style }) => (
  <Img
    width={size}
    height={size}
    src={logo}
    display={isCentered && 'block'}
    margin={isCentered && `calc(50vh - ${size}px / 2) auto`}
    style={css(style)}
  />
);
