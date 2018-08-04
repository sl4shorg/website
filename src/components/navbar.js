import glamorous from 'glamorous';

/**
 * The Navigation bar on top of the page.
 */
export default glamorous.div({
  position: 'fixed',
  left: '120px',
  top: '32px',
  height: '50px',
  width: 'calc(100vw - 240px)',
  display: 'flex',
  alignItems: 'center'
});