import React from 'react';
import { Spring } from 'react-spring';
import Topbar from '../components/topbar';
import Slash from '../components/slash';
import Content from '../components/content';

export default class Layout extends React.Component {
  state = { isFinished: false, slashAnimation: 0 };
  setFinished = () => {
    this.setState({ isFinished: true });
    sessionStorage.setItem('hasBeenAnimated', true);
  };
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
        <Slash pos={0} opacity={0.4} move={-20} zIndex="-2" />
        <Slash pos={10} opacity={0.2} move={20} zIndex="-1" />
        {this.state.isFinished && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} onRest={() => console.log('Finished!')}>
            {styles => <Content style={styles}>{this.props.children()}</Content>}
          </Spring>
        )}
      </React.Fragment>
    );
  };
}
