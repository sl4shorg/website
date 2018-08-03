import React from 'react';
import { Transition } from 'react-spring';
import { push } from 'gatsby-link';
import InitialAnimation from '../components/initial-animation';
import Logo from '../components/logo';
import Navbar from '../components/navbar';
import NavbarButton from '../components/navbar-button';
import Content from '../components/content';

export default class Layout extends React.Component {
  state = {
    isFinished: false,
    navigation: [{ name: 'About Us', to: '/about-us' }]
  };
  isFirstRender = () => true;
  render = () => {
    if (this.isFirstRender()) {
      return (
        <React.Fragment>
          <InitialAnimation
            hasFinished={() => this.setState({ isFinished: true })}
            navigation={this.state.navigation}
          />
          <Transition
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {this.state.isFinished &&
              (styles => (
                <Content style={styles}>{this.props.children()}</Content>
              ))}
          </Transition>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Logo size={50} fixed={{ left: '32px', top: '32px' }} />
        <Navbar>
          {this.state.navigation.map(nav => (
            <NavbarButton onClick={() => push(nav.to)}>{nav.name}</NavbarButton>
          ))}
        </Navbar>
      </React.Fragment>
    );
  };
}
