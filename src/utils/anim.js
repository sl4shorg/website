/**
 * Cast object properties to css properties.
 */
const css = style => ({
  opacity: style.opacity,
  transform: buildTransformString(style)
});

/**
 * Build the transform string by checking if certain properties exist, and then concating them.
 */
const buildTransformString = ({ rotate, x, y, scale }) => {
  let string = '';
  if(rotate != undefined) string += `rotate(${rotate}deg) `;
  if(x != undefined && y != undefined) string += `translate(${x}px, ${y}px) `;
  if(scale != undefined) string += `scale(${scale})`;
  return string;
};

export default css;