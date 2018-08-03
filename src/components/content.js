import glamorous from 'glamorous';

export default glamorous.div(props => ({
  position: 'relative',
  left: '32px',
  top: '114px',
  width: 'calc(100vw - 64px)',
  color: 'white',
  fontFamily: 'sans-serif',
  style: props.styles
}));