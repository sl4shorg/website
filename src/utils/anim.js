/**
 * Casts custom properties to css properties.
 * Accepts all css properties, and more:
 * @param rotate - the rotation in degrees
 * @param x - the translation in x
 * @param y - the translation in y
 * @param scale - the scale
 */
const css = style => ({
  transform: buildTransformString(style),
  ...style
});

/**
 * Build the transform string by checking if certain properties exist, and then concating them.
 */
const buildTransformString = ({ rotate, x, y, scale }) => {
  let string = '';
  if(rotate != undefined) string += `rotate(${rotate}deg) `;
  if(x != undefined || y != undefined) string += `translate(${x || 0}px, ${y || 0}px) `;
  if(scale != undefined) string += `scale(${scale})`;
  return string;
};

export default css;