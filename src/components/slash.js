import glamorous from 'glamorous';

/**
 * A animated slash over the page
 * @param pos - Where the slash should be.
 * @param opacity - The opacity of the slash.
 * @param move - How many pixels the slash should move.
 */
export default glamorous.div(props => ({
  height: '200vh',
  width: '30px',
  position: 'fixed',
  left: `calc(80vw + ${props.pos || 0}px)`,
  opacity: props.opacity || 1,
  zIndex: props.index || -1,
  top: '-10vh',
  backgroundColor: '#e9f7fe',
  transform: 'rotate(10deg)',
  style: props.styles,
  transition: 'transform 1s',
  ':hover': {
    transform: `rotate(10deg) translate(${props.move || 0}px, 0px)`
  }
}));