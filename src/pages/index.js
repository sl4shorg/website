import React from 'react';
import Loader from '../components/loader';
import glamorous from 'glamorous';
import { Transition } from 'react-spring';

const Navbar = glamorous.div({
  position: 'fixed',
  left: '120px',
  top: '32px',
  height: '50px',
  width: 'calc(100vw - 240px)',
  display: 'flex',
  alignItems: 'center'
});

const NavbarButton = glamorous.button({
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

/**
 * The Index starts a loading animation with the logo.
 * After finishing, displays the sidebar.
 */
export default class Index extends React.Component {
  state = { hasFinished: false };
  render = () => (
    <div>
      <Loader hasFinished={() => this.setState({ hasFinished: true })} />
      <Transition
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {this.state.hasFinished &&
          (styles => (
            <div style={styles}>
              <Navbar>
                <NavbarButton>Home</NavbarButton>
                <NavbarButton>About Us</NavbarButton>
                <NavbarButton>Projects</NavbarButton>
                <NavbarButton>Blog</NavbarButton>
                <NavbarButton>Github</NavbarButton>
              </Navbar>
            </div>
          ))}
      </Transition>
    </div>
  );
}
