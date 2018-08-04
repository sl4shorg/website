import glamorous from 'glamorous';

/**
 * The styled element in which the page content will be rendered.
 */
export default glamorous.div(props => ({
  position: 'relative',
  left: '32px',
  top: '114px',
  width: 'calc(100vw - 64px)',
  color: 'white',
  style: props.style
}));