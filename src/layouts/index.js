import React, { Children } from 'react';
import Topbar from '../components/topbar';
import Content from '../components/content';

export default class Layout extends React.Component {
  state = { isFinished: false };
  setFinished = () => {
    this.setState({ isFinished: true });
    sessionStorage.setItem('hasBeenAnimated', true);
  }
  isAnimated = () => {
    return sessionStorage.getItem('hasBeenAnimated') == undefined;
  }
  render = () => {
    return (
      <React.Fragment>
        <Topbar animated={this.isAnimated()} hasFinished={() => this.setFinished()} />
        {this.state.isFinished && <Content>{this.props.children()}</Content>}
      </React.Fragment>
    );
  };
}
