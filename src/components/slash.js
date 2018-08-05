import glamorous from 'glamorous';
import css from '../utils/anim';

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
  left: `80vw`,
  zIndex: -2,
  top: '-10vh',
  backgroundColor: '#e9f7fe',
}));