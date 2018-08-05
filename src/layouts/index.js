import React from 'react';
import { Spring } from 'react-spring';
import css from '../utils/anim';
import Topbar from '../components/topbar';
import Slash from '../components/slash';
import Content from '../components/content';

export default class Layout extends React.Component {
  state = { isFinished: false, slashAnimation: 0 };
  setFinished = () => {
    this.setState({ isFinished: true });
    sessionStorage.setItem('hasBeenAnimated', true);
  };
  toggleSlash = () =>
    this.setState(state => ({
      slashAnimation: state.slashAnimation == 0 ? 1 : 0
    }));
  isAnimated = () => {
    return sessionStorage.getItem('hasBeenAnimated') == undefined;
  };
  render = () => {
    return (
      <React.Fragment>
        <Topbar
          animated={this.isAnimated()}
          hasFinished={() => this.setFinished()}
        />
        {this.state.isFinished && (
          <React.Fragment>
            <Spring from={{ opacity: 0, rotate: 10, x: 30 }} to={{ opacity: 0.4, rotate: 10, x: 0 }}>
              {styles => <Slash style={css(styles)} />}
            </Spring>
            <Spring from={{ opacity: 0, rotate: 10, x: -20 }} to={{ opacity: 0.2, rotate: 10, x: 10 }}>
              {styles => <Slash style={css(styles)} />}
            </Spring>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {styles => (
                <Content style={css(styles)}>{this.props.children()}</Content>
              )}
            </Spring>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };
}
