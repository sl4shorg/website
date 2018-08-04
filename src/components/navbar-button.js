import glamorous from 'glamorous';
import Link from "gatsby-link";

/**
 * A button on the navbar.
 */
export default glamorous(Link)({
  appearance: 'button',
  position: 'relative',
  height: '80%',
  backgroundColor: 'inherit',
  border: '2px solid #e9f7fe',
  boxShadow: '2px 2px white',
  fontSize: '14px',
  color: 'white',
  textTransform: 'uppercase',
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '8px 10px 0px 10px',
  marginRight: 15,
  ':hover': {
    boxShadow: '0px 0px',
    left: 2,
    top: 2
  }
});