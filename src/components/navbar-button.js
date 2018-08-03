import glamorous from 'glamorous';

export default glamorous.button({
  position: 'relative',
  height: '80%',
  backgroundColor: 'inherit',
  border: '2px solid #e9f7fe',
  boxShadow: '2px 2px',
  fontSize: '14px',
  fontFamily: 'sans-serif',
  color: 'white',
  textTransform: 'uppercase',
  cursor: 'pointer',
  marginRight: 15,
  ':hover': {
    boxShadow: '0px 0px',
    left: 2,
    top: 2
  }
});