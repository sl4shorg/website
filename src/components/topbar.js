import React from 'react';
import { Transition } from 'react-spring';
import Logo from './logo';
import Animated from './animated';
import Navbar from '../components/navbar';
import NavbarButton from '../components/navbar-button';
import configGen from '../animations/rotateAndCorner';
const configGenParams = { size: 100 };
const activeLinkStyle = { textDecoration: 'underline' }

/**
 * The TopBar with the logo and navigation.
 * @param animated - If loading of the TopBar should be animated.
 * @param hasFinished - A callback, triggered when the whole element animation has finished.
 */
export default class TopBar extends React.Component {
  state = { hasFinished: false };
  componentDidMount() {
    if (!this.props.animated) this.setFinished();
  }
  setFinished() {
    this.setState({ hasFinished: true });
    this.props.hasFinished();
  }
  render() {
    const LogoHandler = this.props.animated ? (
      <Animated
        hasFinished={() => this.setFinished()}
        configGen={configGen}
        configGenParams={configGenParams}
      >
        {styles => <Logo size={configGenParams.size} fixed style={styles} />}
      </Animated>
    ) : (
      <Logo
        size={configGenParams.size / 2}
        fixed={{ top: '32px', left: '32px' }}
      />
    );
    return (
      <div>
        {LogoHandler}
        <Transition
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {this.state.hasFinished &&
            (styles => (
              <div style={styles}>
                <Navbar>
                  <NavbarButton to="/team" activeStyle={activeLinkStyle}>Team</NavbarButton>
                  <NavbarButton to="/projects" activeStyle={activeLinkStyle}>Projects</NavbarButton>
                  <NavbarButton to="/blog" activeStyle={activeLinkStyle}>Blog</NavbarButton>
                  <NavbarButton to="/contact" activeStyle={activeLinkStyle}>Contact</NavbarButton>
                </Navbar>
              </div>
            ))}
        </Transition>
      </div>
    );
  }
}
