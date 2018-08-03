import React from 'react';
import { Transition } from 'react-spring';
import { push } from 'gatsby-link';
import AnimatedLogo from './logo-animated';
import Navbar from './navbar';
import NavbarButton from './navbar-button';

/**
 * The initial animation.
 * Includes the logo and the navbar.
 * @param hasFinished - A callback, triggered when the logo animation has finished.
 * @param navigation - A array of the navigation items.
 */
export default class InitialAnimation extends React.Component {
  state = { logoAnimHasFinished: false };
  setLogoFinished = () => {
    this.setState({ logoAnimHasFinished: true });
    if (this.props.hasFinished) this.props.hasFinished();
  };
  render = () => (
    <React.Fragment>
      <AnimatedLogo hasFinished={this.setLogoFinished} />
      <Transition
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {this.state.logoAnimHasFinished &&
          (styles => (
            <div style={styles}>
              <Navbar>
                {this.props.navigation.map(nav => (
                  <NavbarButton onClick={() => push(nav.to)}>
                    {nav.name}
                  </NavbarButton>
                ))}
              </Navbar>
            </div>
          ))}
      </Transition>
    </React.Fragment>
  );
}
